# 📋 Auditoría: Landing Page vs Fuente de Verdad

**Fecha de auditoría:** 2 de Enero de 2026  
**Auditor:** GitHub Copilot  
**Objetivo:** Verificar que la landing page muestre toda la información del curso correctamente

---

## 📄 Archivo de Fuente de Verdad

**Archivo:** `Full Stack con SQL Server.md`  
**Ubicación:** `/Users/rodrigopaz/Documents/Courses/FullStack/LandingPage/Full Stack con SQL Server.md`

Este documento contiene toda la información oficial del curso y debe ser la referencia para cualquier contenido publicado.

---

## 🔴 ERRORES CRÍTICOS (Información Incorrecta)

| Elemento | Landing Page (Actual) | Fuente de Verdad (Correcto) | Archivo a Corregir |
|----------|----------------------|----------------------------|-------------------|
| **Fecha de inicio** | "3 de Enero 2026" | **24 de Enero 2026** (Masterclass) | `Hero.jsx` línea 25 |
| **Horario clases** | "9:00 AM a 2:00 PM" | **9:00 AM a 10:00 AM** (normal) / 9:00-12:30 (Masterclass) | `Schedule.jsx` línea 60 |
| **Calendario** | Clases en Ene 3, 10, 24, 31 | Masterclass Ene 24, Clase 4: Ene 31 | `Schedule.jsx` línea 40 |
| **Día sin clase** | "17 de Enero" | No aplica con calendario real | `Schedule.jsx` línea 115 |

### Detalle de correcciones necesarias:

#### Hero.jsx
```jsx
// ACTUAL (INCORRECTO):
<span className="text-primary-300 text-sm font-medium">Inicia 3 de Enero, 2026</span>

// CORRECTO:
<span className="text-primary-300 text-sm font-medium">Masterclass: 24 de Enero, 2026</span>
```

#### Schedule.jsx
```jsx
// ACTUAL (INCORRECTO):
<p className="text-slate-400 mb-12">
    Las clases se imparten los sábados de 9:00 AM a 2:00 PM.
</p>

// CORRECTO:
<p className="text-slate-400 mb-12">
    Clases los sábados de 9:00 AM a 10:00 AM (hora CDMX). Masterclass inicial: 9:00 AM - 12:30 PM.
</p>
```

---

## 🟡 INFORMACIÓN OMITIDA (No aparece en la web)

### Prioridad Alta (Afecta conversión)

| Información | Fuente de Verdad | Ubicación Sugerida |
|-------------|------------------|-------------------|
| **Cupos limitados** | "Solo 9 cupos de 12 máximo" | Hero + Pricing |
| **Fecha límite inscripción** | "Viernes 23 de Enero 2026" | Hero + Pricing |
| **Garantía de satisfacción** | "100% devolución después de 1ra clase sin preguntas" | Pricing |
| **Formas de pago detalladas** | Tarjeta, OXXO, transferencia, 12 MSI | Pricing |

### Prioridad Media (Mejora confianza)

| Información | Fuente de Verdad | Ubicación Sugerida |
|-------------|------------------|-------------------|
| **Preguntas Frecuentes (FAQ)** | 6 preguntas con respuestas | Nueva sección |
| **Perfil del instructor** | Especialidades de Rodrigo Paz | Nueva sección o About |
| **Requisitos previos** | PC, internet, micrófono, nivel principiante | Nueva sección |
| **Proceso de inscripción** | 5 pasos detallados | FAQ o modal |

### Prioridad Baja (Nice to have)

| Información | Fuente de Verdad | Ubicación Sugerida |
|-------------|------------------|-------------------|
| **WhatsApp de contacto** | +52 56 2229 3752 | Footer |
| **Email de contacto** | contacto@rodrigopaz.space | Footer |
| **Instagram** | @rodrigopaztech | Footer |
| **Precios módulos 2, 3, 4** | $499 cada uno | Pricing (expandido) |
| **Ahorro específico** | "$96 MXN comparado con módulos" | Pricing |
| **Comunidad WhatsApp** | Grupo privado de estudiantes | Benefits |

