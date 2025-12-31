const { ZODIAC_ALIASES, ZODIAC_DISPLAY_NAMES } = require('../constants/zodiac');
const { normalize } = require('../utils/strings');

/**
 * Valida y normaliza el signo zodiacal de entrada
 */
function validateSign(sign) {
    if (!sign || typeof sign !== 'string') {
        return {
            valid: false,
            error: {
                code: 'invalid_input',
                message: 'El campo "sign" es obligatorio y debe ser un string',
                details: { field: 'sign' }
            }
        };
    }

    // Normalizar entrada (lowercase, sin acentos)
    const normalizedSign = normalize(sign);

    // Verificar si existe en aliases
    const validSign = ZODIAC_ALIASES[normalizedSign];

    if (!validSign) {
        return {
            valid: false,
            error: {
                code: 'invalid_input',
                message: 'Signo zodiacal no válido. Debe ser uno de los 12 signos del zodiaco',
                details: {
                    field: 'sign',
                    received: sign
                }
            }
        };
    }

    return {
        valid: true,
        normalizedSign: validSign,
        displayName: ZODIAC_DISPLAY_NAMES[validSign]
    };
}

module.exports = {
    validateSign
};
