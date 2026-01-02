# n8n Workflow Blueprints - Actualizado Enero 2026

Este documento contiene las instrucciones para configurar todos los workflows del chatbot.

---

## 🔄 Workflow 1: Actualizar Knowledge Base (RAG)

### Instrucciones para configurar en n8n:

**Workflow:** "Insertar Knowledge Base - RAG v2"

### Paso 1: Limpiar datos anteriores en Supabase

Ejecuta este SQL en Supabase (SQL Editor) para borrar los datos viejos:

```sql
-- Borrar todos los registros anteriores
TRUNCATE TABLE course_knowledge;
-- Reiniciar el contador de IDs
ALTER SEQUENCE course_knowledge_id_seq RESTART WITH 1;
```

### Paso 2: Actualizar el nodo "Generar Datos del Curso"

Abre el workflow en n8n y reemplaza TODO el código JavaScript del nodo "Generar Datos del Curso" con esto:

```javascript
// =====================================================
// FUENTE DE VERDAD - CURSO FULL STACK CON SQL SERVER
// Última actualización: 1 de enero de 2026
// =====================================================

const courseData = [
  // INFORMACIÓN GENERAL
  {
    text: "El curso Full Stack con SQL Server es impartido por Rodrigo Paz (@rodrigopaztech). Tiene una duración de 16 clases divididas en 4 módulos de 4 clases cada uno. Las clases son los sábados de 9:00 AM a 10:00 AM (1 hora por clase) en modalidad en vivo por Zoom con grabaciones de por vida. La duración puede extenderse a 1.5 horas si el tema lo amerita.",
    metadata: { category: "general", topic: "descripcion" }
  },
  
  // MASTERCLASS Y FECHAS DE INICIO
  {
    text: "MASTERCLASS DE INICIO: Si te inscribes ahora, tu primera clase será el Sábado 24 de Enero 2026 de 9:00 AM a 12:30 PM (con breaks incluidos). En esta Masterclass intensiva cubriremos los temas de las primeras 3 clases del Módulo 1: arquitectura cliente-servidor, servidores web, Git, sintaxis de PHP, variables, estructuras de control y funciones. Es el único día con horario extendido para acelerar tu proceso de aprendizaje.",
    metadata: { category: "masterclass", topic: "inicio_intensivo" }
  },
  
  // CALENDARIO
  {
    text: "El próximo grupo inicia con la MASTERCLASS el Sábado 24 de Enero 2026 de 9:00 AM a 12:30 PM donde se cubren los temas de las primeras 3 clases en un solo día para acelerar tu proceso. A partir del Sábado 31 de Enero continúas con horario normal (9-10 AM). El horario regular es de 9:00 AM a 10:00 AM hora de Ciudad de México (GMT-6).",
    metadata: { category: "calendario", topic: "fechas" }
  },
  
  // CUPOS LIMITADOS
  {
    text: "CUPOS LIMITADOS: El curso tiene un máximo de 12 alumnos por grupo para garantizar atención personalizada e interacción en las clases en vivo. Actualmente quedan solo 9 cupos disponibles. Inscríbete ahora para asegurar tu lugar antes de que se agoten. La fecha límite de inscripción es el Viernes 23 de Enero 2026.",
    metadata: { category: "urgencia", topic: "cupos" }
  },
  
  // MÓDULO 1
  {
    text: "El Módulo 1: Fundamentos Web tiene un precio especial de $399 MXN como oferta de introducción. Incluye 4 clases donde aprenderás arquitectura cliente-servidor, servidores web con Nginx, PHP-FPM, protocolos HTTP/HTTPS, control de versiones con Git, sintaxis básica de PHP, variables, tipos de datos, operadores, estructuras de control, funciones, manejo de formularios POST/GET, sesiones y cookies.",
    metadata: { category: "modulo", topic: "modulo1", precio: 399 }
  },
  
  // MÓDULO 2
  {
    text: "El Módulo 2: Base de Datos con SQL Server cuesta $499 MXN. En las clases 5 a 8 aprenderás conceptos de bases de datos relacionales, SQL básico (SELECT, INSERT, UPDATE, DELETE), creación de bases de datos y tablas, restricciones (constraints) e índices, joins y subconsultas avanzadas, procedimientos almacenados y funciones, uso de SQL Server Management Studio (SSMS) y conexión desde PHP usando sqlsrv y PDO.",
    metadata: { category: "modulo", topic: "modulo2", precio: 499 }
  },
  
  // MÓDULO 3
  {
    text: "El Módulo 3: Frontend con JavaScript cuesta $499 MXN. En las clases 9 a 12 aprenderás JavaScript desde cero: sintaxis, variables, tipos de datos, manipulación del DOM, manejo de eventos, funciones y alcance (scope), programación asíncrona con Promises y async/await, Fetch API para peticiones AJAX, manejo de JSON, características ES6+ como arrow functions y template literals, HTML5 con elementos semánticos, y CSS3 con selectores, propiedades, box model, Flexbox y CSS Grid.",
    metadata: { category: "modulo", topic: "modulo3", precio: 499 }
  },
  
  // MÓDULO 4
  {
    text: "El Módulo 4: Bootstrap y Proyecto Final cuesta $499 MXN. En las clases 13 a 16 aprenderás el sistema de grid de Bootstrap, componentes como Cards, Forms, Buttons y Modals, utilidades y clases de Bootstrap, personalización, diseño responsivo, y desarrollarás tu Proyecto Integrador: una aplicación Full-Stack completa que integra frontend y backend con SQL Server.",
    metadata: { category: "modulo", topic: "modulo4", precio: 499 }
  },
  
  // CURSO COMPLETO
  {
    text: "El Curso Completo (16 clases) tiene un precio de $1,800 MXN. Esto representa un ahorro de $96 MXN comparado con comprar los módulos por separado ($399 + $499 + $499 + $499 = $1,896). El curso completo incluye: certificado de finalización, proyecto integrador revisado por el instructor, 2 sesiones de asesoría 1 a 1 de 30 minutos cada una, y el bonus de Docker.",
    metadata: { category: "precio", topic: "curso_completo", precio: 1800 }
  },
  
  // MÓDULOS ADICIONALES
  {
    text: "MÓDULOS ADICIONALES: Después del Módulo 1 ($399 MXN), puedes continuar con los siguientes módulos: Módulo 2 Base de Datos SQL Server ($499 MXN), Módulo 3 Frontend JavaScript ($499 MXN), Módulo 4 Bootstrap y Proyecto Final ($499 MXN). Los módulos se habilitan conforme avanzan las fechas del curso. Si prefieres, puedes adquirir el Curso Completo a $1,800 MXN y ahorrar $96 pesos.",
    metadata: { category: "precios", topic: "modulos_adicionales" }
  },
  
  // TECNOLOGÍAS
  {
    text: "Las tecnologías que aprenderás en el curso son: Backend con PHP y SQL Server. Frontend con JavaScript, HTML5, CSS3 y Bootstrap. Herramientas como Nginx (servidor web), Git (control de versiones), SQL Server Management Studio (SSMS) para administrar bases de datos, y PHP-FPM. Además, si completas el curso completo, recibes un bonus de Docker para aprender sobre contenedores y despliegue.",
    metadata: { category: "tecnologias", topic: "stack" }
  },
  
  // REQUISITOS
  {
    text: "Los requisitos para tomar el curso son: tener una computadora (Windows, Mac o Linux), conexión estable a internet, micrófono y cámara (recomendado para interactuar). Es recomendable pero NO obligatorio tener conocimientos básicos de programación. El curso está diseñado para principiantes pero avanza a ritmo rápido.",
    metadata: { category: "requisitos", topic: "prerequisitos" }
  },
  
  // BENEFICIOS
  {
    text: "El curso incluye: clases en vivo interactivas donde puedes preguntar en tiempo real, grabaciones de por vida para que repases cuando quieras, soporte vía WhatsApp para resolver dudas entre clases, materiales y recursos descargables (código, slides, ejercicios), y comunidad de estudiantes en grupo privado de WhatsApp.",
    metadata: { category: "beneficios", topic: "incluye" }
  },
  
  // PROCESO DE INSCRIPCIÓN
  {
    text: "Para inscribirte al curso: 1) Visita la página https://rodrigopaz.space, 2) Selecciona tu plan (Módulo 1 a $399 o Curso Completo a $1,800), 3) Completa el formulario con tu nombre, email y teléfono, 4) Realiza el pago con Mercado Pago (acepta tarjeta de crédito/débito, OXXO, transferencia), 5) Recibe confirmación por WhatsApp y email con los datos de acceso.",
    metadata: { category: "inscripcion", topic: "proceso" }
  },
  
  // MÉTODOS DE PAGO
  {
    text: "Las formas de pago disponibles son a través de Mercado Pago: tarjeta de crédito o débito (Visa, Mastercard, American Express), pago en OXXO, transferencia bancaria. Dependiendo de tu banco puedes pagar hasta en 12 meses sin intereses. Todos los pagos son seguros con SSL.",
    metadata: { category: "pago", topic: "metodos" }
  },
  
  // CONTACTO
  {
    text: "Si necesitas ayuda o tienes preguntas sobre el curso, puedes contactar a Rodrigo Paz por WhatsApp al +52 56 2229 3752, seguirlo en Instagram @rodrigopaztech, visitar la web https://rodrigopaz.space o escribir al email contacto@rodrigopaz.space. El tiempo de respuesta es menor a 24 horas.",
    metadata: { category: "contacto", topic: "soporte" }
  },
  
  // FAQ 1
  {
    text: "Preguntas frecuentes: ¿Necesito saber programar? No es obligatorio, pero ayuda. El curso está diseñado para principiantes. ¿Puedo tomar solo un módulo? Sí, cada módulo tiene precio individual. Recomendamos empezar desde el Módulo 1. ¿Qué pasa si no puedo asistir a una clase? Todas las clases quedan grabadas y tienes acceso de por vida.",
    metadata: { category: "faq", topic: "preguntas_generales" }
  },
  
  // FAQ 2
  {
    text: "Más preguntas frecuentes: ¿Dan certificado? Sí, al completar el curso completo (16 clases) recibes certificado digital. ¿Hay meses sin intereses? Sí, dependiendo de tu banco puedes pagar hasta en 12 meses sin intereses a través de Mercado Pago. ¿En qué horario son las clases? Sábados de 9:00 AM a 10:00 AM hora de Ciudad de México. La clase puede extenderse hasta 1.5 horas si el tema lo requiere.",
    metadata: { category: "faq", topic: "certificado_y_pagos" }
  },
  
  // GARANTÍA
  {
    text: "Garantía de satisfacción: Si después de la primera clase sientes que el curso no es para ti, te devolvemos el 100% de tu dinero sin hacer preguntas. Queremos que estés completamente satisfecho con tu inversión en educación.",
    metadata: { category: "garantia", topic: "devolucion" }
  },
  
  // INSTRUCTOR
  {
    text: "Sobre el instructor: Rodrigo Paz (@rodrigopaztech) es Desarrollador Web Full-Stack con experiencia en PHP Backend Development, SQL Server Database Administration, JavaScript Frontend Development, Responsive Web Design, Bootstrap Framework y Docker/DevOps. Es apasionado por enseñar programación de manera práctica, conectando todos los conceptos que en la universidad te enseñan por separado.",
    metadata: { category: "instructor", topic: "rodrigo_paz" }
  }
];

return courseData.map(item => ({ json: item }));
```

