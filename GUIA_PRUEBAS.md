# 🧪 Guía de Pruebas - AstroTech Backend

## 🚀 Inicio Rápido

### Paso 1: Iniciar el Servidor

```bash
cd AstroTech_Backend
npm run dev
```

Deberías ver:
```
╔════════════════════════════════════════════╗
║      🌟 AstroTech Backend by JhonasDev    ║
╚════════════════════════════════════════════╝

✓ Server running on port 3000
✓ Environment: development
✓ Health check: http://localhost:3000/health
✓ Oracle API: http://localhost:3000/api/oracle
```

---

## 🎯 Modo 1: MOCK (Sin IA)

### Configuración

Edita tu archivo `.env`:
```env
ORACLE_MODE=mock
```

### Prueba con PowerShell

```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/oracle `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"sign":"aries"}' | 
  Select-Object -ExpandProperty Content | 
  ConvertFrom-Json | 
  ConvertTo-Json -Depth 10
```

### Resultado Esperado

```json
{
  "brand": "AstroTech",
  "by": "JhonasDev",
  "year": 2026,
  "sign": "Aries",
  "panorama": "El 2026 será un año de innovación disruptiva...",
  "skill": "Liderazgo técnico y arquitectura de sistemas distribuidos",
  "stack": ["Rust", "Kubernetes", "WebAssembly", "Edge Computing"],
  "avoid": "Microservicios innecesarios...",
  "useCase": "Plataformas de alta concurrencia...",
  "mindset": "Actúa rápido, itera más rápido...",
  "message": "Tu impulso natural te convertirá en pionero...",
  "meta": {
    "mode": "mock",  ← ¡Verifica esto!
    "generatedAt": "2025-12-31T21:16:00.000Z"
  }
}
```

**✅ Características:**
- Respuesta instantánea (< 100ms)
- Siempre el mismo contenido para cada signo
- `meta.mode: "mock"`

---

## 🤖 Modo 2: LLM (Con Groq AI)

### Paso 1: Obtener API Key

1. Ve a [https://console.groq.com/keys](https://console.groq.com/keys)
2. Crea una cuenta gratuita (si no tienes)
3. Click en "Create API Key"
4. Copia la key (empieza con `gsk_...`)

### Paso 2: Configurar .env

Edita tu archivo `.env`:
```env
ORACLE_MODE=llm
GROQ_API_KEY=gsk_tu_api_key_aqui_pegala_completa
GROQ_MODEL=llama-3.3-70b-versatile
GROQ_TIMEOUT_MS=12000
```

### Paso 3: Reiniciar Servidor

**IMPORTANTE:** Debes reiniciar el servidor para que cargue las nuevas variables.

```bash
# Detener el servidor actual (Ctrl+C)
# Luego iniciar de nuevo:
npm run dev
```

### Paso 4: Probar con PowerShell

```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/oracle `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"sign":"leo"}' | 
  Select-Object -ExpandProperty Content | 
  ConvertFrom-Json | 
  ConvertTo-Json -Depth 10
```

### Resultado Esperado

```json
{
  "brand": "AstroTech",
  "by": "JhonasDev",
  "year": 2026,
  "sign": "Leo",
  "panorama": "En 2026, Leo brillará como líder en la revolución...",
  "skill": "Arquitectura de plataformas escalables y liderazgo técnico",
  "stack": ["Next.js", "Vercel", "Cloudflare Workers", "Tailwind CSS"],
  "avoid": "Soluciones genéricas que no destacan tu creatividad",
  "useCase": "Plataformas de contenido dinámico y experiencias visuales",
  "mindset": "Lidera con visión, ejecuta con excelencia",
  "message": "Tu carisma natural se traducirá en productos que cautivan...",
  "meta": {
    "mode": "llm",  ← ¡Verifica esto!
    "generatedAt": "2025-12-31T21:20:00.000Z"
  }
}
```

**✅ Características:**
- Respuesta en ~3-5 segundos
- Contenido único cada vez (generado por IA)
- `meta.mode: "llm"`
- Predicciones personalizadas y diferentes

---

## 🔄 Modo 3: Fallback (LLM sin API key)

### Configuración

Edita tu archivo `.env`:
```env
ORACLE_MODE=llm
GROQ_API_KEY=
```
*(Deja la API key vacía)*

### Prueba

```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/oracle `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"sign":"virgo"}' | 
  Select-Object -ExpandProperty Content | 
  ConvertFrom-Json | 
  ConvertTo-Json -Depth 10
