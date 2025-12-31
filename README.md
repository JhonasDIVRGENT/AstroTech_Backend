# 🌟 AstroTech Backend

**Backend Node.js + Express para predicciones tecnológicas 2026 basadas en signos zodiacales.**

Desarrollado por **JhonasDev** | Fase 1: Mock Implementation

---

## 📋 Requisitos

- **Node.js** v18+ (LTS recomendado)
- **npm** v9+

---

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd AstroTech_Backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

---

## ⚙️ Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (puedes copiar `.env.example`):

```env
PORT=3000
NODE_ENV=development
```

---

## 🏃 Cómo Ejecutar

### Modo Desarrollo (con nodemon)
```bash
npm run dev
```

### Modo Producción
```bash
npm start
```

El servidor se iniciará en `http://localhost:3000` (o el puerto configurado en `.env`).

---

## 📡 Endpoints

### 1. Health Check

**GET** `/health`

Verifica que el servicio esté funcionando correctamente.

**Response (200):**
```json
{
  "status": "ok",
  "service": "AstroTech_Backend",
  "version": "1.0.0"
}
```

---

### 2. Oráculo Tecnológico 2026

**POST** `/api/oracle`

Genera una predicción tecnológica personalizada basada en el signo zodiacal.

**Request Body:**
```json
{
  "sign": "aries"
}
```

**Signos válidos:** `aries`, `tauro`, `geminis`, `cancer`, `leo`, `virgo`, `libra`, `escorpio`, `sagitario`, `capricornio`, `acuario`, `piscis`

**Notas:**
- El campo `sign` es **obligatorio**
- Acepta mayúsculas/minúsculas
- Tolera acentos: `"géminis"` o `"geminis"` son válidos

**Response (200):**
```json
{
  "brand": "AstroTech",
  "by": "JhonasDev",
  "year": 2026,
  "sign": "Aries",
  "panorama": "El 2026 será un año de innovación disruptiva para Aries...",
  "skill": "Liderazgo técnico y arquitectura de sistemas distribuidos",
  "stack": ["Rust", "Kubernetes", "WebAssembly", "Edge Computing"],
  "avoid": "Microservicios innecesarios y sobre-arquitectura prematura",
  "useCase": "Plataformas de alta concurrencia y sistemas de tiempo real",
  "mindset": "Actúa rápido, itera más rápido. La perfección es enemiga del progreso.",
  "message": "Tu impulso natural te convertirá en pionero de las tecnologías del futuro...",
  "meta": {
    "mode": "mock",
    "generatedAt": "2025-12-31T20:36:29.123Z"
  }
}
```

**Error Response (400) - Signo inválido:**
```json
{
  "error": {
    "code": "invalid_input",
    "message": "Signo zodiacal no válido. Debe ser uno de los 12 signos del zodiaco",
    "details": {
      "field": "sign",
      "received": "invalid_sign"
    }
  }
}
```

**Error Response (400) - Campo faltante:**
```json
{
  "error": {
    "code": "invalid_input",
    "message": "El campo \"sign\" es obligatorio y debe ser un string",
    "details": {
      "field": "sign"
    }
  }
}
```

**Error Response (500) - Error interno:**
```json
{
  "error": {
    "code": "internal_error",
    "message": "Ha ocurrido un error interno del servidor"
  }
}
```

---

## 🧪 Ejemplos de Uso con Postman

### Health Check
```
GET http://localhost:3000/health
```

### Predicción para Aries
```
POST http://localhost:3000/api/oracle
Content-Type: application/json

{
  "sign": "aries"
}
```

### Predicción con acentos
```
POST http://localhost:3000/api/oracle
Content-Type: application/json

{
  "sign": "géminis"
}
```

---

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── app.js                      # Configuración de Express
│   ├── server.js                   # Entry point del servidor
│   ├── config/
│   │   └── env.js                  # Variables de entorno
│   ├── routes/
│   │   ├── index.js                # Agrupador de rutas
│   │   ├── health.routes.js        # Rutas de health check
│   │   └── oracle.routes.js        # Rutas del oráculo
│   ├── controllers/
│   │   ├── health.controller.js    # Controller de health
│   │   └── oracle.controller.js    # Controller del oráculo
│   ├── services/
│   │   └── oracle.service.js       # Lógica de negocio
│   ├── repositories/
│   │   └── oracle.repository.js    # Datos mock
│   ├── models/
│   │   └── oracle.model.js         # Estructura de datos
│   ├── validators/
│   │   └── oracle.validator.js     # Validación de entrada
│   ├── middlewares/
│   │   ├── error.middleware.js     # Manejo de errores
│   │   └── notFound.middleware.js  # Rutas no encontradas
│   ├── utils/
│   │   ├── response.js             # Helpers de respuesta
│   │   ├── date.js                 # Helpers de fecha
│   │   └── strings.js              # Helpers de strings
│   └── constants/
│       └── zodiac.js               # Constantes del zodiaco
├── .env.example                    # Template de variables
├── .gitignore                      # Archivos ignorados por git
├── package.json                    # Dependencias y scripts
└── README.md                       # Este archivo
```

---

## 🛠️ Stack Tecnológico

- **Runtime:** Node.js
- **Framework:** Express.js
- **Middlewares:** CORS, Morgan (HTTP logging)
- **Configuración:** dotenv
- **Dev Tools:** nodemon

---

## 📝 Notas Importantes

### Fase 1 - Mock Implementation
- **Actualmente:** Las predicciones son datos mock predefinidos para cada signo.
- **Próximas fases:** Se integrará Groq AI para generar predicciones dinámicas.
- **Diseño:** La arquitectura está preparada para reemplazar el repository mock por un servicio de IA sin cambiar el contrato de la API.

### Principios de Desarrollo
- **Código limpio:** Archivos cortos, responsabilidades claras
- **Arquitectura por capas:** Routes → Controllers → Services → Repositories
- **Controllers thin:** La lógica vive en services, no en controllers
- **Validación robusta:** Tolerancia a acentos y variantes de entrada
- **Manejo de errores centralizado:** Respuestas consistentes
- **Escalabilidad:** Fácil de extender sin romper contratos

---

## 🔮 Roadmap

- [x] **Fase 1:** Backend mock con estructura completa
- [ ] **Fase 2:** Integración con base de datos (opcional)
- [ ] **Fase 3:** Integración con Groq AI
- [ ] **Fase 4:** Rate limiting y autenticación
- [ ] **Fase 5:** Deploy en producción

---

## 👨‍💻 Autor

**JhonasDev**

---

## 📄 Licencia

Este proyecto es privado y está en desarrollo.

---

## 🆘 Soporte

Si encuentras algún problema o tienes preguntas:
1. Verifica que todas las dependencias estén instaladas: `npm install`
2. Asegúrate de que el archivo `.env` existe y tiene las variables correctas
3. Revisa los logs del servidor para más detalles sobre errores

---

**¡Que los astros tecnológicos te guíen en 2026! 🌟**
