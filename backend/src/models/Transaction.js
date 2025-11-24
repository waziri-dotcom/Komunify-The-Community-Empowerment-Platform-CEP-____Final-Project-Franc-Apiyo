const mongoose = require('mongoose');

const txSchema = new mongoose.Schema({
  type: { type: String, enum: ['deposit','withdraw','loan_disbursement','repayment','donation','stk_push'], required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: { type: Number, required: true },
  reference: String,
  meta: Object,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', txSchema);
