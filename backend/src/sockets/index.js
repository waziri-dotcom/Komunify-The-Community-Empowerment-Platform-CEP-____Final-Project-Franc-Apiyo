// src/sockets/index.js
// Simple socket.io wrapper with helper functions for emitting to users/rooms.
// Attach with: socketServer.attach(httpServer)

const { Server } = require('socket.io');
const Message = require('../models/Message');

let io;

function attach(server) {
  if (io) return io;
  io = new Server(server, {
    cors: { origin: process.env.CORS_ORIGIN || '*', methods: ['GET', 'POST'] }
  });

  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    // join rooms
    socket.on('joinRoom', ({ room }) => {
      if (room) {
        socket.join(room);
        socket.emit('joinedRoom', { room });
      }
    });

    // personal rooms for user notifications
    socket.on('joinUser', ({ userId }) => {
      if (userId) {
        socket.join(`user:${userId}`);
      }
    });

    socket.on('message', async (payload) => {
      // payload should include: room, senderId, text
      if (!payload || !payload.room) return;
      try {
        const msg = await Message.create({
          room: payload.room,
          sender: payload.sender,
          text: payload.text,
          attachments: payload.attachments || []
        });
        io.to(payload.room).emit('message', msg);
      } catch (err) {
        console.error('socket message error:', err);
      }
    });

    socket.on('disconnect', () => {
      // cleanup
    });
  });

  return io;
}

// helper to emit server-side
function emitToRoom(room, event, payload) {
  if (!io) return;
  io.to(room).emit(event, payload);
}

function emitToUser(userId, event, payload) {
  if (!io) return;
  io.to(`user:${userId}`).emit(event, payload);
}

module.exports = { attach, emitToRoom, emitToUser };
