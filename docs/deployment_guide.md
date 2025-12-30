# Guía de Deployment y Producción 🚀

## 1. Solución de Error en Vercel (Framework Preset)
El error `react-scripts: command not found` ocurre porque Vercel cree que tu app es "Create React App". Debemos decirle que es **Vite**.

1.  Ve a tu proyecto en Vercel > **Settings** > **Build & Development**.
2.  En **Framework Preset**, cambia "Create React App" por **Vite**.
3.  Guarda cambios.
4.  Ve a **Deployments** y dale "Redeploy" al último commit fallido.

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

> **Nota**: Para Producción, asegúrate de poner aquí tus **Credenciales de Producción** de Mercado Pago (no las de prueba).

## 3. Deployment en Vercel (Gratis & SSL)
1.  Sube tu código a **GitHub** (ya lo hiciste).
2.  Ve a [Vercel](https://vercel.com) e importa el repo.
3.  Configura el Preset a **Vite**.
4.  Agrega las **Environment Variables**.
5.  Clic en **Deploy**.

## 4. Credenciales de Mercado Pago (Producción)
1.  Ve a [Mercado Pago Developers > Tus Integraciones](https://www.mercadopago.com.mx/developers/panel).
2.  Activa las **Credenciales de Producción**.
3.  Usa esas nuevas credenciales para actualizar las variables en Vercel (`VITE_MP_PUBLIC_KEY`, etc).
4.  Vercel requerirá un "Redeploy" para tomar los nuevos valores.

## 5. Pruebas Finales
1.  Haz una compra real de prueba.
2.  Verifica que el usuario se guarde en Supabase.
3.  Verifica que el pago llegue a Mercado Pago.
