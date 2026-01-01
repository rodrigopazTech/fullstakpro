# Guía de Configuración: Chatbot RAG + Buffer

## Arquitectura del Sistema

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Landing Page  │     │    WhatsApp     │     │    Chatwoot     │
│  (ChatWidget)   │     │   (Evolution)   │     │   (Opcional)    │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │    n8n Workflow        │
                    │  (Webhook Endpoint)    │
                    └────────────┬───────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│     Redis       │     │    OpenAI       │     │  Evolution API  │
│    (Buffer)     │     │   (GPT-4o)      │     │   (WhatsApp)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

---

## Paso 1: Configurar Redis en n8n

### 1.1. Agregar Redis a tu docker-compose

Si aún no tienes Redis, agrégalo a tu `docker-compose.yml`:

```yaml
redis:
  image: redis:7-alpine
  container_name: redis_n8n
  restart: always
  volumes:
    - redis_data:/data
  networks:
    - traefik-network
  command: redis-server --appendonly yes
```

### 1.2. Crear credencial de Redis en n8n

1. Ve a **Settings > Credentials > Add Credential**
2. Selecciona **Redis**
3. Configura:
   - **Host:** `redis` (nombre del contenedor)
   - **Port:** `6379`
   - **Password:** (dejar vacío si no tienes)
4. Guarda y prueba la conexión

---

## Paso 2: Configurar OpenAI en n8n

### 2.1. Obtener API Key de OpenAI

1. Ve a https://platform.openai.com/api-keys
2. Crea una nueva API Key
3. Copia la key (solo se muestra una vez)

### 2.2. Crear credencial en n8n

1. Ve a **Settings > Credentials > Add Credential**
2. Selecciona **OpenAI API**
3. Pega tu API Key
4. Guarda

---

## Paso 3: Configurar Evolution API (ya lo tienes)

Tu instancia ya está configurada:
- **URL:** `https://evolution.rodrigopaz.space`
- **Instance:** `RodrigoPazTech`
- **API Key:** `4960104cb9470197be95a7ee15728ced334ab29c8fe43d14`

---

## Paso 4: Importar el Workflow

### 4.1. Importar JSON

1. Ve a n8n: https://n8n.rodrigopaz.space
2. Click en **Add Workflow** → **Import from File**
3. Selecciona el archivo: `docs/n8n_chatbot_rag_buffer.json`

### 4.2. Actualizar Credenciales

Después de importar, necesitas actualizar los IDs de credenciales en estos nodos:

| Nodo | Tipo | Credencial Requerida |
|------|------|---------------------|
| Redis: Agregar al Buffer | Redis | Tu credencial de Redis |
| Redis: Obtener Buffer | Redis | Tu credencial de Redis |
| Redis: Limpiar Buffer | Redis | Tu credencial de Redis |
| Redis: Obtener Mensajes Finales | Redis | Tu credencial de Redis |
| Redis: Limpiar Después de Responder | Redis | Tu credencial de Redis |
| OpenAI GPT-4o-mini | OpenAI | Tu credencial de OpenAI |

### 4.3. Configurar el Webhook en Evolution API

1. Ve a Evolution API Manager
2. Selecciona instancia `RodrigoPazTech`
3. Ve a **Settings > Webhook**
4. Configura:
   - **URL:** `https://n8n.rodrigopaz.space/webhook/chatbot-fullstack`
   - **Events:** `messages.upsert`
   - **Enabled:** ✅

---

## Paso 5: Configurar el Chat Web

### 5.1. Variable de Entorno

Agrega a tu archivo `.env` del landing-page:

```env
VITE_N8N_CHATBOT_WEBHOOK=https://n8n.rodrigopaz.space/webhook/chatbot-web
```

### 5.2. Crear Workflow para Chat Web (Opcional)

Si quieres un webhook separado para el chat web (para no mezclar con WhatsApp), crea un nuevo workflow similar pero más simple:

```
Webhook → AI Agent → Respond to Webhook
```

---

