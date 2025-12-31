const express = require('express');
const healthRoutes = require('./health.routes');
const oracleRoutes = require('./oracle.routes');

const router = express.Router();

/**
 * Agrupa todas las rutas de la aplicación
 */

// Health check (sin prefijo /api)
router.use('/', healthRoutes);

// API routes
router.use('/api', oracleRoutes);

module.exports = router;
