// src/routes/auth.js
const express = require('express');
const router = express.Router();
const { verifyClerk } = require('../controllers/authController');

router.post('/verify-clerk', verifyClerk);

// Optionally add endpoints to fetch local user profile etc.

module.exports = router;
