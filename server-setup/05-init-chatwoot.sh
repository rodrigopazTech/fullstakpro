#!/bin/bash
# ============================================
# SCRIPT 5: Inicializar base de datos de Chatwoot
# Ejecutar DESPUÉS de que los contenedores estén corriendo
# bash 05-init-chatwoot.sh
# ============================================

set -e

echo "🔧 Esperando a que Chatwoot esté listo..."
sleep 10

echo "📦 Preparando base de datos de Chatwoot..."
docker exec -it chatwoot-rails bundle exec rails db:chatwoot_prepare

echo ""
echo "✅ Base de datos de Chatwoot inicializada"
echo ""
echo "👉 Ahora crea tu cuenta de administrador:"
echo "   docker exec -it chatwoot-rails bundle exec rails c"
echo ""
echo "   Luego ejecuta en la consola de Rails:"
echo '   SuperAdmin.create!(email: "tu@email.com", password: "TuPassword123!", name: "Admin")'
echo "   exit"
echo ""
echo "🌐 Accede a Chatwoot en: http://72.62.166.54:3000"
