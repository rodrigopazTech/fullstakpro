#!/bin/bash
# ============================================
# SCRIPT 1: Instalar Docker y Docker Compose
# Ejecutar: sudo bash 01-install-docker.sh
# ============================================

set -e

echo "🚀 Actualizando sistema..."
apt update && apt upgrade -y

echo "📦 Instalando dependencias..."
apt install -y ca-certificates curl gnupg lsb-release git

echo "🐳 Instalando Docker..."
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

echo "✅ Verificando instalación..."
docker --version
docker compose version

echo "🔧 Habilitando Docker al inicio..."
systemctl enable docker
systemctl start docker

echo ""
echo "✅ Docker instalado correctamente!"
echo "👉 Ahora ejecuta: bash 02-setup-directories.sh"
