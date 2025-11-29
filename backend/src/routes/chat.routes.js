const express = require("express");
const router = express.Router();

const {
  createChannel,
  getUserChannels,
  sendMessage,
  getChannelMessages,
  deleteMessage,
} = require("../controllers/chat.controller");

// Create a channel
router.post("/channel", createChannel);

// Get all channels a user belongs to
router.get("/user/:userId", getUserChannels);

// Send a message in a channel
router.post("/:channelId/messages", sendMessage);

// Get all messages in a channel
router.get("/:channelId/messages", getChannelMessages);

// Delete a message
router.delete("/messages/:id", deleteMessage);

module.exports = router;
