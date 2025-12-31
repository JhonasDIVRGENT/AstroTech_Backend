require('dotenv').config();

/**
 * Configuración de variables de entorno
 */

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',

    // Placeholder para futuras integraciones
    groq: {
        apiKey: process.env.GROQ_API_KEY || null
    }
};

module.exports = config;
