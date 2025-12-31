/**
 * Helpers para respuestas HTTP consistentes
 */

/**
 * Respuesta exitosa
 */
function ok(res, data, status = 200) {
    return res.status(status).json(data);
}

/**
 * Respuesta de error
 * @param {Object} error - { code, message, details }
 */
function fail(res, error, status = 400) {
    const response = {
        error: {
            code: error.code || 'unknown_error',
            message: error.message || 'An error occurred'
        }
    };

    if (error.details) {
        response.error.details = error.details;
    }

    return res.status(status).json(response);
}

module.exports = {
    ok,
    fail
};
