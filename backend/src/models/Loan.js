const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  termMonths: { type: Number, default: 6 },
  interestRate: { type: Number, default: 0.05 },
  status: { type: String, enum: ['pending','approved','rejected','disbursed','closed'], default: 'pending' },
  repaymentSchedule: [{ dueDate: Date, amount: Number, paid: { type: Boolean, default: false } }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Loan', loanSchema);
