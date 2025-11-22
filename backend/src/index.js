// src/index.js
// Entry point - starts Express server + Socket.io and connects to DB.

const http = require('http');
const app = require('./app');
const { connectDB } = require('./config/db');
const socketServer = require('./sockets');

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await connectDB();
    const server = http.createServer(app);

    // Initialize socket.io and bind to server
    socketServer.attach(server);

    server.listen(PORT, () => {
      console.log(`Komunify API listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
