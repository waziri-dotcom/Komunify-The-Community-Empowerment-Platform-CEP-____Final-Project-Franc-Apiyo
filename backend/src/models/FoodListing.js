// src/models/FoodListing.js
const mongoose = require('mongoose');

const FoodListingSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  description: String,
  quantity: Number,
  unit: { type: String, default: 'kg' },
  category: String,
  pickupBy: Date,
  expiryAt: Date,
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number] // [lng, lat]
  },
  status: { type: String, enum: ['available','matched','picked','delivered','cancelled'], default: 'available' },
  matchedRecipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  images: [String],
}, { timestamps: true });

FoodListingSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('FoodListing', FoodListingSchema);
