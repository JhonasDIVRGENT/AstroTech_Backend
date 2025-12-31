const Groq = require('groq-sdk');
const { buildOraclePrompt } = require('../prompts/oracle2026.prompt');

/**
 * Servicio de integración con Groq API
 * Soporta múltiples modelos con configuraciones específicas
 */

// Configuraciones por modelo
const MODEL_CONFIGS = {
    // Llama 3.3 70B (default) - Balanceado y rápido
    'llama-3.3-70b-versatile': {
        temperature: 0.4,
        max_tokens: 1000,
        response_format: { type: 'json_object' }
    },

    // Llama 4 Scout - Modelo más reciente
    'meta-llama/llama-4-scout-17b-16e-instruct': {
        temperature: 1,
        max_tokens: 1024,
        response_format: { type: 'json_object' }
    },

    // Kimi K2 - Modelo con mayor capacidad de tokens
    'moonshotai/kimi-k2-instruct-0905': {
        temperature: 0.6,
        max_tokens: 4096,
        response_format: { type: 'json_object' }
    },

    // Qwen 3 32B - Modelo con capacidades de razonamiento
    'qwen/qwen3-32b': {
        temperature: 0.6,
        max_tokens: 4096,
        response_format: { type: 'json_object' }
    }
};

// Inicializar cliente Groq
let groqClient = null;

function getGroqClient() {
    if (!groqClient && process.env.GROQ_API_KEY) {
        groqClient = new Groq({
            apiKey: process.env.GROQ_API_KEY
        });
    }
    return groqClient;
}

/**
 * Obtiene la configuración para un modelo específico
 */
function getModelConfig(modelName) {
    // Si el modelo tiene configuración específica, usarla
    if (MODEL_CONFIGS[modelName]) {
        return MODEL_CONFIGS[modelName];
    }

    // Configuración por defecto para modelos no listados
    return {
        temperature: 0.4,
        max_tokens: 1000,
        response_format: { type: 'json_object' }
    };
}

/**
 * Genera una predicción tecnológica usando Groq LLM
 * @param {Object} params - Parámetros
 * @param {string} params.sign - Signo zodiacal normalizado
 * @returns {Promise<string>} - Respuesta del modelo (texto JSON)
 */
async function generateOracleLLM({ sign }) {
    const client = getGroqClient();

    if (!client) {
        throw new Error('Groq client not initialized - missing API key');
    }

    const model = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
    const timeout = parseInt(process.env.GROQ_TIMEOUT_MS || '12000', 10);
    const modelConfig = getModelConfig(model);

    try {
        // Construir prompt
        const { messages } = buildOraclePrompt({ sign });

        // Crear promesa con timeout
        const completionPromise = client.chat.completions.create({
            model,
            messages,
            temperature: modelConfig.temperature,
            max_tokens: modelConfig.max_tokens,
            response_format: modelConfig.response_format
        });

        // Aplicar timeout
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Groq API timeout')), timeout);
        });

        const completion = await Promise.race([completionPromise, timeoutPromise]);

        // Extraer contenido
        const content = completion.choices?.[0]?.message?.content;

        if (!content) {
            throw new Error('Empty response from Groq API');
        }

        return content;

    } catch (error) {
        // Log error sin exponer API key
        console.error('Groq API error:', {
            message: error.message,
            type: error.constructor.name,
            model
        });
        throw error;
    }
}

module.exports = {
    generateOracleLLM
};

