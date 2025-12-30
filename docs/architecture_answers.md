# Respuestas a Arquitectura y Workflow

Aquí respondo en detalle a tus preguntas técnicas:

## 1. Responsividad Modal Mercado Pago
**Problema**: El modal se ve mal en teléfonos ("too big").
**Solución Aplicada**: He cambiado el modo a `redirectMode: 'self'` en la actualización del código.
- **Antes**: Abría un *iframe* sobre tu página (a veces corta el contenido en móviles).
- **Ahora**: Redirige al usuario a la página oficial de Mercado Pago (totalmente responsiva). Al terminar, Mercado Pago devolverá al usuario a tu sitio automáticamente.

## 2. Credenciales (Vercel/Supabase)
No necesito tus credenciales para continuar el código.
- **Supabase**: Solo necesitas poner tu URL y Key en `src/lib/supabaseClient.js`.
- **Vercel**: El despliegue lo manejas tú integrando tu GitHub con Vercel (es automático, no necesito acceso).

## 3. ¿Cómo actualizar el estado a "pagado" en la DB?
Este es el punto crítico. El flujo DEBE ser así para ser seguro:

1.  **Frontend (`EnrollmentForm`)**: Guarda los datos en Supabase con estado `pending_payment`.
2.  **Mercado Pago**: Procesa el dinero.
3.  **Webhook (n8n)**: Mercado Pago avisa a tu n8n que el pago fue exitoso (envía un JSON).
4.  **n8n -> Supabase**:
    -   Tu workflow de n8n busca en Supabase al usuario (por email o ID).
    -   Actualiza el campo `status` de `pending_payment` a `paid`.

**¿Por qué n8n?**
Si intentamos hacerlo directo desde la página (Frontend), el usuario podría cerrar la pestaña justo después de pagar y antes de que tu página cargue el "Gracias". Si eso pasa, **la base de datos NUNCA se enteraría** que pagó.
El Webhook (servidor a n8n) es 100% fiable porque ocurre "detrás de escena".

## 4. Chatbot vs Código en Página
Preguntaste si es más fácil poner la lógica de WhatsApp en la página.

*   **Mensaje simple ("Hola, quiero info")**: Sí, es más fácil en la página. Ya lo tienes implementado (el botón flotante abre `wa.me`).
*   **Confirmación de Pago ("Gracias por tu pago")**:
    -   **Recomendacion**: Usa **n8n**.
    -   **Razón**: Como dije arriba, si lo haces en la página y el usuario cierra rápido, nunca le llegará el mensaje. Con n8n, el mensaje se envía automáticamente desde la nube 1 segundo después de que Mercado Pago confirme el cobro.

### Resumen de Cambios en esta versión:
1.  Agregado campo **Teléfono** al formulario.
2.  Cambiado Wallet a modo **Redirección** (Checkear en móvil ahora será perfecto).
3.  Actualizada tabla SQL requerida (ver abajo).

---

## Actualización SQL para Supabase
Como agregamos el teléfono, corre esto en tu SQL Editor de Supabase:

```sql
ALTER TABLE enrollments ADD COLUMN phone text;
```
