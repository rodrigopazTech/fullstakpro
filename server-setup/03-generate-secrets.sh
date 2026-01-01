#!/bin/bash
# ============================================
# SCRIPT 3: Generar secretos seguros
# Ejecutar: bash 03-generate-secrets.sh
# ============================================

echo "🔐 Generando secretos seguros..."
echo ""

echo "POSTGRES_PASSWORD=$(openssl rand -base64 24 | tr -dc 'a-zA-Z0-9' | head -c 24)"
echo ""
echo "REDIS_PASSWORD=$(openssl rand -base64 24 | tr -dc 'a-zA-Z0-9' | head -c 24)"
echo ""
echo "N8N_ENCRYPTION_KEY=$(openssl rand -hex 32)"
echo ""
echo "EVOLUTION_API_KEY=$(openssl rand -hex 24)"
echo ""
echo "CHATWOOT_SECRET_KEY=$(openssl rand -hex 64)"
echo ""

echo "✅ Copia estos valores a tu archivo .env"
