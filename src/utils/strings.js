/**
 * Utilidades para manejo de strings
 */

/**
 * Normaliza un string: lowercase, sin acentos, sin espacios extra
 */
function normalize(str) {
    if (!str || typeof str !== 'string') return '';

    return str
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Remueve acentos
}

/**
 * Capitaliza la primera letra de un string
 */
function capitalize(str) {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Remueve acentos de un string manteniendo el case
 */
function removeAccents(str) {
    if (!str || typeof str !== 'string') return '';

    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

module.exports = {
    normalize,
    capitalize,
    removeAccents
};
