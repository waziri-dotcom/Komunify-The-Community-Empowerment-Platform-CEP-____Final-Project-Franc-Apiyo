// src/models/User.js
const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
  balance: { type: Number, default: 0 },
  currency: { type: String, default: 'KES' },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }]
}, { _id: false });

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, index: true, unique: true, sparse: true }, // store Clerk id if available
  email: { type: String, index: true, sparse: true },
  name: { type: String },
  phone: { type: String },
  role: { type: String, enum: ['user','donor','mentor','admin','developer'], default: 'user' },
  profilePhoto: { type: String },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0,0] } // [lng, lat]
  },
  wallet: WalletSchema,
  impact: {
    tonnesSaved: { type: Number, default: 0 },
    loansIssued: { type: Number, default: 0 },
    mentorshipHours: { type: Number, default: 0 }
  }
}, { timestamps: true });

UserSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('User', UserSchema);
