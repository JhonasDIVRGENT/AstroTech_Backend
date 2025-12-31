# 🚀 Quick Start - AstroTech Backend

## Inicio Rápido (3 pasos)

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor en modo desarrollo
npm run dev

# 3. Probar en el navegador o Postman
# Health: http://localhost:3000/health
```

## Probar el Oráculo

### Con curl (PowerShell):
```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/oracle -Method POST -ContentType "application/json" -Body '{"sign":"aries"}' | Select-Object -ExpandProperty Content
```

### Con Postman:
1. Importar `AstroTech.postman_collection.json`
2. Ejecutar cualquier request de la colección

## Endpoints Disponibles

- **GET** `/health` - Health check
- **POST** `/api/oracle` - Predicción tecnológica

## Signos Válidos

`aries`, `tauro`, `geminis`, `cancer`, `leo`, `virgo`, `libra`, `escorpio`, `sagitario`, `capricornio`, `acuario`, `piscis`

**Nota:** Acepta acentos y mayúsculas/minúsculas.

---

**¡Listo para usar! 🌟**
