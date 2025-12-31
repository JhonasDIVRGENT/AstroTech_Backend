const express = require('express');
const { getPrediction } = require('../controllers/oracle.controller');

const router = express.Router();

/**
 * POST /api/oracle
 * Genera predicción tecnológica basada en signo zodiacal
 */
router.post('/oracle', getPrediction);

module.exports = router;
