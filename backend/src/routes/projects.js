// src/routes/projects.js
const express = require('express');
const router = express.Router();
const { createProject, getProject, updateKanban } = require('../controllers/projectController');
const { requireAuth } = require('../middleware/auth');

router.post('/', requireAuth, createProject);
router.get('/:id', requireAuth, getProject);
router.put('/:id/board', requireAuth, updateKanban);

module.exports = router;
