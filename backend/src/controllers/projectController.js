// src/controllers/projectController.js
const Project = require('../models/Project');

async function createProject(req, res, next) {
  try {
    const payload = { ...req.body, owner: req.user._id };
    const project = await Project.create(payload);
    res.status(201).json(project);
  } catch (err) { next(err); }
}

async function getProject(req, res, next) {
  try {
    const { id } = req.params;
    const project = await Project.findById(id).populate('team');
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) { next(err); }
}

async function updateKanban(req, res, next) {
  try {
    const { id } = req.params;
    const { tasks } = req.body;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    project.tasks = tasks;
    await project.save();
    res.json(project);
  } catch (err) { next(err); }
}

module.exports = { createProject, getProject, updateKanban };