### Paso 3: Ejecutar el workflow

1. Ve al workflow "Insertar Knowledge Base - RAG v2"
2. Haz clic en "Execute Workflow" o llama al webhook:
   ```bash
   curl -X POST https://n8n.rodrigopaz.space/webhook/insert-knowledge
   ```

---

## 🔗 Workflow 2: Generar Link de Pago

### Crear nuevo workflow: "Tool - Generar Link de Pago"

Este workflow será llamado como Tool por el AI Agent para generar links de MercadoPago.

### Estructura del Workflow:

```
[Webhook] → [Determinar Plan] → [Crear Enrollment] → [Llamar Edge Function] → [Respond]
```

### Nodo 1: Webhook
- Name: "Webhook Link Pago"
- HTTP Method: POST
- Path: `generar-link-pago`
- Response Mode: "Respond to Webhook"

### Nodo 2: Code - Determinar Plan
Name: "Determinar Plan"

```javascript
const plan = $input.item.json.body.plan || $input.item.json.plan;
const nombre = $input.item.json.body.nombre || $input.item.json.nombre;
const email = $input.item.json.body.email || $input.item.json.email;

let titulo, precio;

if (plan === "1" || plan === 1 || plan === "modulo1" || plan === "modulo 1") {
  titulo = "Módulo 1: Fundamentos Web - Full Stack con SQL Server";
  precio = 399;
} else if (plan === "2" || plan === 2 || plan === "completo" || plan === "curso completo") {
  titulo = "Curso Completo Full Stack con SQL Server (16 clases)";
  precio = 1800;
} else {
  throw new Error("Plan inválido. Usa 1 para Módulo 1 o 2 para Curso Completo");
}

if (!nombre || !email) {
  throw new Error("Faltan datos: nombre y email son requeridos");
}

return {
  json: {
    nombre,
    email,
    titulo,
    precio,
    plan
  }
};
```

