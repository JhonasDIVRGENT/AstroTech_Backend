# 🤖 Modelos de Groq Disponibles

## Modelos Soportados

El backend AstroTech soporta 4 modelos de Groq con configuraciones optimizadas:

---

### 1. **Llama 3.3 70B Versatile** (Default)

**Nombre del modelo:** `llama-3.3-70b-versatile`

**Características:**
- ✅ Balanceado entre velocidad y calidad
- ✅ Respuestas consistentes
- ✅ Rápido (~3-4 segundos)
- ✅ Ideal para uso general

**Configuración:**
```env
GROQ_MODEL=llama-3.3-70b-versatile
```

**Parámetros:**
- Temperature: `0.4` (más consistente)
- Max tokens: `1000`
- Response format: JSON object

**Cuándo usarlo:**
- Producción general
- Respuestas predecibles
- Velocidad importante

---

### 2. **Llama 4 Scout 17B** (Más Reciente)

**Nombre del modelo:** `meta-llama/llama-4-scout-17b-16e-instruct`

**Características:**
- ✨ Modelo más reciente de Meta
- ✨ Más creativo y variado
- ✨ Respuestas únicas
- ⚡ Rápido (modelo más pequeño)

**Configuración:**
```env
GROQ_MODEL=meta-llama/llama-4-scout-17b-16e-instruct
```

**Parámetros:**
- Temperature: `1.0` (más creativo)
- Max tokens: `1024`
- Response format: JSON object

**Cuándo usarlo:**
- Quieres respuestas más creativas
- Predicciones más variadas
- Testing de nuevas capacidades

---

### 3. **Kimi K2 Instruct** (Mayor Capacidad)

**Nombre del modelo:** `moonshotai/kimi-k2-instruct-0905`

**Características:**
- 🚀 Mayor capacidad de tokens (4096)
- 🚀 Respuestas más detalladas
- 🚀 Mejor para contenido largo
- ⚖️ Balance creatividad/consistencia

**Configuración:**
```env
GROQ_MODEL=moonshotai/kimi-k2-instruct-0905
```

**Parámetros:**
- Temperature: `0.6` (balanceado)
- Max tokens: `4096` (4x más que default)
- Response format: JSON object

**Cuándo usarlo:**
- Necesitas respuestas más extensas
- Predicciones muy detalladas
- Contenido rico en información

---

### 4. **Qwen 3 32B** (Razonamiento Avanzado) ✨

**Nombre del modelo:** `qwen/qwen3-32b`

**Características:**
- 🧠 Capacidades de razonamiento avanzado
- 🧠 Análisis más profundo
- 🧠 Alta capacidad de tokens (4096)
- ⚖️ Balance entre velocidad y calidad

**Configuración:**
```env
GROQ_MODEL=qwen/qwen3-32b
```

**Parámetros:**
- Temperature: `0.6` (balanceado)
- Max tokens: `4096`
- Response format: JSON object

**Cuándo usarlo:**
- Necesitas análisis más profundo
- Predicciones con razonamiento
- Respuestas bien fundamentadas
- Contenido técnico detallado

---

## 🔄 Cómo Cambiar de Modelo

### Paso 1: Editar .env

```env
# Cambiar esta línea:
GROQ_MODEL=llama-3.3-70b-versatile

# Por uno de estos:
GROQ_MODEL=meta-llama/llama-4-scout-17b-16e-instruct
# o
GROQ_MODEL=moonshotai/kimi-k2-instruct-0905
# o
GROQ_MODEL=qwen/qwen3-32b
```

### Paso 2: Reiniciar Servidor

```bash
# Detener servidor (Ctrl+C)
# Iniciar de nuevo:
npm run dev
```

### Paso 3: Probar

```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/oracle `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"sign":"aries"}' | 
  Select-Object -ExpandProperty Content
```

---

## 📊 Comparación de Modelos

| Característica | Llama 3.3 70B | Llama 4 Scout | Kimi K2 | Qwen 3 32B |
|---------------|---------------|---------------|---------|------------|
| **Velocidad** | ⚡⚡⚡ Rápido | ⚡⚡⚡⚡ Muy rápido | ⚡⚡ Moderado | ⚡⚡⚡ Rápido |
| **Creatividad** | ⭐⭐ Baja | ⭐⭐⭐⭐ Alta | ⭐⭐⭐ Media-Alta | ⭐⭐⭐ Media-Alta |
| **Consistencia** | ⭐⭐⭐⭐ Alta | ⭐⭐ Baja | ⭐⭐⭐ Media | ⭐⭐⭐ Media |
| **Razonamiento** | ⭐⭐ Básico | ⭐⭐⭐ Bueno | ⭐⭐⭐ Bueno | ⭐⭐⭐⭐ Excelente |
| **Max Tokens** | 1000 | 1024 | 4096 | 4096 |
| **Temperature** | 0.4 | 1.0 | 0.6 | 0.6 |
| **Uso recomendado** | Producción | Testing/Creativo | Detallado | Análisis/Razonamiento |

---

## 🎯 Recomendaciones

### Para Producción:
```env
GROQ_MODEL=llama-3.3-70b-versatile
```
- Respuestas consistentes
- Velocidad óptima
- Predecible

### Para Experimentar:
```env
GROQ_MODEL=meta-llama/llama-4-scout-17b-16e-instruct
```
- Respuestas más variadas
- Más creativo
- Modelo más reciente

### Para Contenido Extenso:
```env
GROQ_MODEL=moonshotai/kimi-k2-instruct-0905
```
- Respuestas más largas
- Más detallado
- Mayor capacidad

### Para Análisis Profundo:
```env
GROQ_MODEL=qwen/qwen3-32b
```
- Razonamiento avanzado
- Análisis técnico
- Respuestas fundamentadas

---

## 🔧 Configuración Avanzada

Si quieres agregar un modelo personalizado, edita `src/services/groq.service.js`:

```javascript
const MODEL_CONFIGS = {
  // Agregar nuevo modelo aquí
  'tu-modelo-personalizado': {
    temperature: 0.7,
    max_tokens: 2000,
    response_format: { type: 'json_object' }
  }
};
```

---

## ✅ Verificar Modelo Activo

Los logs del servidor muestran qué modelo se está usando:

```
Groq API error: {
  message: '...',
  type: '...',
  model: 'llama-3.3-70b-versatile'  ← Modelo activo
}
```

---

**¡Experimenta con diferentes modelos y encuentra el que mejor se adapte a tus necesidades! 🚀**

**by JhonasDev** 🌟
