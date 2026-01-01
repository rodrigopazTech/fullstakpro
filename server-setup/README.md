# 🚀 Configuración del Servidor VPS

## Información del Servidor
- **IP:** 72.62.166.54
- **Usuario:** root
- **OS:** Ubuntu 24.04 LTS

## � Servicios incluidos

| Servicio | Puerto | Descripción |
|----------|--------|-------------|
| PostgreSQL (pgvector) | 5432 | BD con soporte vectorial para AI |
| Redis | 6379 | Cache y colas |
| N8N (main) | 5678 | UI y webhooks (modo queue) |
| N8N (worker) | - | Ejecutor de tareas |
| Evolution API | 8080 | WhatsApp API |
| Chatwoot | 3000 | Plataforma de mensajería |
| Chatwoot Worker | - | Procesamiento background |
| Portainer | 9000 | Gestión visual de Docker |

## 📋 Pasos de Instalación

### 1. Conectar al servidor
```bash
ssh -i ~/.ssh/hostinger_vps root@72.62.166.54
# o simplemente:
ssh hostinger-vps
```

### 2. Subir archivos al servidor (desde tu Mac)
```bash
cd /Users/rodrigopaz/Documents/Courses/FullStack/LandingPage/server-setup
scp -i ~/.ssh/hostinger_vps -r ./* root@72.62.166.54:/root/setup/
```

### 3. En el servidor, ejecutar scripts en orden:

```bash
# Ir al directorio de setup
cd /root/setup

# Hacer ejecutables los scripts
chmod +x *.sh

# 1. Instalar Docker
sudo bash 01-install-docker.sh

# 2. Crear directorios
bash 02-setup-directories.sh

# 3. Generar secretos (COPIA LOS VALORES)
bash 03-generate-secrets.sh

# 4. Crear archivo .env con tus valores
cp .env.example /opt/services/.env
nano /opt/services/.env  # Editar con los secretos generados

# 5. Copiar archivos de configuración
cp docker-compose.yml /opt/services/
mkdir -p /opt/services/postgres/init
cp postgres/init/01-init-databases.sql /opt/services/postgres/init/

# 6. Iniciar servicios
cd /opt/services
docker compose up -d

# 7. Ver logs (espera ~2-3 minutos)
docker compose logs -f

# 8. Inicializar Chatwoot (cuando los contenedores estén healthy)
docker exec -it chatwoot bundle exec rails db:chatwoot_prepare
```

### 4. Verificar que todo funciona
```bash
docker ps
```

## 🌐 URLs de Acceso

| Servicio | URL |
|----------|-----|
| N8N | http://72.62.166.54:5678 |
| Evolution API | http://72.62.166.54:8080 |
| Chatwoot | http://72.62.166.54:3000 |
| Portainer | http://72.62.166.54:9000 |

## 🔐 Crear usuario admin en Chatwoot

```bash
docker exec -it chatwoot bundle exec rails c
```

En la consola de Rails:
```ruby
SuperAdmin.create!(email: "contactorodrigopaz@gmail.com", password: "TuPasswordSeguro123!", name: "Rodrigo")
exit
```

## 📱 Conectar WhatsApp a Evolution API

1. Crear instancia:
```bash
curl -X POST http://72.62.166.54:8080/instance/create \
  -H "apikey: TU_EVOLUTION_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"instanceName": "cursos", "qrcode": true}'
```

2. Obtener QR:
```bash
curl http://72.62.166.54:8080/instance/qrcode/cursos \
  -H "apikey: TU_EVOLUTION_API_KEY"
```

3. Escanear QR con WhatsApp

## 🔗 Conectar Evolution con Chatwoot

1. En Chatwoot → Settings → Inboxes → Add Inbox → API
2. Obtener `account_id` e `inbox_id`
3. Crear access token en Profile Settings
4. Configurar en Evolution:

```bash
curl -X POST http://72.62.166.54:8080/chatwoot/set/cursos \
  -H "apikey: TU_EVOLUTION_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "enabled": true,
    "account_id": "1",
    "token": "TU_CHATWOOT_ACCESS_TOKEN",
    "url": "http://chatwoot:3000",
    "sign_msg": true,
    "reopen_conversation": true,
    "conversation_pending": false
  }'
```

## 🔧 Comandos Útiles

```bash
# Ver estado de contenedores
docker ps

# Ver logs de un servicio
docker logs -f evolution_api
docker logs -f n8n_main
docker logs -f chatwoot

# Reiniciar un servicio
docker restart evolution_api

# Reiniciar todo
cd /opt/services && docker compose restart

# Detener todo
cd /opt/services && docker compose down

# Ver uso de recursos
docker stats

# Entrar a un contenedor
docker exec -it chatwoot bash
```

## 🔗 Integrar con n8n Cloud

Si prefieres seguir usando tu n8n en la nube:
- **URL de tu n8n:** https://rodrigopaztech.app.n8n.cloud
- **Evolution API:** http://72.62.166.54:8080
- **API Key:** la que configuraste en `.env`

En n8n Cloud, crea credenciales HTTP Header Auth:
- Name: `apikey`
- Value: `TU_EVOLUTION_API_KEY`

## ⚠️ Notas Importantes

1. **Cambia TODOS los passwords** antes de iniciar
2. Los secretos de `03-generate-secrets.sh` son únicos - guárdalos
3. **pgvector** está habilitado para futuros usos de AI/embeddings
4. **N8N usa modo Queue** - más eficiente para producción
5. Para SSL, configura un dominio y usa Certbot/Nginx
