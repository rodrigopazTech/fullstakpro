# 📋 Guía de Actualizaciones - Nuevo Precio $999 MXN

**Fecha:** 6 de Enero 2026  
**Cambio Principal:** Precio actualizado a $999 MXN (pago único por curso completo)

---

## ✅ Estado Actual de Archivos

### Ya Actualizados ✅

| Archivo | Estado | Precio |
|---------|--------|--------|
| [context.md](../context.md) | ✅ Actualizado | $999 MXN |
| [Pricing.jsx](../landing-page/src/components/Pricing.jsx) | ✅ Actualizado | $999 MXN, 70% OFF |
| [Hero.jsx](../landing-page/src/components/Hero.jsx) | ✅ Actualizado | Fecha 24 Enero 2026 |

---

## 🔄 Archivos que Necesitan Actualización

### 1. Base de Conocimiento del Chatbot

**Archivo:** `docs/knowledge_base_curso.md`

**Cambios necesarios:**
- ❌ Precio por módulo ($399, $499) → ✅ Solo curso completo $999
- ❌ Precio curso completo $1,800 → ✅ $999 MXN
- ❌ Calendario Enero con Clase 1 el 3 de enero → ✅ Inicia 24 de Enero
- Actualizar información de pagos

### 2. Edge Function de Mercado Pago

**Archivo:** `landing-page/supabase/functions/create-preference/index.ts`

**Estado:** ✅ Ya está configurado para recibir el precio dinámicamente desde el frontend

**Verificar:**
- El precio se pasa desde `EnrollmentForm.jsx` como `price: 999`
- No hay hardcoding del precio en la Edge Function

### 3. Prompts del Chatbot (n8n)

**Archivos que pueden contener precios:**
- `docs/n8n_chatbot_rag_buffer.json`
- `docs/n8n_chatbot_v2_rag_buffer.json`
- `docs/n8n_chatbot_web_rag.json`
- `docs/n8n_chatbot_web.json`

**Acción:** Revisar y actualizar cualquier referencia a precios antiguos

---

## 📝 Actualización de Knowledge Base

El siguiente contenido debe reemplazar el archivo `knowledge_base_curso.md`:

