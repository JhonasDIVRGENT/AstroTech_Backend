# 🌐 Guía de Integración Frontend - AstroTech Backend

## ✅ El Backend está Listo para Fetch

El backend **ya tiene CORS habilitado** y está completamente preparado para recibir peticiones desde cualquier frontend.

---

## 🚀 Inicio Rápido

### 1. Asegúrate de que el backend esté corriendo

```bash
cd AstroTech_Backend
npm run dev
```

El servidor estará disponible en: `http://localhost:3000`

---

## 📡 Endpoints Disponibles

### Health Check
- **URL:** `http://localhost:3000/health`
- **Método:** `GET`
- **Response:** `{ status: "ok", service: "AstroTech_Backend", version: "1.0.0" }`

### Oráculo Tecnológico
- **URL:** `http://localhost:3000/api/oracle`
- **Método:** `POST`
- **Content-Type:** `application/json`
- **Body:** `{ "sign": "aries" }`

---

## 💻 Ejemplos de Código

### 🟢 Vanilla JavaScript (Fetch API)

```javascript
// Health Check
async function checkHealth() {
  try {
    const response = await fetch('http://localhost:3000/health');
    const data = await response.json();
    console.log('Health:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Obtener predicción
async function getPrediction(sign) {
  try {
    const response = await fetch('http://localhost:3000/api/oracle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sign })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error.message);
    }

    const data = await response.json();
    console.log('Predicción:', data);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Uso
getPrediction('aries');
getPrediction('géminis'); // Funciona con acentos
getPrediction('LEO');     // Funciona con mayúsculas
```

---

### ⚛️ React (Hooks)

```jsx
import { useState } from 'react';

function AstroTechOracle() {
  const [sign, setSign] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPrediction = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/oracle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sign })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }

      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={fetchPrediction}>
        <input
          type="text"
          value={sign}
          onChange={(e) => setSign(e.target.value)}
          placeholder="Ingresa tu signo (ej: aries)"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Consultando...' : 'Consultar Oráculo'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {prediction && (
        <div>
          <h2>{prediction.sign} - 2026</h2>
          <p><strong>Panorama:</strong> {prediction.panorama}</p>
          <p><strong>Skill:</strong> {prediction.skill}</p>
          <p><strong>Stack:</strong> {prediction.stack.join(', ')}</p>
          <p><strong>Evitar:</strong> {prediction.avoid}</p>
          <p><strong>Use Case:</strong> {prediction.useCase}</p>
          <p><strong>Mindset:</strong> {prediction.mindset}</p>
          <p><strong>Mensaje:</strong> {prediction.message}</p>
        </div>
      )}
    </div>
  );
}

export default AstroTechOracle;
```

---

### 🟩 Vue 3 (Composition API)

```vue
<template>
  <div>
    <form @submit.prevent="fetchPrediction">
      <input
        v-model="sign"
        type="text"
        placeholder="Ingresa tu signo (ej: aries)"
      />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Consultando...' : 'Consultar Oráculo' }}
      </button>
    </form>

    <p v-if="error" style="color: red">Error: {{ error }}</p>

    <div v-if="prediction">
      <h2>{{ prediction.sign }} - 2026</h2>
      <p><strong>Panorama:</strong> {{ prediction.panorama }}</p>
      <p><strong>Skill:</strong> {{ prediction.skill }}</p>
      <p><strong>Stack:</strong> {{ prediction.stack.join(', ') }}</p>
      <p><strong>Evitar:</strong> {{ prediction.avoid }}</p>
      <p><strong>Use Case:</strong> {{ prediction.useCase }}</p>
      <p><strong>Mindset:</strong> {{ prediction.mindset }}</p>
      <p><strong>Mensaje:</strong> {{ prediction.message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sign = ref('');
const prediction = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchPrediction = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch('http://localhost:3000/api/oracle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sign: sign.value })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message);
    }

    const data = await response.json();
    prediction.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>
```

---

### 📘 TypeScript

```typescript
// types.ts
export interface OraclePrediction {
  brand: string;
  by: string;
  year: number;
  sign: string;
  panorama: string;
  skill: string;
  stack: string[];
  avoid: string;
  useCase: string;
  mindset: string;
  message: string;
  meta: {
    mode: string;
    generatedAt: string;
  };
}

export interface ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: {
      field?: string;
      received?: string;
    };
  };
}

// api.ts
const API_BASE_URL = 'http://localhost:3000';

export async function getPrediction(sign: string): Promise<OraclePrediction> {
  const response = await fetch(`${API_BASE_URL}/api/oracle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sign })
  });

  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw new Error(error.error.message);
  }

  return response.json();
}

export async function checkHealth() {
  const response = await fetch(`${API_BASE_URL}/health`);
  return response.json();
}

// Uso
import { getPrediction } from './api';

