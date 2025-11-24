const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const { authenticate, authorize } = require('../middleware/auth');

router.post('/', authenticate, loanController.applyLoan);
router.post('/:loanId/disburse', authenticate, authorize('admin'), loanController.disburseLoan);

module.exports = router;
