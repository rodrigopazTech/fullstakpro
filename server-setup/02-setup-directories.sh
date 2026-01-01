#!/bin/bash
# ============================================
# SCRIPT 2: Crear estructura de directorios
# Ejecutar: bash 02-setup-directories.sh
# ============================================

set -e

echo "📁 Creando estructura de directorios..."

# Directorio principal
mkdir -p /opt/services
cd /opt/services

# Directorios para cada servicio
mkdir -p n8n/data
mkdir -p evolution/instances
mkdir -p chatwoot/storage
mkdir -p postgres/data
mkdir -p redis/data
mkdir -p portainer/data
mkdir -p nginx/conf.d
mkdir -p nginx/ssl

# Permisos
chmod -R 755 /opt/services

echo "✅ Directorios creados en /opt/services"
ls -la /opt/services

echo ""
echo "👉 Ahora copia docker-compose.yml y .env a /opt/services"
echo "👉 Luego ejecuta: cd /opt/services && docker compose up -d"
