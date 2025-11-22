// src/models/Event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: { type: String, enum: ['Training','Mentorship','Fundraising','Networking','CommunityService'], default: 'Training' },
  startAt: Date,
  endAt: Date,
  location: String,
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  virtualUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
