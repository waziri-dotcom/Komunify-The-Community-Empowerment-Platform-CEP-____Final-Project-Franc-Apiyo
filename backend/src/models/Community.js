// src/models/Community.js
const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  region: String,
  tags: [String],
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  impactScore: { type: Number, default: 0 },
  coverImage: String
}, { timestamps: true });

module.exports = mongoose.model('Community', CommunitySchema);
