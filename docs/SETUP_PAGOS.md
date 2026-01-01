# 🔧 Guía de Configuración: Pagos con Mercado Pago + Supabase + n8n

Esta guía te ayudará a configurar el sistema completo de pagos con preferencias dinámicas.

## ✅ Estado Actual (Configurado vía MCP)

| Componente | Estado | Detalles |
|------------|--------|----------|
| Tabla `enrollments` | ✅ Actualizada | Columnas `preference_id`, `payment_id`, `payment_status`, `updated_at` agregadas |
| RLS (Seguridad) | ✅ Habilitado | Políticas para anon INSERT, service_role full access |
| Edge Function | ✅ Desplegada | `create-preference` activa |
| Frontend URL | https://iuuyvsrwncdslmsryazz.supabase.co | |

## 📋 Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         FLUJO COMPLETO                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  1. Usuario llena formulario en Landing Page                            │
│           ↓                                                              │
│  2. Frontend guarda en Supabase (tabla enrollments)                     │
│     → enrollment_id = "uuid-abc-123"                                    │
│           ↓                                                              │
│  3. Frontend llama Edge Function: create-preference                     │
│     → Crea preferencia en MP con external_reference = enrollment_id     │
│           ↓                                                              │
│  4. Usuario paga con Wallet de Mercado Pago                             │
│           ↓                                                              │
│  5. MP envía webhook a n8n con payment_id                               │
│           ↓                                                              │
│  6. n8n consulta GET /v1/payments/{id}                                  │
│     → Obtiene external_reference (enrollment_id)                        │
│           ↓                                                              │
│  7. n8n actualiza Supabase: status = 'paid'                             │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 1️⃣ Configurar Variables de Entorno (PENDIENTE)

### En Supabase Dashboard:
1. Ve a **Project Settings** → **Edge Functions**
2. Agrega estas variables de entorno:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `MP_ACCESS_TOKEN` | Access Token de Mercado Pago (Producción) | `APP_USR-xxx...` |
| `MP_WEBHOOK_URL` | URL del webhook de n8n | `https://tu-n8n.com/webhook/mercadopago-webhook` |
| `FRONTEND_URL` | URL de tu landing page | `https://tu-landing.com` |

---

## 2️⃣ Desplegar Edge Function

### 2.1 Instalar Supabase CLI

```bash
# macOS
brew install supabase/tap/supabase

# o con npm
npm install -g supabase
```

### 2.2 Iniciar sesión y vincular proyecto

```bash
# Login
supabase login

# En el directorio del proyecto
cd landing-page

# Vincular con tu proyecto de Supabase
supabase link --project-ref iuuyvsrwncdslmsryazz
```

### 2.3 Desplegar la función

```bash
# Desplegar create-preference
supabase functions deploy create-preference --no-verify-jwt
```

> ⚠️ `--no-verify-jwt` permite que el frontend llame a la función sin autenticación de usuario. Si quieres más seguridad, puedes quitar esta flag y manejar la autenticación.

### 2.4 Verificar el despliegue

La función estará disponible en:
```
https://iuuyvsrwncdslmsryazz.supabase.co/functions/v1/create-preference
```

---

## 3️⃣ Configurar n8n

### 3.1 Importar el Workflow

1. Abre n8n
2. Ve a **Workflows** → **Import from file**
3. Importa el archivo: `docs/n8n_mercadopago_webhook.json`

### 3.2 Configurar Credenciales

#### Mercado Pago (HTTP Header Auth)
1. Ve a **Credentials** → **Add Credential** → **HTTP Header Auth**
2. Configura:
   - **Name**: `Mercado Pago Auth`
   - **Header Name**: `Authorization`
   - **Header Value**: `Bearer TU_ACCESS_TOKEN_DE_MP`

#### Supabase
1. Ve a **Credentials** → **Add Credential** → **Supabase API**
2. Configura:
   - **Host**: `https://iuuyvsrwncdslmsryazz.supabase.co`
   - **Service Role Key**: Tu `service_role` key (NO la anon key)

### 3.3 Activar el Workflow

1. Activa el workflow (toggle en la esquina superior derecha)
2. Copia la URL del webhook, será algo como:
   ```
   https://tu-n8n-instance.com/webhook/mercadopago-webhook
   ```

