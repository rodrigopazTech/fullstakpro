# Skills de Continuidad

## Operacion Docker
- Validar primero `docker ps`
- Si `OpenWA` esta en `host network`, no asumir que Windows vera el puerto sin un proxy o publicacion adicional
- Para `n8n`, preferir servicios puente como `openwa_api_proxy`

## Workflows n8n
- Mantener una copia fuente en `workflows/`
- Mantener la copia importada en `n8n` solo como despliegue, no como unica fuente de verdad
- Si un workflow usa mensajes WhatsApp, probar primero con `openwa-simple-autoreply.json`

## RAG
- Base recomendada: `openwa-rag-buffer-pgvector.json`
- Si embeddings fallan por nodo nativo de `n8n`, reemplazar por `HTTP Request` a proveedor externo y `INSERT` manual a Postgres
- Si no hay salida a internet, considerar fallback con busqueda full-text en Postgres

## Red
- Probar desde host y desde contenedor
- Diferenciar:
  - `401/403`: credencial
  - `timeout/connection refused`: red, proxy o firewall
- Revisar variables `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `GIT_HTTP_PROXY`, `GIT_HTTPS_PROXY`

## Git
- Hay un commit local pendiente de subir:
  - `0f9777c Add OpenWA and full-stack workflow fixes`
- No incluir `.env` con secretos en commits
