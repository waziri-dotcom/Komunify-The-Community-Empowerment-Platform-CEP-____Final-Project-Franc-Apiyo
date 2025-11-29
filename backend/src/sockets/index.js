// src/sockets/index.js
const Chat = require("../models/chat.model");
const { getAIResponse } = require("../services/aiAssistantService");

function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("userMessage", async ({ userId, message }) => {
      // Save user message
      let chat = await Chat.findOne({ userId });
      if (!chat) chat = new Chat({ userId, messages: [] });

      chat.messages.push({ sender: "user", message });
      await chat.save();

      // AI response
      const aiReply = await getAIResponse(message);
      chat.messages.push({ sender: "ai", message: aiReply });
      await chat.save();

      // Emit AI reply back to user
      socket.emit("aiMessage", { message: aiReply });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}

module.exports = initSocket;
