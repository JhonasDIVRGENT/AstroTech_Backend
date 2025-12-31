const { getOracleDataBySign } = require('../repositories/oracle.repository');
const { createOracleResponse } = require('../models/oracle.model');
const { getCurrentISODate } = require('../utils/date');
const { extractJson } = require('../utils/json');

/**
 * Servicio del oráculo
 * Orquesta la lógica de negocio para generar predicciones
 * Soporta modo MOCK y modo LLM con fallback inteligente
 */

/**
 * Genera predicción usando datos mock del repository
 */
function generateMockPrediction(normalizedSign, displayName, mode = 'mock') {
    const oracleData = getOracleDataBySign(normalizedSign);

    if (!oracleData) {
        throw new Error(`No se encontraron datos para el signo: ${normalizedSign}`);
    }

    return createOracleResponse({
        sign: displayName,
        panorama: oracleData.panorama,
        skill: oracleData.skill,
        stack: oracleData.stack,
        avoid: oracleData.avoid,
        useCase: oracleData.useCase,
        mindset: oracleData.mindset,
        message: oracleData.message,
        meta: {
            mode,
            generatedAt: getCurrentISODate()
        }
    });
}

/**
 * Valida que el objeto LLM tenga todas las claves requeridas
 */
function validateLLMResponse(data) {
    const requiredKeys = ['panorama', 'skill', 'stack', 'avoid', 'useCase', 'mindset', 'message'];

    for (const key of requiredKeys) {
        if (!data[key]) {
            return false;
        }
    }

    // Validar que stack sea un array
    if (!Array.isArray(data.stack)) {
        return false;
    }

    return true;
}

/**
 * Genera una predicción tecnológica para un signo zodiacal
 * Usa LLM si está configurado, con fallback a mock
 */
async function generatePrediction(normalizedSign, displayName) {
    const oracleMode = process.env.ORACLE_MODE || 'mock';

    // Modo MOCK: retornar datos predefinidos
    if (oracleMode !== 'llm') {
        return generateMockPrediction(normalizedSign, displayName, 'mock');
    }

    // Modo LLM: intentar usar Groq
    const groqApiKey = process.env.GROQ_API_KEY;

    // Si no hay API key, fallback a mock
    if (!groqApiKey) {
        console.warn('ORACLE_MODE=llm pero falta GROQ_API_KEY, usando mock_fallback');
        return generateMockPrediction(normalizedSign, displayName, 'mock_fallback');
    }

    try {
        // Importar dinámicamente para evitar errores si no está configurado
        const { generateOracleLLM } = require('./groq.service');

        // Llamar a Groq API
        const llmResponse = await generateOracleLLM({ sign: normalizedSign });

        // Parsear JSON
        const parsedData = extractJson(llmResponse);

        if (!parsedData) {
            console.error('No se pudo parsear JSON de Groq, usando mock_fallback');
            return generateMockPrediction(normalizedSign, displayName, 'mock_fallback');
        }

        // Validar que tenga todas las claves requeridas
        if (!validateLLMResponse(parsedData)) {
            console.error('Respuesta de Groq incompleta, usando mock_fallback');
            return generateMockPrediction(normalizedSign, displayName, 'mock_fallback');
        }

        // Construir respuesta exitosa con datos de LLM
        return createOracleResponse({
            sign: displayName,
            panorama: parsedData.panorama,
            skill: parsedData.skill,
            stack: parsedData.stack,
            avoid: parsedData.avoid,
            useCase: parsedData.useCase,
            mindset: parsedData.mindset,
            message: parsedData.message,
            meta: {
                mode: 'llm',
                generatedAt: getCurrentISODate()
            }
        });

    } catch (error) {
        // Log error sin exponer información sensible
        console.error('Error al generar predicción con LLM:', {
            message: error.message,
            sign: normalizedSign
        });

        // Fallback a mock en caso de error
        return generateMockPrediction(normalizedSign, displayName, 'mock_fallback');
    }
}

module.exports = {
    generatePrediction
};