### Nodo 3: HTTP Request - Crear Enrollment
Name: "Crear Enrollment"
- Method: POST
- URL: `https://iuuyvsrwncdslmsryazz.supabase.co/rest/v1/enrollments`
- Authentication: Predefined Credential Type → Supabase
- Headers:
  - Prefer: return=representation
- Body (JSON):
```json
{
  "full_name": "{{ $json.nombre }}",
  "email": "{{ $json.email }}",
  "course_plan": "{{ $json.titulo }}",
  "price": {{ $json.precio }},
  "status": "pending_payment"
}
```

### Nodo 4: HTTP Request - Llamar Edge Function
Name: "Generar Preferencia MP"
- Method: POST
- URL: `https://iuuyvsrwncdslmsryazz.supabase.co/functions/v1/create-preference`
- Authentication: Predefined Credential Type → Supabase
- Body (JSON):
```json
{
  "enrollment_id": "{{ $json[0].id }}",
  "title": "{{ $('Determinar Plan').item.json.titulo }}",
  "price": {{ $('Determinar Plan').item.json.precio }},
  "email": "{{ $('Determinar Plan').item.json.email }}",
  "payer_name": "{{ $('Determinar Plan').item.json.nombre }}"
}
```

### Nodo 5: Respond to Webhook
Name: "Responder Link"
- Respond With: JSON
- Response Body:
```json
{
  "success": true,
  "link_pago": "{{ $json.init_point }}",
  "nombre": "{{ $('Determinar Plan').item.json.nombre }}",
  "plan": "{{ $('Determinar Plan').item.json.titulo }}",
  "precio": {{ $('Determinar Plan').item.json.precio }}
}
```

