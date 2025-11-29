const mongoose = require('mongoose');

const FoodListingSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, required: true },
  category: { type: String, enum: ['Cooked Meal','Dry Food','Produce','Mixed'], required: true },
  images: [{ url: String, key: String }],
  location: {
    address: String,
    coordinates: { type: [Number], index: '2dsphere' }
  },
  status: { type: String, enum: ['available','reserved','collected','expired'], default: 'available' },
  expiresAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('FoodListing', FoodListingSchema);
