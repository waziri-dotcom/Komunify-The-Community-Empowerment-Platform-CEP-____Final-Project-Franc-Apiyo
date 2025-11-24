const mongoose = require('mongoose');

const foodListingSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  category: String,
  quantity: Number,
  unit: { type: String, default: 'kg' },
  expiresAt: Date,
  pickupLocation: {
    address: String,
    coordinates: { type: [Number], index: '2dsphere' }
  },
  status: { type: String, enum: ['available','matched','picked','cancelled'], default: 'available' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FoodListing', foodListingSchema);