---

## 🤖 Configuración del AI Agent

### Agregar Tool HTTP al AI Agent

En los workflows "Chatbot Web" y "Chatbot WhatsApp", agregar un nodo **HTTP Request Tool**:

1. Conectar al nodo AI Agent en el input `ai_tool`
2. Configurar:

**Name:** `generar_link_pago`

**Description:**
```
Genera un link de pago de MercadoPago para el curso. 
SOLO usa esta herramienta cuando tengas TODOS estos datos del usuario:
1. nombre - El nombre completo del usuario
2. email - El correo electrónico del usuario
3. plan - El número del plan (1 = Módulo 1 $399, 2 = Curso Completo $1,800)

Retorna un link de pago seguro que el usuario puede usar para completar su compra.
```

**Method:** POST
**URL:** `https://n8n.rodrigopaz.space/webhook/generar-link-pago`

**Body Parameters:**
- nombre (string): Nombre completo del usuario
- email (string): Correo electrónico del usuario  
- plan (string): Número del plan seleccionado

---

## 🧠 Configuración de Memoria con PostgreSQL

### Tabla creada en Supabase

La tabla `chat_memory` almacena el historial de conversaciones:

```sql
-- Ya aplicada via migración
CREATE TABLE chat_memory (
  id SERIAL PRIMARY KEY,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'web'
);
```

