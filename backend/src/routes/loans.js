// src/routes/loans.js
const express = require('express');
const router = express.Router();
const { applyLoan, getLoan, approveLoan } = require('../controllers/loanController');
const { requireAuth, requireRole } = require('../middleware/auth');

router.post('/apply', requireAuth, applyLoan);
router.get('/:id', requireAuth, getLoan);

// admin approve
router.post('/:id/approve', requireAuth, requireRole('admin'), approveLoan);

module.exports = router;
