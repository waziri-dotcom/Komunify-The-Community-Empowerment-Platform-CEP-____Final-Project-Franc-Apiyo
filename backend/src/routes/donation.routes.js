// src/routes/donation.routes.js
const express = require("express");
const router = express.Router();

// Correct import with destructuring
const { createDonation } = require("../controllers/donations.Controller");

// Use the function
router.post("/", createDonation);

module.exports = router;
