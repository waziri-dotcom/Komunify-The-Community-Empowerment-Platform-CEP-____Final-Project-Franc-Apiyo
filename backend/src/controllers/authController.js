const User = require('../models/User');
const { validateEmail } = require('../utils/validators');
const logger = require('../utils/logger');

exports.register = async (req, res, next) => {
  try {
    const { name, email, phone, role } = req.body;
    if (!email || !validateEmail(email)) return res.status(400).json({ error: 'Invalid email' });

    let user = await User.findOne({ email });
    if (user) return res.status(409).json({ error: 'User already exists' });

    user = await User.create({ name, email, phone, role });
    res.status(201).json({ user });
  } catch (err) {
    logger.error('Register error', err);
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });
    // NOTE: This is placeholder — integrate Clerk/Auth provider or JWT as needed
    res.json({ user, token: 'placeholder-token' });
  } catch (err) {
    next(err);
  }
};

exports.me = async (req, res, next) => {
  try {
    const user = req.user; // set by auth middleware
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    res.json({ user });
  } catch (err) {
    next(err);
  }
};