---

## 🟢 INFORMACIÓN CORRECTA

| Elemento | Estado |
|----------|--------|
| Precio Módulo 1: $399 MXN | ✅ Correcto |
| Precio Curso Completo: $1,800 MXN | ✅ Correcto |
| 16 clases / 4 módulos | ✅ Correcto |
| Tecnologías: PHP, SQL Server, JavaScript, Bootstrap | ✅ Correcto |
| Grabaciones de por vida | ✅ Correcto |
| Asesoría 1-a-1 (2 sesiones, curso completo) | ✅ Correcto |
| Bonus Docker | ✅ Correcto |
| Certificado (curso completo) | ✅ Correcto |
| Clases en vivo por Zoom | ✅ Correcto |
| Soporte vía WhatsApp | ✅ Correcto |
| Materiales descargables | ✅ Correcto |

---

## 📊 RESUMEN EJECUTIVO

| Categoría | Cantidad | Impacto |
|-----------|----------|---------|
| 🔴 Errores críticos | **4** | Alto - Confunde al usuario |
| 🟡 Información omitida | **16** | Medio - Reduce conversión |
| 🟢 Información correcta | **11** | - |

**Porcentaje de precisión actual:** ~73% (11/15 elementos clave correctos)

---

## 🎯 PLAN DE ACCIÓN RECOMENDADO

### Fase 1: Correcciones Urgentes (Antes de lanzar campaña)

1. **Hero.jsx**
   - [ ] Cambiar fecha "3 de Enero" → "24 de Enero 2026"
   - [ ] Agregar badge de urgencia: "Solo 9 cupos disponibles"

2. **Schedule.jsx**
   - [ ] Rehacer calendario con fechas correctas
   - [ ] Corregir horario a "9:00-10:00 AM"
   - [ ] Destacar Masterclass del 24 de Enero (9am-12:30pm)

3. **Pricing.jsx**
   - [ ] Agregar "Fecha límite: 23 de Enero"
   - [ ] Agregar garantía de satisfacción
   - [ ] Agregar formas de pago (12 MSI, OXXO)

### Fase 2: Mejoras Importantes (Próximos días)

4. **Footer.jsx**
   - [ ] Agregar WhatsApp: +52 56 2229 3752
   - [ ] Agregar Email: contacto@rodrigopaz.space
   - [ ] Agregar Instagram: @rodrigopaztech

5. **Nueva sección: FAQ**
   - [ ] Crear componente FAQ.jsx
   - [ ] Incluir las 6 preguntas frecuentes del documento

### Fase 3: Mejoras Deseables (Cuando sea posible)

6. **Nueva sección: Instructor**
   - [ ] Perfil de Rodrigo Paz
   - [ ] Especialidades y experiencia

7. **Nueva sección: Requisitos**
   - [ ] Requisitos técnicos
   - [ ] Nivel recomendado

---

## 📁 Archivos Involucrados

```
landing-page/src/components/
├── Hero.jsx          ← Corregir fecha de inicio
├── Schedule.jsx      ← Rehacer calendario completo
├── Pricing.jsx       ← Agregar urgencia y garantía
├── Footer.jsx        ← Agregar datos de contacto
├── FAQ.jsx           ← CREAR NUEVO
├── Instructor.jsx    ← CREAR NUEVO (opcional)
└── Requirements.jsx  ← CREAR NUEVO (opcional)
```

---

## ✅ Verificación Post-Corrección

Después de implementar los cambios, verificar:

1. [ ] Fecha de Masterclass visible: 24 de Enero 2026
2. [ ] Horario correcto: 9:00-10:00 AM (normal), 9:00-12:30 PM (Masterclass)
3. [ ] Cupos visibles: 9 de 12
4. [ ] Fecha límite visible: 23 de Enero
5. [ ] Garantía de satisfacción visible
6. [ ] Datos de contacto en footer
7. [ ] Chatbot actualizado con misma información (verificar RAG)

---

*Documento generado el 2 de Enero de 2026*  
*Próxima revisión recomendada: Después de implementar Fase 1*
