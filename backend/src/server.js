// src/server.js
require("dotenv").config();

const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");
const initializeSocket = require("./sockets/chat");

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Connect to DB first
connectDB()
  .then(() => {
    // Attach Socket.io with CORS rules
    const io = initializeSocket(server); // returns io instance
    // Start server
    server.listen(PORT, () => {
      console.log(`🚀 Komunify Backend listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server due to DB error:", err);
    process.exit(1);
  });

// Graceful shutdown
function shutdown() {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("HTTP server closed.");
    process.exit(0);
  });
  setTimeout(() => {
    console.error("Forcing shutdown.");
    process.exit(1);
  }, 10000).unref();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
