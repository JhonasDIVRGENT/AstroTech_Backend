const { fail } = require('../utils/response');

/**
 * Middleware de manejo de errores centralizado
 * Debe ser el último middleware en la cadena
 */
function errorHandler(err, req, res, next) {
    // Log del error (en producción usar un logger apropiado)
    console.error('Error:', err);

    // Determinar código de error
    const error = {
        code: err.code || 'internal_error',
        message: err.message || 'Ha ocurrido un error interno del servidor'
    };

    // En desarrollo, incluir stack trace
    if (process.env.NODE_ENV === 'development') {
        error.stack = err.stack;
    }

    return fail(res, error, err.statusCode || 500);
}

module.exports = errorHandler;
