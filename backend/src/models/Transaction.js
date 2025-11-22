// src/models/Transaction.js
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['deposit','withdraw','loan_disbursement','repayment','donation'], required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'KES' },
  provider: String,
  providerReference: String,
  status: { type: String, enum: ['pending','success','failed'], default: 'pending' },
  meta: mongoose.Schema.Types.Mixed
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
