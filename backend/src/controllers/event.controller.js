// src/controllers/event.controller.js
const asyncHandler = require("express-async-handler");
const Event = require("../models/event.model");

/**
 * @desc    Create a new event
 * @route   POST /api/events
 * @access  Private/Admin
 */
const createEvent = asyncHandler(async (req, res) => {
  const { title, description, date, location } = req.body;

  if (!title || !date || !location) {
    res.status(400);
    throw new Error("Title, date, and location are required");
  }

  const event = await Event.create({
    title,
    description: description || "",
    date,
    location,
    status: "Upcoming",
  });

  res.status(201).json({ message: "Event created successfully", event });
});

/**
 * @desc    Get all events
 * @route   GET /api/events
 * @access  Public
 */
const getEvents = asyncHandler(async (_req, res) => {
  const events = await Event.find().sort({ date: 1 }); // Sorted by upcoming date
  res.status(200).json(events);
});

/**
 * @desc    Get event by ID
 * @route   GET /api/events/:id
 * @access  Public
 */
const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }
  res.status(200).json(event);
});

/**
 * @desc    Update an event
 * @route   PUT /api/events/:id
 * @access  Private/Admin
 */
const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }

  const { title, description, date, location, status } = req.body;

  if (title) event.title = title;
  if (description) event.description = description;
  if (date) event.date = date;
  if (location) event.location = location;
  if (status) event.status = status;

  const updatedEvent = await event.save();
  res.status(200).json({ message: "Event updated successfully", event: updatedEvent });
});

/**
 * @desc    Delete an event
 * @route   DELETE /api/events/:id
 * @access  Private/Admin
 */
const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }

  await event.remove();
  res.status(200).json({ message: "Event deleted successfully" });
});

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
