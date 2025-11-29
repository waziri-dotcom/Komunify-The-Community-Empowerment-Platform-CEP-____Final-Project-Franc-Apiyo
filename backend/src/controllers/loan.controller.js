// src/controllers/loan.controller.js
const asyncHandler = require("express-async-handler");
const Loan = require("../models/loan.model");

/**
 * @desc    Create a new loan
 * @route   POST /api/loans
 * @access  Private
 */
const createLoan = asyncHandler(async (req, res) => {
  const { amount, userId, term } = req.body;

  if (!amount || !userId || !term) {
    res.status(400);
    throw new Error("Amount, userId, and term are required");
  }

  const loan = await Loan.create({
    user: userId,
    amount,
    term,
    status: "Pending",
  });

  res.status(201).json({ message: "Loan created successfully", loan });
});

/**
 * @desc    Get all loans
 * @route   GET /api/loans
 * @access  Private/Admin
 */
const getLoans = asyncHandler(async (_req, res) => {
  const loans = await Loan.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });
  res.status(200).json(loans);
});

/**
 * @desc    Apply for a loan
 * @route   POST /api/loans/apply
 * @access  Private
 */
const applyLoan = asyncHandler(async (req, res) => {
  const { userId, amount, term } = req.body;

  if (!userId || !amount || !term) {
    res.status(400);
    throw new Error("userId, amount, and term are required");
  }

  const loan = await Loan.create({
    user: userId,
    amount,
    term,
    status: "Pending",
  });

  res.status(201).json({ message: "Loan application submitted", loan });
});

/**
 * @desc    Approve a loan
 * @route   POST /api/loans/approve/:id
 * @access  Private/Admin
 */
const approveLoan = asyncHandler(async (req, res) => {
  const loan = await Loan.findById(req.params.id);
  if (!loan) {
    res.status(404);
    throw new Error("Loan not found");
  }

  loan.status = "Approved";
  const updatedLoan = await loan.save();

  res.status(200).json({ message: "Loan approved", loan: updatedLoan });
});

/**
 * @desc    Get loans by user ID
 * @route   GET /api/loans/user/:id
 * @access  Private
 */
const getLoansByUser = asyncHandler(async (req, res) => {
  const loans = await Loan.find({ user: req.params.id }).sort({ createdAt: -1 });
  res.status(200).json(loans);
});

module.exports = {
  createLoan,
  getLoans,
  applyLoan,
  approveLoan,
  getLoansByUser,
};
