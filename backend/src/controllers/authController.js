// src/controllers/authController.js
// Provides endpoints to verify Clerk session (stub) and create local user record.

const User = require('../models/User');
const clerkService = require('../services/clerkService');

/**
 * POST /api/auth/verify-clerk
 * Body: { token }
 * The frontend (Clerk) should send a session token or user identifier.
 */
async function verifyClerk(req, res, next) {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: 'Missing token' });

    // clerkService should verify the token and return a basic user profile
    const profile = await clerkService.verifyToken(token);
    if (!profile) return res.status(401).json({ error: 'Invalid clerk token' });

    // Find or create user in DB
    let user = await User.findOne({ clerkId: profile.id });
    if (!user) {
      user = await User.create({
        clerkId: profile.id,
        email: profile.email,
        name: profile.fullName || profile.firstName || 'Komunify User',
        phone: profile.phoneNumber
      });
    }

    // Generate a backend session token (optional) - for now we return user record
    res.json({ user });
  } catch (err) {
    next(err);
  }
}

module.exports = { verifyClerk };