```

### Resultado Esperado

```json
{
  "brand": "AstroTech",
  "by": "JhonasDev",
  "year": 2026,
  "sign": "Virgo",
  "panorama": "Virgo perfeccionará el arte del código limpio...",
  "meta": {
    "mode": "mock_fallback",  ← ¡Verifica esto!
    "generatedAt": "2025-12-31T21:25:00.000Z"
  }
}
```

**✅ Características:**
- Usa datos mock automáticamente
- No rompe el servicio
- `meta.mode: "mock_fallback"`
- Log de advertencia en consola del servidor

---

## 🧪 Probar con Postman

### Importar Colección

1. Abre Postman
2. Click en "Import"
3. Selecciona `AstroTech.postman_collection.json`

### Requests Disponibles

**Health Check:**
- GET `http://localhost:3000/health`

**Modo MOCK:**
- POST `http://localhost:3000/api/oracle`
- Body: `{"sign":"aries"}`

**Modo LLM:**
- Configura `.env` con `ORACLE_MODE=llm` y tu API key
- Reinicia servidor
- POST `http://localhost:3000/api/oracle`
- Body: `{"sign":"leo"}`

---

## 🎨 Probar Todos los Signos

### Script PowerShell para Probar Todos

```powershell
# Lista de signos
$signos = @("aries", "tauro", "geminis", "cancer", "leo", "virgo", 
            "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis")

# Probar cada signo
foreach ($signo in $signos) {
    Write-Host "`n🔮 Probando: $signo" -ForegroundColor Cyan
    
    $response = Invoke-WebRequest -Uri http://localhost:3000/api/oracle `
        -Method POST `
        -ContentType "application/json" `
        -Body "{`"sign`":`"$signo`"}"
    
    $data = $response.Content | ConvertFrom-Json
    Write-Host "✅ Modo: $($data.meta.mode)" -ForegroundColor Green
    Write-Host "📝 Panorama: $($data.panorama.Substring(0, 60))..." -ForegroundColor Yellow
}
```

---

## ❌ Probar Validación de Errores

### Error 1: Signo Inválido

```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/oracle `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"sign":"dragon"}'
```

**Resultado esperado:** `400 Bad Request`
```json
{
  "error": {
    "code": "invalid_input",
    "message": "Signo zodiacal no válido..."
  }
}
```

### Error 2: Campo Faltante

```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/oracle `
  -Method POST `
  -ContentType "application/json" `
  -Body '{}'
```

**Resultado esperado:** `400 Bad Request`
```json
{
  "error": {
    "code": "invalid_input",
    "message": "El campo \"sign\" es obligatorio..."
  }
}
```

---

## 📊 Comparación de Modos

| Característica | MOCK | LLM | Fallback |
|---------------|------|-----|----------|
| Velocidad | < 100ms | 3-5s | < 100ms |
| Contenido | Predefinido | Único (IA) | Predefinido |
| API Key | No requiere | Requiere | No requiere |
| Costo | Gratis | Gratis* | Gratis |
| `meta.mode` | `"mock"` | `"llm"` | `"mock_fallback"` |

*Groq tiene tier gratuito generoso

---

## 🔍 Verificar Logs del Servidor

### En Modo MOCK
```
POST /api/oracle 200 5.123 ms - 788
```

### En Modo LLM (exitoso)
```
POST /api/oracle 200 4144.525 ms - 1584
```
*(Nota el tiempo mayor ~4 segundos)*

### En Modo Fallback
```
ORACLE_MODE=llm pero falta GROQ_API_KEY, usando mock_fallback
POST /api/oracle 200 3.456 ms - 788
```

---

## ✅ Checklist de Pruebas

- [ ] Health check funciona
- [ ] Modo MOCK funciona (`meta.mode: "mock"`)
- [ ] Modo LLM funciona con API key (`meta.mode: "llm"`)
- [ ] Fallback funciona sin API key (`meta.mode: "mock_fallback"`)
- [ ] Validación de signo inválido (400)
- [ ] Validación de campo faltante (400)
- [ ] Todos los 12 signos funcionan
- [ ] Acentos funcionan (`"géminis"`, `"cáncer"`)
- [ ] Mayúsculas funcionan (`"ARIES"`, `"Leo"`)

---

## 🆘 Troubleshooting

### Problema: "mode: mock" cuando esperaba "llm"

**Solución:**
1. Verifica que `.env` tenga `ORACLE_MODE=llm`
2. Verifica que `GROQ_API_KEY` tenga un valor
3. **REINICIA el servidor** (importante!)

### Problema: Timeout o error de Groq

**Solución:**
- El sistema usa fallback automático
- Verifica tu API key en [console.groq.com](https://console.groq.com)
- Verifica límites de rate en tu cuenta Groq

### Problema: "Cannot find module 'groq-sdk'"

**Solución:**
```bash
npm install groq-sdk
```

---

**¡Listo para probar! 🚀**

**by JhonasDev** 🌟
