/**
 * Constantes del zodiaco
 * Define los 12 signos válidos y sus aliases/variantes
 */

const ZODIAC_SIGNS = [
  'aries',
  'tauro',
  'geminis',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'escorpio',
  'sagitario',
  'capricornio',
  'acuario',
  'piscis'
];

// Aliases y variantes (con acentos, etc.)
const ZODIAC_ALIASES = {
  'aries': 'aries',
  'tauro': 'tauro',
  'geminis': 'geminis',
  'géminis': 'geminis',
  'cancer': 'cancer',
  'cáncer': 'cancer',
  'leo': 'leo',
  'virgo': 'virgo',
  'libra': 'libra',
  'escorpio': 'escorpio',
  'sagitario': 'sagitario',
  'capricornio': 'capricornio',
  'acuario': 'acuario',
  'piscis': 'piscis'
};

// Nombres capitalizados para respuesta
const ZODIAC_DISPLAY_NAMES = {
  'aries': 'Aries',
  'tauro': 'Tauro',
  'geminis': 'Géminis',
  'cancer': 'Cáncer',
  'leo': 'Leo',
  'virgo': 'Virgo',
  'libra': 'Libra',
  'escorpio': 'Escorpio',
  'sagitario': 'Sagitario',
  'capricornio': 'Capricornio',
  'acuario': 'Acuario',
  'piscis': 'Piscis'
};

module.exports = {
  ZODIAC_SIGNS,
  ZODIAC_ALIASES,
  ZODIAC_DISPLAY_NAMES
};
