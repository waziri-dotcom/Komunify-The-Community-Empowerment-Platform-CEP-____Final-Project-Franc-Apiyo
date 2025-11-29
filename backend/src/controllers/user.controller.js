// src/controllers/user.controller.js
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

/**
 * @desc    Get a user by ID
 * @route   GET /api/users/:id
 * @access  Private
 */
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id).select("-password"); // Exclude password

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

/**
 * @desc    Update a user's profile
 * @route   PUT /api/users/:id
 * @access  Private
 */
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Only update fields that are provided
  if (name) user.name = name;
  if (email) user.email = email;
  if (phone) user.phone = phone;

  const updatedUser = await user.save();

  res.status(200).json({
    message: "User updated successfully",
    user: updatedUser,
  });
});

/**
 * @desc    Delete a user
 * @route   DELETE /api/users/:id
 * @access  Private/Admin
 */
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.remove();

  res.status(200).json({ message: "User deleted successfully" });
});

/**
 * @desc    Get all users (Admin only)
 * @route   GET /api/users
 * @access  Private/Admin
 */
const getAllUsers = asyncHandler(async (_req, res) => {
  const users = await User.find().select("-password"); // Exclude passwords
  res.status(200).json(users);
});

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