```markdown
# Base de Conocimiento - Curso Full Stack con SQL Server

## Información General del Curso

**Nombre:** Curso Full Stack con SQL Server
**Instructor:** Rodrigo Paz (@rodrigopaztech)
**Modalidad:** Clases en vivo por Zoom + Grabaciones de por vida
**Duración Total:** 16 clases (80 horas aproximadamente)
**Estructura:** 4 módulos de 4 clases cada uno
**Fecha de inicio:** 24 de Enero 2026

---

## Precio y Oferta Actual

### Precio de Lanzamiento (Primera Generación 2026)
- **Precio:** $999 MXN (pago único)
- **Precio normal:** $3,500 MXN
- **Descuento:** 70% OFF
- **Cupos disponibles:** Solo 9 lugares

### ¿Qué incluye?
- ✅ 16 clases en vivo (cada sábado)
- ✅ Grabaciones de por vida
- ✅ Soporte personalizado por WhatsApp
- ✅ Materiales y código fuente
- ✅ Proyecto real para tu portafolio
- ✅ Revisión de CV
- ✅ Bonus: Módulo de Docker/Entornos Empresariales
- ✅ Garantía de satisfacción 7 días

### Formas de Pago
- Tarjeta de crédito o débito (con/sin MSI según tu banco)
- Pago en OXXO
- Transferencia bancaria
- Mercado Pago (pagos seguros con SSL)

---

## Horarios y Calendario

**Día de clases:** Sábados
**Horario:** 9:00 AM a 2:00 PM (Hora de Ciudad de México, GMT-6)
**Duración por clase:** 5 horas

### Calendario 2026
- **Clase 1:** Sábado 24 de Enero 2026
- **Clase 2:** Sábado 31 de Enero 2026
- **Y así sucesivamente cada sábado...**

El curso completo dura aproximadamente 4 meses (16 sábados).

---

## Contenido del Curso por Módulo

### Módulo 1: Fundamentos del Backend (Clases 1-4)
- Arquitectura cliente-servidor
- Servidores web con Nginx
- PHP básico: variables, tipos de datos, operadores
- Estructuras de control y funciones
- Manejo de formularios
- Sesiones y cookies

### Módulo 2: Base de Datos con SQL Server (Clases 5-8)
- Fundamentos de bases de datos relacionales
- SQL: SELECT, INSERT, UPDATE, DELETE
- Joins y subconsultas avanzadas
- Procedimientos almacenados
- Conexión desde PHP

### Módulo 3: Frontend con JavaScript (Clases 9-12)
- JavaScript moderno (ES6+)
- Manipulación del DOM
- Eventos y programación asíncrona
- Fetch API para peticiones AJAX
- Manejo de JSON

### Módulo 4: Bootstrap y Proyecto Final (Clases 13-16)
- CSS3 moderno y Flexbox/Grid
- Bootstrap Framework
- Diseño responsivo
- Proyecto Integrador completo
- Despliegue en servidores web

---

## Tecnologías que Aprenderás

- **PHP** - Backend
- **SQL Server** - Base de datos empresarial
- **JavaScript** - Frontend interactivo
- **HTML5 y CSS3** - Estructura y estilos
- **Bootstrap** - Diseño responsivo
- **Git** - Control de versiones
- **Docker** (Bonus) - Contenedores

---

## Requisitos

### Necesarios:
- Computadora (Windows, Mac o Linux)
- Conexión estable a internet
- Ganas de aprender y practicar

### Recomendados (no obligatorios):
- Conocimientos básicos de programación
- Estar estudiando o haber estudiado sistemas/informática

---

## Proceso de Inscripción

1. **Visita:** https://rodrigopaz.space
2. **Haz clic en:** "Inscribirme Ahora"
3. **Completa el formulario:** Nombre, email y teléfono
4. **Realiza el pago:** $999 MXN via Mercado Pago
5. **Recibe confirmación:** WhatsApp + email con acceso

---

## Preguntas Frecuentes

### ¿Y si no puedo asistir a una clase en vivo?
No te preocupes, todas las clases quedan grabadas y tienes acceso de por vida.

### ¿Necesito saber programar antes?
No es obligatorio, pero ayuda tener nociones básicas. El curso está diseñado para principiantes.

### ¿Puedo pagar en OXXO?
Sí, Mercado Pago acepta pago en OXXO. Recibirás un código para pagar en cualquier tienda.

### ¿Hay garantía?
Sí, si después de la primera clase sientes que no es para ti, te devolvemos el 100% de tu dinero.

### ¿Por qué $999 si antes costaba más?
Es precio especial de primera generación. Después del curso, el precio será $3,500 MXN.

### ¿Cuántos lugares quedan?
Solo 9 lugares disponibles para mantener la calidad y atención personalizada.

---

## Contacto

- **WhatsApp:** +52 56 2229 3752
- **Instagram:** @rodrigopaztech
- **Web:** https://rodrigopaz.space
- **Respuesta en menos de 24 horas**

---

## Sobre el Instructor

**Rodrigo Paz** (@rodrigopaztech)

Desarrollador Web Full-Stack con experiencia en empresas de tecnología. Especializado en PHP, SQL Server y JavaScript. Apasionado por enseñar de forma práctica lo que la universidad no enseña.
```

---

## 🛠️ Comandos para Actualizar

### Actualizar Knowledge Base (ejecutar manualmente):

1. Reemplazar contenido de `docs/knowledge_base_curso.md` con el contenido de arriba
2. Si usas n8n con RAG, regenerar los embeddings

### Verificar Mercado Pago:

El precio se pasa dinámicamente desde:
- `Pricing.jsx` → `planPrice={999}`
- `EnrollmentForm.jsx` → recibe `price` como prop

No hay hardcoding, así que ✅ no necesita cambios.

### Variables de Entorno a verificar:

```bash
# Supabase Edge Functions
MP_ACCESS_TOKEN=tu_token_de_mercadopago
MP_WEBHOOK_URL=https://tu-n8n.com/webhook/mercadopago
FRONTEND_URL=https://rodrigopaz.space
```

---

## 📊 Resumen de Oferta Actual

| Concepto | Valor |
|----------|-------|
| **Precio** | $999 MXN |
| **Precio Normal** | $3,500 MXN |
| **Descuento** | 70% |
| **Cupos** | 9 disponibles |
| **Fecha inicio** | 24 de Enero 2026 |
| **Duración** | 16 clases / 4 meses |
| **Modalidad** | Clases en vivo + Grabaciones |
| **Horario** | Sábados 9AM-2PM CDMX |

---

## ✅ Checklist Final

- [ ] Actualizar `knowledge_base_curso.md`
- [ ] Verificar que el chatbot responde con precio correcto
- [ ] Revisar prompts de n8n
- [ ] Probar flujo completo de compra
- [ ] Verificar que Facebook Pixel dispara eventos correctos
- [ ] Actualizar anuncios de Facebook con nuevo precio

---

*Última actualización: 6 de Enero 2026*
