const { Server } = require("socket.io");
const Message = require("../models/Message");

let io;

function attach(server) {
  if (io) return io;

  io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN || "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("joinRoom", ({ room }) => {
      if (room) {
        socket.join(room);
        socket.emit("joinedRoom", { room });
      }
    });

    socket.on("joinUser", ({ userId }) => {
      if (userId) {
        socket.join(`user:${userId}`);
      }
    });

    socket.on("message", async (payload) => {
      if (!payload || !payload.room) return;

      try {
        const msg = await Message.create({
          room: payload.room,
          sender: payload.sender,
          text: payload.text,
          attachments: payload.attachments || [],
        });
        io.to(payload.room).emit("message", msg);
      } catch (err) {
        console.error("socket message error:", err);
      }
    });

    socket.on("disconnect", () => {});
  });

  return io;
}

function emitToRoom(room, event, payload) {
  if (!io) return;
  io.to(room).emit(event, payload);
}

function emitToUser(userId, event, payload) {
  if (!io) return;
  io.to(`user:${userId}`).emit(event, payload);
}

module.exports = attach; // <--- export ONLY the attach function
