// src/models/Project.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  assignees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, enum: ['todo','inprogress','done'], default: 'todo' },
  dueDate: Date
}, { timestamps: true });

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  tasks: [TaskSchema],
  milestones: [{ title: String, dueDate: Date, completed: Boolean }],
  resources: [{ type: String }] // urls to S3 / cloudinary
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
