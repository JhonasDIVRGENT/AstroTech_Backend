/**
 * Utilidades para manejo de fechas
 */

/**
 * Retorna la fecha actual en formato ISO
 */
function getCurrentISODate() {
    return new Date().toISOString();
}

module.exports = {
    getCurrentISODate
};
