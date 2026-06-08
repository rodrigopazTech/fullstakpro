# Full Stack con OpenWA

Este compose es una variante de `docker-compose.yml` orientada a `OpenWA`.

Archivo principal:
- `deploy-options/full-stack/docker-compose.openwa.yml`

Diferencias respecto al stack con Evolution:
- elimina `evolution_api`
- elimina `evolution_api_proxy`
- agrega `openwa_api`
- mantiene `openwa_api_proxy` para que `n8n` llegue a `OpenWA` desde la red Docker
- agrega `openwa_dashboard` y `openwa_traefik`

Decisiones importantes:
- `openwa_api` usa `network_mode: host`
  - esto replica el arreglo que ya funciono para evitar bloqueos de salida hacia WhatsApp
  - por esa razon `n8n` no consume `openwa_api` directo por nombre DNS
- `openwa_api_proxy` expone un puente interno en la red `services-network`
  - desde `n8n`, la URL interna correcta es `http://openwa_api_proxy:2785`
- el dashboard se expone por:
  - `http://127.0.0.1:2886`
- el dashboard de Traefik se expone por:
  - `http://127.0.0.1:8080`

Persistencia:
- `OpenWA` queda con SQLite local en el volumen `openwa_data`
- las sesiones de WhatsApp quedan bajo `/app/data/sessions`

Comando sugerido:
```powershell
docker compose -f deploy-options/full-stack/docker-compose.openwa.yml --env-file deploy-options/full-stack/.env up -d
```

Si prefieres separar variables:
```powershell
docker compose -f deploy-options/full-stack/docker-compose.openwa.yml --env-file deploy-options/full-stack/.env.openwa.example up -d
```

Notas:
- si Docker Desktop en Windows pierde exposicion al host, revisa primero puertos `2886`, `8080`, `2785`, `5678`
- si `OpenWA` vuelve a fallar solo en bridge, no retires `network_mode: host` sin reprobar conectividad real a `web.whatsapp.com`
