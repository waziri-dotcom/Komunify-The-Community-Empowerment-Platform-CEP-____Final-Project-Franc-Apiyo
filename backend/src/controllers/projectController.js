const Project = require('../models/Project');

exports.create = async (req, res, next) => {
  try {
    const payload = { ...req.body, owner: req.user._id };
    const project = await Project.create(payload);
    res.status(201).json({ project });
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const projects = await Project.find({}).limit(100);
    res.json({ projects });
  } catch (err) { next(err); }
};
