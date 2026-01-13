# 🔄 Guía de Actualización de Precios - $999 MXN

**Fecha:** 5 de Enero 2026  
**Cambio:** Precio único de $999 MXN por el curso completo (antes $1,800 por módulos)

---

## 📋 Resumen de Cambios

| Antes | Ahora |
|-------|-------|
| Módulo 1: $399 MXN | ❌ Eliminado |
| Módulos 2-4: $499 MXN c/u | ❌ Eliminado |
| Curso Completo: $1,800 MXN | **$999 MXN** |
| Precio "normal": $1,896 MXN | **$3,500 MXN** (para mostrar descuento) |

---

## ✅ Archivos YA Actualizados

Estos archivos ya tienen el precio correcto de $999:

| Archivo | Estado |
|---------|--------|
| `landing-page/src/components/Pricing.jsx` | ✅ $999 MXN |
| `landing-page/src/components/Hero.jsx` | ✅ Fecha 24 Enero |

---

## ⚠️ Archivos que DEBEN Actualizarse

### 1. Knowledge Base del Curso
**Archivo:** `docs/knowledge_base_curso.md`

**Cambios necesarios:**
- Eliminar precios por módulo ($399, $499)
- Actualizar precio del curso completo a $999 MXN
- Actualizar precio "normal" a $3,500 MXN
- Actualizar fecha de inicio a 24 de Enero 2026

---

### 2. Workflow de n8n - Insert Knowledge Base
**Archivo:** `docs/n8n_insert_knowledge_base_v2.json`

**Cambios necesarios:**
- Actualizar todos los precios en el JSON
- Cambiar $1,800 → $999
- Cambiar referencias a módulos individuales

---

### 3. Context.md (Contexto del proyecto)
**Archivo:** `context.md`

**Cambios necesarios:**
- Actualizar modelo de precios
- Eliminar referencia a módulos separados

---

### 4. Función de Mercado Pago (Supabase Edge Function)
**Archivo:** `landing-page/supabase/functions/create-preference/index.ts`

**Estado:** ✅ Ya dinámico (recibe precio del frontend)

> La función ya recibe el precio como parámetro, así que no necesita cambios mientras el frontend envíe $999.

---

## 📝 Cambios Detallados por Archivo

### knowledge_base_curso.md

**SECCIÓN A REEMPLAZAR - Precios:**

```markdown
## Precios y Planes de Pago

### Curso Completo Full Stack
- **Precio especial de lanzamiento:** $999 MXN
- **Precio normal:** $3,500 MXN (70% de descuento)
- **Pago único** - Acceso de por vida

### Lo que incluye:
- 16 clases en vivo (80+ horas de contenido)
- Grabaciones de por vida
- Soporte personalizado vía WhatsApp
- Revisión de CV y Portafolio
- Proyecto real para tu portafolio
- Bonus: Módulo de Docker y despliegue
- Garantía de satisfacción de 7 días

### Formas de Pago
- Tarjeta de crédito o débito (Visa, Mastercard, American Express)
- Pago en OXXO
- Transferencia bancaria
- Mercado Pago (pagos seguros con SSL)
- Meses sin intereses disponibles según tu banco
```

**SECCIÓN A REEMPLAZAR - Calendario:**

```markdown
## Horarios y Calendario

**Día de clases:** Sábados
**Horario:** 9:00 AM a 2:00 PM (Hora de Ciudad de México, GMT-6)
**Duración por clase:** 5 horas
**Fecha de inicio:** 24 de Enero 2026

### Calendario Enero-Febrero 2026
- **Clase 1:** Sábado 24 de Enero 2026
- **Clase 2:** Sábado 31 de Enero 2026
- **Clase 3:** Sábado 7 de Febrero 2026
- **Clase 4:** Sábado 14 de Febrero 2026
(El calendario completo se comparte al inscribirte)
```

**SECCIÓN A REEMPLAZAR - Proceso de Inscripción:**

```markdown
## Proceso de Inscripción

### Paso a paso
1. **Visita la página:** https://rodrigopaz.space
2. **Haz clic en "Inscribirme"**
3. **Completa el formulario:** Nombre, email y teléfono
4. **Realiza el pago:** $999 MXN vía Mercado Pago
5. **Recibe confirmación:** WhatsApp y email con acceso al grupo
```

**SECCIÓN A REEMPLAZAR - FAQ:**

