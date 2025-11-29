// src/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

// ====== ROUTES ======
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const communityRoutes = require("./routes/community.routes");
const donationRoutes = require("./routes/donation.routes");
const loanRoutes = require("./routes/loan.routes");
const eventRoutes = require("./routes/event.routes");
const ticketRoutes = require("./routes/ticket.routes");
const foodRoutes = require("./routes/foodAid.routes");
const chatRoutes = require("./routes/chat.routes");
const mpesaRoutes = require("./routes/donation.routes"); // double-check if this should be donation.routes

// ====== MIDDLEWARE ======
const errorHandler = require("./middleware/errorHandler");

// ====== INITIALIZE EXPRESS ======
const app = express();

// ====== GLOBAL MIDDLEWARE ======
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// ====== CLERK AUTH MIDDLEWARE ======
app.use(ClerkExpressWithAuth());

// ====== API ROUTES ======
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/mpesa", mpesaRoutes);

// ====== HEALTH CHECK ======
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Komunify Backend API",
    timestamp: new Date(),
  });
});

// ====== ERROR HANDLER ======
app.use(errorHandler);

module.exports = app;
