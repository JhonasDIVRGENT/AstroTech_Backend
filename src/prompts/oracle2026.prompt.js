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
        content: `Eres un mentor tecnológico futurista especializado en tendencias tech 2026. 
Tu estilo es educativo, inspirador y con un toque cyberpunk suave (NO místico).
Devuelves SOLO JSON válido, sin texto adicional, sin markdown fences, sin explicaciones.
El JSON debe ser parseable directamente.`
    };

    const userMessage = {
        role: 'user',
        content: `Genera un oráculo tecnológico 2026 para el signo zodiacal ${displayName}.

IMPORTANTE: Responde ÚNICAMENTE con un objeto JSON válido (sin markdown, sin texto extra) con EXACTAMENTE estas claves:

{
  "panorama": "string - Descripción del panorama tecnológico 2026 para este signo (2-3 oraciones, futurista y educativo)",
  "skill": "string - Habilidad técnica principal recomendada (1 oración concisa)",
  "stack": ["string", "string", "string", "string"] - Array de 4 tecnologías/herramientas específicas recomendadas,
  "avoid": "string - Qué evitar en términos técnicos (1 oración, consejo práctico)",
  "useCase": "string - Caso de uso o tipo de proyecto ideal (1 oración)",
  "mindset": "string - Mentalidad o filosofía tech recomendada (1 oración inspiradora)",
  "message": "string - Mensaje final motivacional y práctico (2 oraciones)"
}

Requisitos:
- Idioma: español
- Tono: profesional, futurista, educativo (NO esotérico)
- Stack: tecnologías reales y relevantes para 2026
- Panorama: debe reflejar tendencias tech emergentes
- Mensaje: debe ser inspirador pero práctico
- NO incluyas explicaciones fuera del JSON
- NO uses markdown code fences
- Asegúrate de que el JSON sea válido y parseable`
    };

    return {
        messages: [systemMessage, userMessage]
    };
}

module.exports = {
    buildOraclePrompt
};