### Agregar nodo Postgres Chat Memory al AI Agent

En n8n, agregar un nodo **Postgres Chat Memory**:

1. En el workflow del chatbot, buscar el nodo "Postgres Chat Memory"
2. Conectarlo al AI Agent en el input `ai_memory`
3. Configurar:

**Credencial:** Crear una nueva credencial Postgres con estos datos:
- Host: `db.iuuyvsrwncdslmsryazz.supabase.co`
- Database: `postgres`
- User: `postgres`
- Password: (tu password de Supabase)
- Port: `5432`
- SSL: Require

**Configuración del nodo:**
- Table Name: `chat_memory`
- Session ID: `{{ $('Extraer Datos').item.json.session_id }}`
- Context Window Length: `10` (últimos 10 mensajes)

---

## 📝 Prompt del AI Agent (VERSIÓN MEJORADA)

Actualiza el System Message del AI Agent con este prompt:

```
IDENTIDAD Y ROL
===============
Eres el asistente virtual de Rodrigo Paz para el Curso Full Stack con SQL Server.
Tu nombre es "Asistente FullStack Pro".
Responde SIEMPRE en español mexicano, de forma amigable y directa.

REGLAS DE FORMATO (MUY IMPORTANTE)
==================================
- NUNCA uses asteriscos (*), guiones bajos (_) ni formato markdown
- NUNCA uses viñetas con asteriscos o guiones
- Máximo 80 palabras por respuesta
- Usa emojis con moderación (1-2 por mensaje máximo)
- Separa ideas con saltos de línea, no con símbolos

INFORMACIÓN CRÍTICA DEL CURSO
=============================
Curso: Full Stack con SQL Server
Instructor: Rodrigo Paz (@rodrigopaztech)
Duración: 16 clases (4 módulos de 4 clases)
Modalidad: 100% en línea, clases en vivo por Zoom
Horario normal: Sábados 9:00 AM a 10:00 AM (hora CDMX)
Grabaciones disponibles de por vida

FECHA DE INICIO
===============
Masterclass de Inicio: Sábado 24 de Enero 2026 (9am-12:30pm)
A partir del 31 de Enero: horario normal 9-10 AM

URGENCIA
========
Solo quedan 9 cupos de 12 máximo
Fecha límite: Viernes 23 de Enero 2026

PRECIOS
=======
Módulo 1: $399 MXN (oferta de introducción)
Curso Completo (16 clases): $1,800 MXN (ahorras $96)

GENERAR LINK DE PAGO - REGLAS CRÍTICAS
======================================
Para generar un link de pago necesitas 3 datos:
1. PLAN: 1 = Módulo 1 ($399) o 2 = Curso Completo ($1,800)
2. NOMBRE COMPLETO del usuario
3. EMAIL del usuario

CASO A - El usuario da los 3 datos en un mensaje:
Si el usuario proporciona plan, nombre y email juntos, usa la herramienta generar_link_pago INMEDIATAMENTE sin hacer preguntas adicionales.

Ejemplo: "Quiero el Módulo 1, soy Juan Pérez, mi correo es juan@email.com"
→ Tienes los 3 datos, USA LA HERRAMIENTA generar_link_pago ahora mismo.

CASO B - El usuario quiere pagar pero faltan datos:
Pregunta TODOS los datos faltantes en UN SOLO mensaje:

"¡Perfecto! Para generarte el link de pago necesito:
1. ¿Qué plan prefieres? Módulo 1 ($399) o Curso Completo ($1,800)
2. Tu nombre completo
3. Tu correo electrónico
{
  "nombre": "{nombre}",
  "email": "{email}",
  "plan": "{plan}",
  "telefono": "{{ $('Combinar Mensajes').item.json.telefono || '' }}"
}
Envíame los 3 datos y te genero el link al instante 😊"

CASO C - Tienes historial de la conversación:
Revisa los mensajes anteriores. Si el usuario ya dio algún dato (nombre, email o plan) en mensajes previos, NO lo vuelvas a pedir. Solo pide lo que falta.

DESPUÉS DE GENERAR EL LINK
==========================
Cuando recibas el link de la herramienta, responde:

"¡Listo [nombre]! Aquí está tu link de pago seguro:
[link]

Solo quedan 9 cupos. Te recomiendo completarlo ahora 😊"

PROHIBIDO
=========
- Usar asteriscos o formato markdown
- Respuestas mayores a 80 palabras
- Pedir datos uno por uno (siempre pide todo junto)
- Olvidar mencionar los 9 cupos cuando hay interés
- Generar link sin los 3 datos completos
```

