# Guía de Deployment y Producción 🚀

## ⚠️ SOLUCIÓN DE ERRORES (IMPORTANTE)

#### Error: `vite: command not found` o `react-scripts: command not found`
Este error ocurre porque tu código está dentro de una carpeta llamada `landing-page`, pero Vercel intenta construir desde la raíz.

**Solución:**
1.  Ve a tu proyecto en Vercel > **Settings** > **General**.
2.  Busca la sección **Root Directory**.
3.  Dale clic a **Edit**.
4.  Selecciona o escribe: `landing-page`.
5.  Guarda los cambios.

---

## 1. Configuración de Build (Framework Preset)
Asegúrate de que Vercel sepa que usas **Vite**.

1.  Ve a **Settings** > **Build & Development**.
2.  En **Framework Preset**, selecciona **Vite**.
3.  **Build Command**: `vite build` (o dejarlo por defecto de Vite).
4.  **Output Directory**: `dist` (o dejarlo por defecto de Vite).

## 2. Variables de Entorno (Environment Variables)
Para que el sitio funcione en producción y puedas cambiar las credenciales fácilmente, debes configurarlas en Vercel.

1.  En Vercel: **Settings** > **Environment Variables**.
2.  Agrega las siguientes variables (Key - Value):

| Key | Value (Ejemplo) |
| --- | --- |
| `VITE_MP_PUBLIC_KEY` | `APP_USR-...` |
| `VITE_MP_PREFERENCE_ID_MODULE1` | `3102...` |
| `VITE_MP_PREFERENCE_ID_FULLCOURSE` | `3102...` |
| `VITE_SUPABASE_URL` | `https://iuuyvsrwncdslmsryazz.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhb...` |
| `VITE_WHATSAPP_NUMBER` | `521234567890` |

> **Nota**: Para Producción, asegúrate de poner aquí tus **Credenciales de Producción** de Mercado Pago (no las de prueba).

## 3. Credenciales de Mercado Pago (Producción)
1.  Ve a [Mercado Pago Developers > Tus Integraciones](https://www.mercadopago.com.mx/developers/panel).
2.  Activa las **Credenciales de Producción**.
3.  Usa esas nuevas credenciales para actualizar las variables en Vercel (`VITE_MP_PUBLIC_KEY`, etc).
4.  Vercel requerirá un "Redeploy" para tomar los nuevos valores.

---

## Pasos después de configurar todo:
1.  Ve a la pestaña **Deployments** en Vercel.
2.  Busca el último deploy fallido.
3.  Dale clic al botón de tres puntos (⋮) y selecciona **Redeploy**.
4.  ¡Debería funcionar! 🟢
