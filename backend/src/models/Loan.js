// src/models/Loan.js
const mongoose = require('mongoose');

const ScheduleItem = new mongoose.Schema({
  dueDate: Date,
  amount: Number,
  paid: { type: Boolean, default: false },
  paidAt: Date
}, { _id: false });

const LoanSchema = new mongoose.Schema({
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  termMonths: { type: Number, default: 3 },
  interestRate: { type: Number, default: 0 },
  status: { type: String, enum: ['pending','approved','active','closed','defaulted'], default: 'pending' },
  disbursedAt: Date,
  schedule: [ScheduleItem],
  meta: mongoose.Schema.Types.Mixed
}, { timestamps: true });

module.exports = mongoose.model('Loan', LoanSchema);
