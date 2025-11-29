// src/controllers/chat.controller.js
const asyncHandler = require("express-async-handler");
const Chat = require("../models/chat.model");
const Message = require("../models/message.model");

/**
 * @desc    Create a new chat channel
 * @route   POST /api/chats
 * @access  Private
 */
const createChannel = asyncHandler(async (req, res) => {
  const { name, members } = req.body;

  if (!name || !members || !Array.isArray(members) || members.length === 0) {
    res.status(400);
    throw new Error("Channel name and members are required");
  }

  const channel = await Chat.create({
    name,
    members,
  });

  res.status(201).json({ message: "Channel created successfully", channel });
});

/**
 * @desc    Get all channels a user is part of
 * @route   GET /api/chats/user/:userId
 * @access  Private
 */
const getUserChannels = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const channels = await Chat.find({ members: userId }).populate("members", "name email");
  res.status(200).json(channels);
});

/**
 * @desc    Send a message in a channel
 * @route   POST /api/chats/:channelId/messages
 * @access  Private
 */
const sendMessage = asyncHandler(async (req, res) => {
  const { channelId } = req.params;
  const { sender, content, media } = req.body;

  if (!sender || (!content && !media)) {
    res.status(400);
    throw new Error("Sender and message content or media are required");
  }

  const message = await Message.create({
    channel: channelId,
    sender,
    content: content || "",
    media: media || [],
  });

  res.status(201).json({ message: "Message sent successfully", message });
});

/**
 * @desc    Get all messages in a channel
 * @route   GET /api/chats/:channelId/messages
 * @access  Private
 */
const getChannelMessages = asyncHandler(async (req, res) => {
  const { channelId } = req.params;
  const messages = await Message.find({ channel: channelId })
    .populate("sender", "name email")
    .sort({ createdAt: 1 });
  res.status(200).json(messages);
});

/**
 * @desc    Delete a message
 * @route   DELETE /api/chats/messages/:id
 * @access  Private
 */
const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);
  if (!message) {
    res.status(404);
    throw new Error("Message not found");
  }

  await message.remove();
  res.status(200).json({ message: "Message deleted successfully" });
});

module.exports = {
  createChannel,
  getUserChannels,
  sendMessage,
  getChannelMessages,
  deleteMessage,
};
