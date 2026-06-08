# Agent Context

Este repositorio quedo trabajando con dos lineas de despliegue para WhatsApp:
- `Evolution API`
- `OpenWA`

Estado operativo mas util hasta ahora:
- `OpenWA` fue la alternativa mas estable para pruebas locales
- la integracion funcional con `n8n` usa `OpenWA` mas `openwa_api_proxy`
- la URL interna para `n8n` es `http://openwa_api_proxy:2785`

Rutas importantes:
- `deploy-options/full-stack/docker-compose.yml`
  - stack base con `Evolution API`
- `deploy-options/full-stack/docker-compose.openwa.yml`
  - variante nueva con `OpenWA`
- `deploy-options/open-wa`
  - despliegue independiente de `OpenWA`
- `workflows/legacy`
  - workflows historicos del proyecto
- `workflows/openwa`
  - workflows nuevos o adaptados a `OpenWA`

Workflows relevantes:
- `workflows/openwa/openwa-simple-autoreply.json`
  - prueba minima de webhook y respuesta
- `workflows/openwa/openwa-mexat-agent.json`
  - agente simple sin RAG, orientado a MEXAT
- `workflows/openwa/openwa-rag-buffer-pgvector.json`
  - base recomendada para chatbot con buffer en Redis y RAG
- `workflows/openwa/openwa-rag-multimodal-pgvector.json`
  - version mas ambiciosa con audio e imagen

Hallazgos tecnicos importantes:
- `OpenWA` funciono mejor con `network_mode: host`
- `Evolution API` presento estados inconsistentes con QR y sesiones
- `Ollama` no pudo descargar modelos por bloqueo de red hacia `registry.ollama.ai`
- la salida HTTPS a servicios externos puede estar interceptada o bloqueada
- se detectaron variables de proxy toxicas en sesion:
  - `HTTP_PROXY=http://127.0.0.1:9`
  - `HTTPS_PROXY=http://127.0.0.1:9`
  - `ALL_PROXY=http://127.0.0.1:9`
  - `GIT_HTTP_PROXY=http://127.0.0.1:9`
  - `GIT_HTTPS_PROXY=http://127.0.0.1:9`

Impacto de red observado:
- `github.com:443` no pudo recibir push
- `api.openai.com` y `api.groq.com` fallaron por timeout desde contenedores
- `Docker Desktop` mostro actividad de `httpproxy`

Buenas practicas para continuar:
- no sobrescribir el compose original con `Evolution`
- usar variantes nuevas cuando se cambie de proveedor WhatsApp
- antes de culpar a credenciales, validar salida HTTPS real desde host y desde contenedor
- mantener los workflows exportados dentro de `workflows/`

Pendientes naturales para otro agente:
- subir cambios a GitHub cuando se restablezca salida a `github.com:443`
- terminar el flujo RAG con proveedor de embeddings estable
- revisar y limpiar el origen real de los proxies inyectados en la sesion o en Docker Desktop
