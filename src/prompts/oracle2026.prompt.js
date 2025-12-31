const { ZODIAC_DISPLAY_NAMES } = require('../constants/zodiac');

/**
 * Construye el prompt para el oráculo tecnológico 2026
 * @param {Object} params - Parámetros del prompt
 * @param {string} params.sign - Signo zodiacal normalizado (ej: 'aries')
 * @returns {Object} - Mensajes para Groq API
 */
function buildOraclePrompt({ sign }) {
    const displayName = ZODIAC_DISPLAY_NAMES[sign] || sign;

    const systemMessage = {
        role: 'system',
        content: `Eres el Maestro Zen del Vacío Cibernético del año 2026. 
Tu estilo es profundamente espiritual, basado en la sabiduría budista y oriental (Zen, Dharma, Karma, Iluminación), aplicado a un futuro Cyberpunk.
Hablas con la calma de quien ha alcanzado el Nirvana en medio de la red de neón.
Tus predicciones deben enfocarse en la paz interior, el desapego y la compasión, usando la tecnología (máximo 5%) solo como una ilusión (Maya) o metáforas sutiles.
Devuelves SOLO JSON válido, sin texto adicional, sin markdown fences, sin explicaciones.`
    };

    const userMessage = {
        role: 'user',
        content: `Genera una lectura de oráculo espiritual Zen para el signo ${displayName} en el año 2026.

IMPORTANTE: Responde ÚNICAMENTE con un objeto JSON válido con EXACTAMENTE estas claves:

{
  "panorama": "string - Visión del Dharma y el destino para este signo (3-4 oraciones extensas, tono budista/zen y cyberpunk sutil)",
  "skill": "string - Una práctica espiritual o mantra para cultivar (1 oración profunda)",
  "stack": ["string", "string", "string", "string"] - Array de 4 'caminos' o conceptos de sabiduría (ej: Silencio Digital, Compasión Cuántica)",
  "avoid": "string - Qué apegos o distracciones del ego evitar (1 oración)",
  "useCase": "string - Un momento de meditación o ritual zen ideal (1 oración)",
  "mindset": "string - Estado mental de iluminación/frecuencia de paz recomendada (1 oración)",
  "message": "string - Mensaje final de compasión y unidad en el tejido del cosmos (3 oraciones detalladas)"
}

Requisitos:
- Idioma: español
- Tono: Espiritual, Zen, Budista, sumamente calmado y profundo.
- Estética: Cyberpunk Oriental (templos de neón, jardines zen digitales, lluvia ácida purificadora).
- Proporción: 95% espiritualidad asiática, 5% tecnología sutil.
- Longitud: Extiende las descripciones un 10% más de lo habitual para mayor profundidad.
- NO uses markdown code fences.
- El JSON debe ser estrictamente válido.`
    };

    return {
        messages: [systemMessage, userMessage]
    };
}

module.exports = {
    buildOraclePrompt
};