## Paso 6: Probar el Sistema

### 6.1. Probar WhatsApp

1. Envía un mensaje al número conectado a Evolution API
2. Espera ~20 segundos (buffer)
3. Deberías recibir respuesta del bot

### 6.2. Probar Chat Web

1. Abre https://rodrigopaz.space
2. Click en el botón del chat (esquina inferior derecha)
3. Selecciona "Chat con IA"
4. Ingresa tu nombre
5. Envía un mensaje

---

## Configuración del Buffer

El buffer funciona así:

1. **Usuario envía mensaje** → Se guarda en Redis
2. **Espera 20 segundos** → Por si envía más mensajes
3. **Después de 20 segundos** → Combina todos los mensajes
4. **Envía al AI Agent** → Genera respuesta
5. **Responde por WhatsApp** → Limpia el buffer

### Ajustar tiempo de espera

En el nodo "Esperar 20 segundos", puedes cambiar el valor:
- **Menos tiempo (10s):** Respuestas más rápidas, pero puede cortar mensajes largos
- **Más tiempo (30s):** Más contexto, pero el usuario espera más

---

## Personalizar el Prompt del Bot

El prompt está en el nodo **"AI Agent - FullStackBot"**. Puedes modificar:

- Tono y personalidad
- Información del curso
- Precios y fechas
- Reglas de respuesta

### Secciones del Prompt

```
1. Identidad del bot
2. Información del usuario (nombre, mensaje)
3. Base de conocimiento del curso
4. Reglas de respuesta
5. Palabras clave para acciones especiales
```

---

## Agregar RAG con Vector Store (Avanzado)

Si quieres RAG real con documentos:

### Opción 1: In-Memory Vector Store

1. Agrega nodo **"Form Trigger"** para subir PDFs
2. Agrega nodo **"Vector Store In Memory"** en modo insert
3. Conecta **"Embeddings OpenAI"** al vector store
4. En el AI Agent, agrega el vector store como tool

### Opción 2: Supabase Vector Store

1. Habilita extensión `vector` en Supabase
2. Crea tabla para embeddings
3. Usa nodo **"Vector Store Supabase"**

---

## Troubleshooting

### El bot no responde en WhatsApp

1. Verifica que el workflow esté **ACTIVO** (toggle verde)
2. Verifica que el webhook de Evolution esté configurado
3. Revisa los logs de n8n: **Executions**

### Error de Redis

1. Verifica que Redis esté corriendo: `docker ps | grep redis`
2. Verifica la conexión desde n8n
3. Prueba con: `docker exec -it redis_n8n redis-cli ping`

### Respuestas muy lentas

1. Reduce el tiempo del buffer (15s en lugar de 20s)
2. Usa `gpt-4o-mini` en lugar de `gpt-4o` (más rápido)
3. Reduce el `maxTokens` en el modelo

### El chat web no funciona

1. Verifica la variable de entorno `VITE_N8N_CHATBOT_WEBHOOK`
2. Verifica que el webhook esté accesible (prueba con curl)
3. Revisa la consola del navegador para errores CORS

---

## Costos Estimados

| Servicio | Costo Aproximado |
|----------|------------------|
| OpenAI GPT-4o-mini | ~$0.001 por mensaje |
| Redis | Gratis (self-hosted) |
| Evolution API | Gratis (self-hosted) |
| n8n | Gratis (self-hosted) |

**Costo mensual estimado para 1000 mensajes:** ~$1 USD

---

## Próximos Pasos

1. [ ] Agregar memoria de conversación (historial)
2. [ ] Implementar RAG con documentos PDF
3. [ ] Agregar análisis de sentimiento
4. [ ] Integrar con CRM o Supabase para guardar leads
5. [ ] Agregar respuestas con imágenes/audio

---

## Archivos Relacionados

- `docs/n8n_chatbot_rag_buffer.json` - Workflow principal
- `docs/knowledge_base_curso.md` - Base de conocimiento
- `landing-page/src/components/ChatWidget.jsx` - Widget de chat web
