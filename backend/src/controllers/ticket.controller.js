// src/controllers/ticket.controller.js
const asyncHandler = require("express-async-handler");
const Ticket = require("../models/ticket.model");

/**
 * @desc    Create a new support ticket
 * @route   POST /api/tickets
 * @access  Private
 */
const createTicket = asyncHandler(async (req, res) => {
  const { title, description, userId, priority } = req.body;

  if (!title || !description || !userId) {
    res.status(400);
    throw new Error("Title, description, and userId are required");
  }

  const ticket = await Ticket.create({
    title,
    description,
    user: userId,
    priority: priority || "Normal",
    status: "Open",
  });

  res.status(201).json({
    message: "Ticket created successfully",
    ticket,
  });
});

/**
 * @desc    Get all tickets
 * @route   GET /api/tickets
 * @access  Private/Admin
 */
const getTickets = asyncHandler(async (_req, res) => {
  const tickets = await Ticket.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });
  res.status(200).json(tickets);
});

/**
 * @desc    Get ticket by ID
 * @route   GET /api/tickets/:id
 * @access  Private
 */
const getTicketById = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id).populate("user", "name email");

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  res.status(200).json(ticket);
});

/**
 * @desc    Update ticket status or priority
 * @route   PUT /api/tickets/:id
 * @access  Private/Admin
 */
const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  const { status, priority } = req.body;
  ticket.status = status || ticket.status;
  ticket.priority = priority || ticket.priority;

  const updatedTicket = await ticket.save();

  res.status(200).json({
    message: "Ticket updated successfully",
    ticket: updatedTicket,
  });
});

/**
 * @desc    Delete a ticket
 * @route   DELETE /api/tickets/:id
 * @access  Private/Admin
 */
const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  await ticket.remove();

  res.status(200).json({ message: "Ticket deleted successfully" });
});

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};