async function example() {
  try {
    const prediction = await getPrediction('aries');
    console.log(prediction.panorama);
    console.log(prediction.stack); // string[]
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## 🎨 Ejemplo HTML Completo (Sin Framework)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AstroTech Oracle</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    input, button {
      padding: 10px;
      font-size: 16px;
    }
    button {
      background: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:disabled {
      background: #ccc;
    }
    .error {
      color: red;
      margin-top: 10px;
    }
    .result {
      margin-top: 30px;
      padding: 20px;
      background: #f5f5f5;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>🌟 AstroTech Oracle 2026</h1>
  
  <div class="form-group">
    <input 
      type="text" 
      id="signInput" 
      placeholder="Ingresa tu signo (ej: aries, géminis, leo...)"
    />
    <button id="consultBtn">Consultar Oráculo</button>
  </div>

  <div id="error" class="error"></div>
  <div id="result" class="result" style="display: none;"></div>

  <script>
    const API_URL = 'http://localhost:3000/api/oracle';
    
    const signInput = document.getElementById('signInput');
    const consultBtn = document.getElementById('consultBtn');
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');

    consultBtn.addEventListener('click', async () => {
      const sign = signInput.value.trim();
      
      if (!sign) {
        errorDiv.textContent = 'Por favor ingresa un signo';
        return;
      }

      consultBtn.disabled = true;
      consultBtn.textContent = 'Consultando...';
      errorDiv.textContent = '';
      resultDiv.style.display = 'none';

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sign })
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error.message);
        }

        const data = await response.json();
        
        resultDiv.innerHTML = `
          <h2>${data.sign} - ${data.year}</h2>
          <p><strong>🔮 Panorama:</strong> ${data.panorama}</p>
          <p><strong>💡 Skill Principal:</strong> ${data.skill}</p>
          <p><strong>🛠️ Stack Recomendado:</strong> ${data.stack.join(', ')}</p>
          <p><strong>⚠️ Evitar:</strong> ${data.avoid}</p>
          <p><strong>🎯 Use Case:</strong> ${data.useCase}</p>
          <p><strong>🧠 Mindset:</strong> ${data.mindset}</p>
          <p><strong>✨ Mensaje:</strong> ${data.message}</p>
          <hr>
          <small>Generado: ${new Date(data.meta.generatedAt).toLocaleString()}</small>
        `;
        resultDiv.style.display = 'block';

      } catch (error) {
        errorDiv.textContent = `Error: ${error.message}`;
      } finally {
        consultBtn.disabled = false;
        consultBtn.textContent = 'Consultar Oráculo';
      }
    });

    // Enter key support
    signInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        consultBtn.click();
      }
    });
  </script>
</body>
</html>
```

---

## 🔧 Configuración CORS

El backend **ya tiene CORS habilitado** por defecto para todas las peticiones. No necesitas configurar nada adicional.

Si en el futuro quieres restringir CORS a dominios específicos, edita `src/app.js`:

```javascript
// Configuración actual (permite todo)
app.use(cors());

// Para restringir a dominios específicos:
app.use(cors({
  origin: ['http://localhost:5173', 'https://tu-dominio.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));
```

---

## 🌍 Variables de Entorno para Frontend

Si tu frontend está en un dominio diferente o puerto diferente, puedes crear una variable de entorno:

### React (.env)
```env
VITE_API_URL=http://localhost:3000
```

### Next.js (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Uso:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
// o
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
```

---

## 📋 Signos Válidos

```javascript
const VALID_SIGNS = [
  'aries', 'tauro', 'geminis', 'cancer', 'leo', 'virgo',
  'libra', 'escorpio', 'sagitario', 'capricornio', 'acuario', 'piscis'
];
```

**Nota:** El backend acepta:
- ✅ Mayúsculas/minúsculas: `"ARIES"`, `"Aries"`, `"aries"`
- ✅ Con acentos: `"géminis"`, `"cáncer"`
- ✅ Sin acentos: `"geminis"`, `"cancer"`

---

## 🛡️ Manejo de Errores

El backend devuelve errores consistentes:

```javascript
// Error 400 - Signo inválido
{
  "error": {
    "code": "invalid_input",
    "message": "Signo zodiacal no válido...",
    "details": {
      "field": "sign",
      "received": "invalid_sign"
    }
  }
}

// Error 404 - Ruta no encontrada
{
  "error": {
    "code": "not_found",
    "message": "Ruta no encontrada: GET /api/wrong"
  }
}

// Error 500 - Error interno
{
  "error": {
    "code": "internal_error",
    "message": "Ha ocurrido un error interno del servidor"
  }
}
```

---

## 🧪 Testing desde el Frontend

### 1. Verifica que el backend esté corriendo
```javascript
fetch('http://localhost:3000/health')
  .then(res => res.json())
  .then(data => console.log('Backend status:', data));
```

### 2. Prueba una predicción simple
```javascript
fetch('http://localhost:3000/api/oracle', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ sign: 'aries' })
})
  .then(res => res.json())
  .then(data => console.log('Predicción:', data));
```

---

## 🚀 Deploy en Producción

Cuando despliegues el backend en producción, actualiza la URL en tu frontend:

```javascript
// Desarrollo
const API_URL = 'http://localhost:3000';

// Producción
const API_URL = 'https://api.astrotech.com';

// Mejor práctica: usar variables de entorno
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
```

---

## ✅ Checklist de Integración

- [ ] Backend corriendo en `http://localhost:3000`
- [ ] Health check funciona: `GET /health`
- [ ] Fetch desde frontend funciona
- [ ] Manejo de errores implementado
- [ ] Loading states implementados
- [ ] Validación de entrada en frontend (opcional)
- [ ] Variables de entorno configuradas

---

## 🆘 Troubleshooting

### Error: CORS blocked
- ✅ **Solución:** El backend ya tiene CORS habilitado. Asegúrate de que esté corriendo.

### Error: Failed to fetch
- ✅ **Solución:** Verifica que el backend esté corriendo en `http://localhost:3000`

### Error: 400 invalid_input
- ✅ **Solución:** Verifica que estés enviando un signo válido en el campo `"sign"`

---

**¡Tu frontend está listo para conectarse! 🎉**

**by JhonasDev** 🌟
