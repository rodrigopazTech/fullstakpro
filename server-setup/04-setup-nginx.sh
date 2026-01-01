#!/bin/bash
# ============================================
# SCRIPT 4: Configurar Nginx (Sin SSL - Usar IP directa)
# Ejecutar: bash 04-setup-nginx.sh
# ============================================

set -e

IP="72.62.166.54"

echo "📝 Creando configuración de Nginx..."

# Configuración principal de nginx
cat > /opt/services/nginx/nginx.conf << 'EOF'
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;
    sendfile on;
    keepalive_timeout 65;

    # Tamaño máximo de upload
    client_max_body_size 100M;

    include /etc/nginx/conf.d/*.conf;
}
EOF

# Configuración por servicio (usando puertos diferentes en el mismo IP)
cat > /opt/services/nginx/conf.d/services.conf << EOF
# N8N - Puerto 80 redirige a 5678
server {
    listen 80;
    server_name ${IP};

    # Ruta para N8N
    location /n8n/ {
        rewrite ^/n8n/(.*)\$ /\$1 break;
        proxy_pass http://n8n:5678;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_buffering off;
        proxy_cache off;
    }

    # Ruta para Evolution API
    location /evolution/ {
        rewrite ^/evolution/(.*)\$ /\$1 break;
        proxy_pass http://evolution:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    # Ruta para Chatwoot
    location /chat/ {
        rewrite ^/chat/(.*)\$ /\$1 break;
        proxy_pass http://chatwoot-rails:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    # Ruta para Portainer
    location /portainer/ {
        rewrite ^/portainer/(.*)\$ /\$1 break;
        proxy_pass http://portainer:9000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    # Página principal - Redirigir a Portainer
    location / {
        return 301 /portainer/;
    }
}
EOF

echo "✅ Configuración de Nginx creada"
echo ""
echo "📍 Tus servicios estarán disponibles en:"
echo "   - N8N:       http://${IP}:5678"
echo "   - Evolution: http://${IP}:8080"
echo "   - Chatwoot:  http://${IP}:3000"
echo "   - Portainer: http://${IP}:9000"
echo ""
echo "👉 Ahora ejecuta: cd /opt/services && docker compose up -d"
