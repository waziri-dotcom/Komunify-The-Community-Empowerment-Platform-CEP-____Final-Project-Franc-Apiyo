// src/controllers/auth.controller.js

const asyncHandler = require("express-async-handler");
const { User } = require("../models/user.model");
const { clerkClient } = require("../services/clerkService");
const jwt = require("jsonwebtoken");

/**
 * @desc Sync Clerk user with database
 * @route POST /api/auth/sync
 * @access Public
 */
const syncClerkUser = asyncHandler(async (req, res) => {
  const { clerkId, email, name, phoneNumber } = req.body;

  if (!clerkId || !email) {
    res.status(400);
    throw new Error("Missing Clerk user information");
  }

  // Check user in Mongo
  let user = await User.findOne({ clerkId });

  if (!user) {
    user = await User.create({
      clerkId,
      email,
      name,
      phoneNumber,
      role: "normal",
    });
  }

  res.status(200).json({
    success: true,
    message: "Clerk sync successful",
    data: user,
  });
});

/**
 * @desc Register user
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role, phoneNumber } = req.body;

  if (!name || !email || !password || !role || !phoneNumber) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const clerkUser = await clerkClient.users.createUser({
    emailAddress: [email],
    password,
    firstName: name.split(" ")[0],
    lastName: name.split(" ")[1] || "",
    phoneNumber,
    externalId: phoneNumber,
  });

  const user = await User.create({
    clerkId: clerkUser.id,
    name,
    email,
    role,
    phoneNumber,
  });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: { user, token },
  });
});

/**
 * @desc Login user
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  const clerkAuth = await clerkClient.users.authenticateUser({
    identifier: email,
    password,
  });

  if (!clerkAuth) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: { user, token },
  });
});

/**
 * @desc Get current user
 */
const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-__v");
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json({ success: true, data: user });
});

/**
 * @desc Logout user
 */
const logoutUser = asyncHandler(async (req, res) => {
  await clerkClient.sessions.revokeSession(req.user.clerkId);
  res.status(200).json({ success: true, message: "User logged out successfully" });
});

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  syncClerkUser,
};
