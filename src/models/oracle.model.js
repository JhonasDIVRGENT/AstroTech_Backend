/**
 * Modelo de datos del oráculo
 * Define la estructura y normalización de respuestas
 */

/**
 * Crea un objeto de respuesta del oráculo con la estructura definida
 */
function createOracleResponse(data) {
    return {
        brand: 'AstroTech',
        by: 'JhonasDev',
        year: 2026,
        sign: data.sign,
        panorama: data.panorama,
        skill: data.skill,
        stack: data.stack,
        avoid: data.avoid,
        useCase: data.useCase,
        mindset: data.mindset,
        message: data.message,
        meta: data.meta
    };
}

module.exports = {
    createOracleResponse
};
