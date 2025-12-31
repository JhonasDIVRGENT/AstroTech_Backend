const express = require('express');
const { getHealth } = require('../controllers/health.controller');

const router = express.Router();

/**
 * GET /health
 * Health check endpoint
 */
router.get('/health', getHealth);

module.exports = router;
