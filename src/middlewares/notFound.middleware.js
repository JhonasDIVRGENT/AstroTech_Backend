const { fail } = require('../utils/response');

/**
 * Middleware para rutas no encontradas
 */
function notFound(req, res) {
    return fail(res, {
        code: 'not_found',
        message: `Ruta no encontrada: ${req.method} ${req.path}`
    }, 404);
}

module.exports = notFound;
