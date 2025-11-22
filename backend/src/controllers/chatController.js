// src/controllers/chatController.js
const Message = require('../models/Message');

/**
 * POST /api/chat/rooms/:room/messages
 * Body: { text, attachments }
 */
async function postMessage(req, res, next) {
  try {
    const { room } = req.params;
    const payload = {
      room,
      sender: req.user._id,
      text: req.body.text,
      attachments: req.body.attachments || []
    };
    const message = await Message.create(payload);

    // Emit via sockets
    const { emitToRoom } = require('../sockets');
    emitToRoom(room, 'message', message);

    res.status(201).json(message);
  } catch (err) { next(err); }
}

async function getMessages(req, res, next) {
  try {
    const { room } = req.params;
    const messages = await Message.find({ room }).sort({ createdAt: 1 }).limit(200);
    res.json(messages);
  } catch (err) { next(err); }
}

module.exports = { postMessage, getMessages };
