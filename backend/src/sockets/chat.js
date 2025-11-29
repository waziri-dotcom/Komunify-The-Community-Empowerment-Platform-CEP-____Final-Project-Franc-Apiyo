const mpesaService = require("../services/mpesaService");
const Chat = require("../models/chat.model");
const Ticket = require("../models/ticket.model");

module.exports = function initializeSocket(io) {
  io.on("connection", (socket) => {
    console.log("⚡ New client connected:", socket.id);

    // Join ticket room
    socket.on("join_ticket", (ticketId) => {
      socket.join(ticketId);
      console.log(`Socket ${socket.id} joined ticket room: ${ticketId}`);
    });

    // Handle chat messages
    socket.on("send_message", async (data) => {
      const { userId, ticketId, message, donateAmount, phoneNumber } = data;

      // Save message to DB
      const newMessage = await Chat.create({
        user: userId,
        ticket: ticketId,
        message,
      });

      // Broadcast to all clients in the ticket room
      io.to(ticketId).emit("receive_message", newMessage);

      // If donation amount exists, trigger M-Pesa STK Push
      if (donateAmount && donateAmount > 0) {
        try {
          const stkResponse = await mpesaService.stkPush({
            phoneNumber,
            amount: donateAmount,
            accountReference: `Ticket-${ticketId}`,
            transactionDesc: "Komunify Chat Donation",
          });

          socket.emit("mpesa_initiated", stkResponse);
        } catch (err) {
          console.error("M-Pesa STK Push error:", err);
          socket.emit("mpesa_error", { error: err.message });
        }
      }
    });

    // Disconnect
    socket.on("disconnect", () => {
      console.log("⚡ Client disconnected:", socket.id);
    });
  });
};