```markdown
## Preguntas Frecuentes (FAQ)

### ¿Cuánto cuesta el curso?
El curso completo tiene un precio de lanzamiento de $999 MXN (precio regular $3,500). Es un pago único con acceso de por vida.

### ¿Puedo tomar solo un módulo?
No, el curso se vende como paquete completo de 16 clases para garantizar el aprendizaje integral.

### ¿Hay meses sin intereses?
Sí, dependiendo de tu banco puedes pagar hasta en 12 meses sin intereses vía Mercado Pago.

### ¿Cuándo inicia el curso?
El curso inicia el 24 de Enero 2026.
```

---

### n8n_insert_knowledge_base_v2.json

Este archivo contiene los datos que se insertan en la base de conocimiento del chatbot. Debes actualizar el JSON para reflejar los nuevos precios.

**Buscar y reemplazar:**
| Buscar | Reemplazar |
|--------|------------|
| `$399 MXN` | `$999 MXN` |
| `$499 MXN` | `$999 MXN` |
| `$1,800 MXN` | `$999 MXN` |
| `$1800` | `$999` |
| `precio: 399` | `precio: 999` |
| `precio: 499` | `precio: 999` |
| `precio: 1800` | `precio: 999` |

**Textos a actualizar:**
- "El Módulo 1: Fundamentos Web tiene un precio especial de $399 MXN" → Eliminar o cambiar a información del curso completo
- "El Curso Completo (16 clases) tiene un precio de $1,800 MXN" → "$999 MXN"
- "Esto representa un ahorro de $196 MXN" → "Esto representa un ahorro de $2,501 MXN (70% de descuento)"

---

### context.md

**Contenido actual a cambiar:**
```
Como es un curso para estudiantes deseo dividirlo en 4 modulos de 4 clases cada uno. 
Cada modulo tiene un costo de 499, excepto el primero que tiene un costo de 399...
```

**Nuevo contenido:**
```
El curso Full Stack con SQL Server se vende como paquete completo de 16 clases.
Precio de lanzamiento: $999 MXN (precio regular $3,500 MXN - 70% OFF)
Incluye acceso de por vida a las grabaciones y soporte por WhatsApp.
```

---

## 🤖 Actualización del Chatbot (n8n)

Si tienes un chatbot configurado con RAG, necesitas:

1. **Ejecutar el workflow de inserción** con los nuevos datos
2. O **actualizar manualmente** los embeddings en Supabase

### Nuevo prompt del sistema para el chatbot:

```
Eres el asistente virtual del Curso Full Stack con SQL Server de Rodrigo Paz.

INFORMACIÓN IMPORTANTE DE PRECIOS:
- Precio actual: $999 MXN (70% de descuento)
- Precio normal: $3,500 MXN
- Es un PAGO ÚNICO con acceso de por vida
- NO hay opción de pagar por módulos separados
- Inicio del curso: 24 de Enero 2026

Cuando te pregunten por el precio, siempre menciona:
1. El precio de $999 MXN
2. Que es 70% de descuento
3. Que incluye las 16 clases + grabaciones + soporte
4. Que solo quedan pocos lugares disponibles
```

---

## 📱 Verificación Post-Actualización

Después de hacer los cambios, verifica:

### En la Landing Page:
- [ ] Precio muestra $999 MXN
- [ ] Precio tachado muestra $3,500 MXN
- [ ] Badge dice "70% OFF"
- [ ] Formulario de inscripción funciona
- [ ] Mercado Pago recibe $999

### En el Chatbot:
- [ ] Responde correctamente sobre el precio
- [ ] No menciona módulos separados
- [ ] Menciona la fecha correcta (24 Enero)

### En Facebook Ads:
- [ ] Copy actualizado con $999
- [ ] Landing page coincide con el anuncio

---

## 🔧 Comandos para Actualizar (Si usas terminal)

```bash
# Buscar todas las referencias a precios antiguos
grep -r "1800\|1,800\|399\|499" docs/
grep -r "1800\|1,800" landing-page/src/

# Verificar que el precio en Pricing.jsx sea correcto
grep -A5 "unit_price" landing-page/src/
```

---

## 📊 Resumen de Precios Finales

| Concepto | Valor |
|----------|-------|
| **Precio de venta** | $999 MXN |
| **Precio "normal" (tachado)** | $3,500 MXN |
| **Descuento mostrado** | 70% OFF |
| **Moneda** | MXN (Pesos Mexicanos) |
| **Tipo de pago** | Único (no mensual) |
| **Fecha de inicio** | 24 de Enero 2026 |
| **Cupos disponibles** | 9 |

---

*Última actualización: 5 de Enero 2026*
