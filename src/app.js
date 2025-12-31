const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const notFound = require('./middlewares/notFound.middleware');
const errorHandler = require('./middlewares/error.middleware');

/**
 * Configuración de Express
 */

const app = express();

// Middlewares básicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Rutas
app.use('/', routes);

// Middleware de ruta no encontrada
app.use(notFound);

// Middleware de manejo de errores (debe ser el último)
app.use(errorHandler);

module.exports = app;
