const { getOracleDataBySign } = require('../repositories/oracle.repository');
const { createOracleResponse } = require('../models/oracle.model');
const { getCurrentISODate } = require('../utils/date');

/**
 * Servicio del oráculo
 * Orquesta la lógica de negocio para generar predicciones
 */

/**
 * Genera una predicción tecnológica para un signo zodiacal
 */
async function generatePrediction(normalizedSign, displayName) {
    // Obtener datos del repository
    const oracleData = getOracleDataBySign(normalizedSign);

    if (!oracleData) {
        throw new Error(`No se encontraron datos para el signo: ${normalizedSign}`);
    }

    // Construir respuesta completa
    const response = createOracleResponse({
        sign: displayName,
        panorama: oracleData.panorama,
        skill: oracleData.skill,
        stack: oracleData.stack,
        avoid: oracleData.avoid,
        useCase: oracleData.useCase,
        mindset: oracleData.mindset,
        message: oracleData.message,
        meta: {
            mode: 'mock',
            generatedAt: getCurrentISODate()
        }
    });

    return response;
}

module.exports = {
    generatePrediction
};