---

## ✅ Checklist de Configuración

- [ ] Ejecutar TRUNCATE en Supabase para limpiar datos viejos
- [ ] Actualizar código del nodo "Generar Datos del Curso" 
- [ ] Ejecutar workflow para insertar nuevos datos con embeddings
- [ ] Crear workflow "Tool - Generar Link de Pago"
- [ ] Activar el nuevo workflow
- [ ] Agregar HTTP Request Tool al AI Agent Web
- [ ] Agregar HTTP Request Tool al AI Agent WhatsApp
- [ ] Actualizar System Message en ambos AI Agents
- [ ] Probar flujo completo de pago

---

*Última actualización: 1 de enero de 2026*
          {
            "node": "Format Message",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

## Workflow 2: Confirmación de Pago (Mercado Pago)
Este workflow recibe la notificación de pago y envía el link del curso.

```json
{
  "name": "Mercado Pago Payment Success",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "mp-notification",
        "options": {}
      },
      "name": "MP Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [
        460,
        460
      ]
    },
    {
      "parameters": {
        "operation": "executeQuery",
        "query": "UPDATE enrollments SET status = 'paid' WHERE email = $1",
        "additionalFields": {
          "queryParams": "={{$json.body.payer.email}}"
        }
      },
      "name": "Update Supabase",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 1,
      "position": [
        680,
        460
      ],
      "credentials": {
        "postgres": {
          "id": "YOUR_POSTGRES_CREDENTIALS_ID",
          "name": "Supabase Connection"
        }
      }
    }
  ],
  "connections": {
    "MP Webhook": {
      "main": [
        [
          {
            "node": "Update Supabase",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

### Instrucciones Finales
1.  **Importar**: En n8n, ve a `Workflows > Import from File/JSON` y pega los bloques de arriba.
2.  **Configurar**:
    *   En el Workflow 2, necesitarás conectar tu cuenta de **Postgres** (usando los datos de conexión de Supabase) para que funcione el nodo "Update Supabase".
    *   Si deseas enviar WhatsApps reales, agrega el nodo de **Meta WhatsApp Business** o **Twilio** al final de cada cadena.
