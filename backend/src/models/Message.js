// src/models/Message.js
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  room: { type: String, required: true }, // e.g., community:{id} or project:{id} or direct:user1-user2
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  attachments: [String],
  readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);
