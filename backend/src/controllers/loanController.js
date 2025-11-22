// src/controllers/loanController.js
const Loan = require('../models/Loan');
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const mpesaService = require('../services/mpesaService');
const { emitToUser } = require('../sockets');

async function applyLoan(req, res, next) {
  try {
    const user = req.user;
    const { amount, termMonths } = req.body;
    if (!amount) return res.status(400).json({ error: 'amount required' });

    const loan = await Loan.create({
      borrower: user._id,
      amount,
      termMonths: termMonths || 3,
      interestRate: 0, // implement scoring later
      status: 'pending'
    });

    res.status(201).json(loan);
  } catch (err) { next(err); }
}

async function getLoan(req, res, next) {
  try {
    const { id } = req.params;
    const loan = await Loan.findById(id).populate('borrower');
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    res.json(loan);
  } catch (err) { next(err); }
}

/**
 * Admin approves -> disburse (sample flow: create transaction, call mpesaService to push)
 * POST /api/loans/:id/approve
 */
async function approveLoan(req, res, next) {
  try {
    const { id } = req.params;
    const loan = await Loan.findById(id).populate('borrower');
    if (!loan) return res.status(404).json({ error: 'Loan not found' });

    // set status -> active
    loan.status = 'approved';
    loan.disbursedAt = new Date();
    // generate schedule (very simple equal installments)
    const installment = Math.round((loan.amount / loan.termMonths) * 100) / 100;
    loan.schedule = Array.from({ length: loan.termMonths }, (_, i) => ({
      dueDate: new Date(Date.now() + (i + 1) * 30 * 24 * 3600 * 1000),
      amount: installment
    }));
    await loan.save();

    // create transaction record
    const txn = await Transaction.create({
      user: loan.borrower._id,
      type: 'loan_disbursement',
      amount: loan.amount,
      status: 'pending',
      meta: { loanId: loan._id }
    });

    // attempt MPESA disbursement (STK push to borrower or org wallet)
    // mpesaService.disburse(...) is a placeholder. Implement with Daraja API.
    try {
      const mpesaResult = await mpesaService.disburse({ phone: loan.borrower.phone, amount: loan.amount, callbackMeta: { txnId: txn._id } });
      // record mpesaResult in txn.meta
      txn.provider = 'mpesa';
      txn.providerReference = mpesaResult?.CheckoutRequestID || mpesaResult?.requestId || '';
      txn.status = 'pending';
      txn.meta = { ...txn.meta, mpesaResult };
      await txn.save();
    } catch (mpErr) {
      txn.status = 'failed';
      txn.meta = { ...txn.meta, error: mpErr.message || mpErr };
      await txn.save();
      // notify admin, but still proceed
    }

    emitToUser(loan.borrower._id.toString(), 'loanApproved', { loan });

    res.json({ loan, txn });
  } catch (err) { next(err); }
}

module.exports = {
  applyLoan,
  getLoan,
  approveLoan
};
