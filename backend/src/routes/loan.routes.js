// src/routes/loan.routes.js
const express = require("express");
const router = express.Router();

// Import all loan controller functions in a single destructure
const {
  createLoan,
  getLoans,
  applyLoan,
  approveLoan,
  getLoansByUser,
} = require("../controllers/loan.controller");

// Routes

// Create a new loan
router.post("/", createLoan);

// Get all loans
router.get("/", getLoans);

// Apply for a loan
router.post("/apply", applyLoan);

// Approve a loan by ID
router.post("/approve/:id", approveLoan);

// Get all loans for a specific user
router.get("/user/:id", getLoansByUser);

module.exports = router;
