# Guía de Despliegue - Evolution & Open-WA

Este directorio contiene las configuraciones optimizadas para probar diferentes stacks de WhatsApp API.

## Opciones Disponibles

### 1. `full-stack/` (Evolution API v2)
Configuración completa con todo el ecosistema.
- **Servicios**: Evolution API v2, PostgreSQL (pgvector), Redis, n8n, Chatwoot.
- **API Key**: `test_evo_key_321`
- **Dashboard Chatwoot**: `admin@test.com` / `Password123!`

### 2. `lite-stack/` (Evolution API v1.x)
Versión minimalista para diagnóstico de red.
- **Servicios**: Evolution API v1.x, PostgreSQL, Redis.
- **API Key**: `lite_key_123`

### 3. `open-wa/` (Open-WA Gateway) - **RECOMENDADO**
La alternativa más estable para entornos con restricciones de red.
- **Servicios**: Open-WA API, Dashboard Visual, Traefik.
- **Dashboard**: [http://localhost:2886](http://localhost:2886)
- **API Key Verificada**: `owa_k1_100e2bf50c0d6b65519570857aea2bd79fe313dbe80150572f13297d54ef2121`
- **Uso**: 
  1. `cd deploy-options/open-wa`
  2. `docker compose --profile full up -d`

---

## Solución de problemas (QR no aparece)
Si el código QR no se visualiza en Evolution API (Full/Lite), utiliza la carpeta **`open-wa/`**. Al usar un navegador Chromium real, tiene mayor tasa de éxito en redes corporativas.
