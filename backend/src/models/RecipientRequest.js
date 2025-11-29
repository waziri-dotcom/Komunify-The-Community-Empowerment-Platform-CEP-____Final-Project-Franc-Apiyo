const RecipientRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  householdSize: { type: Number, required: true },
  urgencyLevel: { type: String, enum: ['low','medium','high'], default: 'medium' },
  notes: String,
  location: {
    address: String,
    coordinates: { type: [Number], index: '2dsphere' }
  },
  status: { type: String, enum: ['pending','matched','served'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('RecipientRequest', RecipientRequestSchema);

