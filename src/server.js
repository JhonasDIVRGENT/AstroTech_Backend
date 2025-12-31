const app = require('./app');
const config = require('./config/env');

/**
 * Inicia el servidor HTTP
 */

const PORT = config.port;

app.listen(PORT, () => {
    console.log('╔════════════════════════════════════════════╗');
    console.log('║      🌟 AstroTech Backend by JhonasDev    ║');
    console.log('╚════════════════════════════════════════════╝');
    console.log('');
    console.log(`✓ Server running on port ${PORT}`);
    console.log(`✓ Environment: ${config.nodeEnv}`);
    console.log(`✓ Health check: http://localhost:${PORT}/health`);
    console.log(`✓ Oracle API: http://localhost:${PORT}/api/oracle`);
    console.log('');
    console.log('Press Ctrl+C to stop');
    console.log('');
});
