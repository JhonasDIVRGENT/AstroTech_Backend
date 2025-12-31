/**
 * AstroTech API Service
 * Módulo reutilizable para conectar con el backend AstroTech
 * 
 * Uso:
 *   import { astroTechAPI } from './astrotech-service.js';
 *   const prediction = await astroTechAPI.getPrediction('aries');
 */

const API_BASE_URL = 'http://localhost:3000';

/**
 * Servicio principal de AstroTech
 */
export const astroTechAPI = {
    /**
     * Verifica el estado del servidor
     * @returns {Promise<Object>} Estado del servidor
     */
    async checkHealth() {
        try {
            const response = await fetch(`${API_BASE_URL}/health`);

            if (!response.ok) {
                throw new Error('El servidor no está disponible');
            }

            return await response.json();
        } catch (error) {
            console.error('Error al verificar health:', error);
            throw error;
        }
    },

    /**
     * Obtiene una predicción tecnológica para un signo zodiacal
     * @param {string} sign - Signo zodiacal (ej: 'aries', 'géminis', 'LEO')
     * @returns {Promise<Object>} Predicción completa
     */
    async getPrediction(sign) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/oracle`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sign })
            });

            const data = await response.json();

            if (!response.ok) {
                // El backend devuelve errores en formato { error: { code, message, details } }
                throw new Error(data.error?.message || 'Error al obtener predicción');
            }

            return data;
        } catch (error) {
            console.error('Error al obtener predicción:', error);
            throw error;
        }
    },

    /**
     * Valida si un signo es válido (validación del lado del cliente)
     * @param {string} sign - Signo a validar
     * @returns {boolean} true si es válido
     */
    isValidSign(sign) {
        const validSigns = [
            'aries', 'tauro', 'geminis', 'géminis', 'cancer', 'cáncer',
            'leo', 'virgo', 'libra', 'escorpio', 'sagitario',
            'capricornio', 'acuario', 'piscis'
        ];

        return validSigns.includes(sign.toLowerCase().trim());
    }
};

/**
 * Signos zodiacales disponibles
 */
export const ZODIAC_SIGNS = [
    { value: 'aries', label: 'Aries' },
    { value: 'tauro', label: 'Tauro' },
    { value: 'geminis', label: 'Géminis' },
    { value: 'cancer', label: 'Cáncer' },
    { value: 'leo', label: 'Leo' },
    { value: 'virgo', label: 'Virgo' },
    { value: 'libra', label: 'Libra' },
    { value: 'escorpio', label: 'Escorpio' },
    { value: 'sagitario', label: 'Sagitario' },
    { value: 'capricornio', label: 'Capricornio' },
    { value: 'acuario', label: 'Acuario' },
    { value: 'piscis', label: 'Piscis' }
];

// Para uso sin módulos ES6 (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { astroTechAPI, ZODIAC_SIGNS };
}
