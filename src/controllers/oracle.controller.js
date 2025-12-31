const { validateSign } = require('../validators/oracle.validator');
const { generatePrediction } = require('../services/oracle.service');
const { ok, fail } = require('../utils/response');

/**
 * Controlador del oráculo
 * Maneja las peticiones HTTP y delega la lógica al service
 */

/**
 * POST /api/oracle
 * Genera una predicción tecnológica basada en el signo zodiacal
 */
async function getPrediction(req, res, next) {
    try {
        const { sign } = req.body;

        // Validar entrada
        const validation = validateSign(sign);

        if (!validation.valid) {
            return fail(res, validation.error, 400);
        }

        // Generar predicción
        const prediction = await generatePrediction(
            validation.normalizedSign,
            validation.displayName
        );

        // Responder
        return ok(res, prediction, 200);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getPrediction
};
