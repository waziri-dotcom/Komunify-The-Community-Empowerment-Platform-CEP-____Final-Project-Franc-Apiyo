const Message = require('../models/Message');

exports.sendMessage = async (req, res, next) => {
  try {
    const data = { ...req.body, from: req.user._id };
    const msg = await Message.create(data);
    // integration point: emit socket event
    res.status(201).json({ msg });
  } catch (err) { next(err); }
};

exports.history = async (req, res, next) => {
  try {
    const { channel } = req.query;
    const messages = await Message.find(channel ? { channel } : {}).sort({ createdAt: 1 }).limit(200);
    res.json({ messages });
  } catch (err) { next(err); }
};
