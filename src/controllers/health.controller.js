const { ok } = require('../utils/response');

/**
 * Controlador de health check
 */

/**
 * GET /health
 * Verifica que el servicio esté funcionando
 */
function getHealth(req, res) {
    return ok(res, {
        status: 'ok',
        service: 'AstroTech_Backend',
        version: '1.0.0'
    }, 200);
}

module.exports = {
    getHealth
};
