// Lightweight auth middleware — replace with Clerk or JWT in production
const User = require('../models/User');
const clerkService = require('../services/clerkService');

exports.authenticate = async (req, res, next) => {
  try {
    // try session token header
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Missing auth token' });

    const session = await clerkService.verifySession(token);
    if (!session) return res.status(401).json({ error: 'Invalid session' });

    // try find user from email
    const user = await User.findOne({ email: session.email });
    if (!user) return res.status(401).json({ error: 'User not found' });

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

exports.authorize = (role) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
  if (req.user.role !== role) return res.status(403).json({ error: 'Forbidden' });
  next();
};
