const User = require("../models/user.model");
const { getAuth } = require("@clerk/clerk-sdk-node");

module.exports = async function auth(req, res, next) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: No valid session" });
    }

    // Load MongoDB user profile
    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      // Auto-create profile if missing
      user = await User.create({
        clerkId: userId,
        role: "user", // default role
      });
    }

    req.user = user; // Attach combined user object
    next();
  } catch (err) {
    console.error("Auth Middleware Error:", err);
    return res.status(500).json({ message: "Authentication failure" });
  }
};
