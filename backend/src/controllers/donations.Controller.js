// src/controllers/donation.controller.js
const asyncHandler = require("express-async-handler");
const Donation = require("../models/donation.model");

/**
 * @desc    Create a new donation
 * @route   POST /api/donations
 * @access  Private
 */
const createDonation = asyncHandler(async (req, res) => {
  const { donorName, amount, userId } = req.body;

  if (!donorName || !amount || !userId) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const donation = await Donation.create({ donorName, amount, user: userId });

  res.status(201).json({
    message: "Donation created successfully",
    donation,
  });
});

/**
 * @desc    Get all donations
 * @route   GET /api/donations
 * @access  Private/Admin
 */
const getDonations = asyncHandler(async (_req, res) => {
  const donations = await Donation.find().populate("user", "name email");
  res.status(200).json(donations);
});

/**
 * @desc    Get donation by ID
 * @route   GET /api/donations/:id
 * @access  Private
 */
const getDonationById = asyncHandler(async (req, res) => {
  const donation = await Donation.findById(req.params.id);

  if (!donation) {
    res.status(404);
    throw new Error("Donation not found");
  }

  res.status(200).json(donation);
});

module.exports = {
  createDonation,
  getDonations,
  getDonationById,
};
