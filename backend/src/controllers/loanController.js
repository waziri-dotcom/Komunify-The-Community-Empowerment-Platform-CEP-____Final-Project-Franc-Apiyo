const Loan = require('../models/Loan');
const Transaction = require('../models/Transaction');
const logger = require('../utils/logger');
const mpesaService = require('../services/mpesaService');

exports.applyLoan = async (req, res, next) => {
  try {
    const data = { ...req.body, borrower: req.user._id };
    const loan = await Loan.create(data);
    res.status(201).json({ loan });
  } catch (err) {
    logger.error('Loan apply error', err);
    next(err);
  }
};

exports.disburseLoan = async (req, res, next) => {
  try {
    const { loanId } = req.params;
    const loan = await Loan.findById(loanId);
    if (!loan) return res.status(404).json({ error: 'Loan not found' });

    // For demo: call mpesaService to issue payment (STK push or business to customer)
    const result = await mpesaService.sendToUser(loan.borrower, loan.amount);

    loan.status = 'disbursed';
    await loan.save();

    await Transaction.create({ type: 'loan_disbursement', user: loan.borrower, amount: loan.amount, reference: result.reference, meta: result });

    res.json({ loan, result });
  } catch (err) {
    next(err);
  }
};
