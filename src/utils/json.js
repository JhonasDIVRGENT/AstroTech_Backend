/**
 * Utilidades para manejo de JSON
 */

/**
 * Extrae y parsea JSON de un texto que puede contener markdown fences o texto extra
 * @param {string} text - Texto que contiene JSON
 * @returns {Object|null} - Objeto parseado o null si falla
 */
function extractJson(text) {
    if (!text || typeof text !== 'string') {
        return null;
    }

    try {
        // Remover markdown code fences si existen
        let cleaned = text.trim();

        // Quitar ```json ... ``` o ``` ... ```
        cleaned = cleaned.replace(/^```(?:json)?\s*\n?/i, '');
        cleaned = cleaned.replace(/\n?```\s*$/i, '');

        // Encontrar el primer '{' y el último '}'
        const firstBrace = cleaned.indexOf('{');
        const lastBrace = cleaned.lastIndexOf('}');

        if (firstBrace === -1 || lastBrace === -1 || firstBrace >= lastBrace) {
            return null;
        }

        const jsonStr = cleaned.substring(firstBrace, lastBrace + 1);

        // Intentar parsear
        return JSON.parse(jsonStr);
    } catch (error) {
        console.error('Error al extraer JSON:', error.message);
        return null;
    }
}

module.exports = {
    extractJson
};