---

## 4️⃣ Configurar Webhook en Mercado Pago

### Opción A: Desde el Dashboard de MP

1. Ve a [Tus integraciones](https://www.mercadopago.com.ar/developers/panel/app)
2. Selecciona tu aplicación
3. Ve a **Webhooks** → **Configurar notificaciones**
4. En **URL de producción** pon la URL de tu webhook de n8n
5. Selecciona el evento: **Pagos**
6. Guarda la configuración

### Opción B: La Edge Function lo hace automáticamente

La Edge Function ya incluye `notification_url` al crear cada preferencia, así que cada pago individual notificará al webhook.

---

## 5️⃣ Variables de Entorno del Frontend

Actualiza tu archivo `.env`:

```env
# Mercado Pago
VITE_MP_PUBLIC_KEY=APP_USR-xxx...

# Supabase
VITE_SUPABASE_URL=https://iuuyvsrwncdslmsryazz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...

# WhatsApp
VITE_WHATSAPP_NUMBER=525643069168
```

> ⚠️ Ya no necesitas `VITE_MP_PREFERENCE_ID_MODULE1` ni `VITE_MP_PREFERENCE_ID_FULLCOURSE` porque las preferencias ahora son dinámicas.

---

## 6️⃣ Probar el Sistema

### 6.1 Probar localmente

```bash
cd landing-page
npm run dev
```

### 6.2 Flujo de prueba

1. Abre la landing page
2. Click en **[TEST] Pagar $20 MXN**
3. Llena el formulario con datos de prueba
4. Verifica en Supabase que se creó el registro con `status: pending_payment`
5. Completa el pago con tarjeta de prueba de MP:
   - Número: `5474 9254 3267 0366`
   - Vencimiento: `11/25`
   - CVV: `123`
   - Nombre: `APRO` (para aprobado)
6. Verifica en Supabase que el registro cambió a `status: paid`

---

## 🔍 Debugging

### Ver logs de Edge Function

```bash
supabase functions logs create-preference
```

### Ver logs en n8n

1. Ve al workflow
2. Click en **Executions** para ver el historial
3. Click en una ejecución para ver los datos de cada nodo

### Estados de pago de Mercado Pago

| Status | Significado |
|--------|-------------|
| `approved` | ✅ Pago aprobado |
| `pending` | ⏳ Pago pendiente |
| `in_process` | 🔄 En proceso |
| `rejected` | ❌ Rechazado |
| `cancelled` | 🚫 Cancelado |
| `refunded` | 💰 Reembolsado |

---

## 📊 Diagrama de Secuencia

```
Usuario          Frontend         Supabase        Edge Function       Mercado Pago        n8n
   │                 │                │                 │                   │               │
   │─── Llena form ─→│                │                 │                   │               │
   │                 │── INSERT ─────→│                 │                   │               │
   │                 │←─ enrollment_id│                 │                   │               │
   │                 │────────────────│── POST ────────→│                   │               │
   │                 │                │                 │── Create Pref ───→│               │
   │                 │                │                 │←── preference_id ─│               │
   │                 │←───────────────│── preference_id │                   │               │
   │←─ Muestra Wallet│                │                 │                   │               │
   │                 │                │                 │                   │               │
   │═══ PAGA ═══════════════════════════════════════════════════════════════│               │
   │                 │                │                 │                   │               │
   │                 │                │                 │                   │── Webhook ───→│
   │                 │                │                 │                   │               │
   │                 │                │                 │                   │←─ GET payment │
   │                 │                │                 │                   │               │
   │                 │                │←────────────────│───────────────────│─ UPDATE ─────│
   │                 │                │                 │                   │               │
```

---

## ✅ Checklist Final

- [ ] Tabla `enrollments` actualizada con nuevas columnas
- [ ] Edge Function desplegada en Supabase
- [ ] Variables de entorno configuradas en Supabase
- [ ] Workflow de n8n importado y activado
- [ ] Credenciales de n8n configuradas (MP + Supabase)
- [ ] Webhook URL configurada en MP o en Edge Function
- [ ] Probado con pago de prueba
