# Clase 4: Introducción a SQL
**Fecha:** Sábado 31 de Enero 2026  
**Duración:** 50 minutos efectivos  
**Horario:** 9:00 AM - 10:00 AM (CDMX)

---

## 🎯 Objetivo de la Clase

Al finalizar, los estudiantes serán capaces de:
- Entender qué es una base de datos relacional y para qué sirve
- Navegar en phpMyAdmin con confianza
- Escribir queries SQL básicos: SELECT, INSERT, UPDATE, DELETE
- Usar WHERE, ORDER BY y LIMIT para filtrar y ordenar datos
- Aplicar lo aprendido en ejercicios prácticos

---

## ⏱️ Distribución del Tiempo (50 minutos)

| Actividad | Tiempo | % | Tipo |
|-----------|--------|---|------|
| **Quiz de Repaso** | 5 min | 10% | 🎮 Juego |
| **Introducción + Contexto** | 3 min | 6% | 📚 Teoría |
| **SELECT - Consultar Datos** | 7 min | 14% | 📚 Teoría + 💻 Práctica |
| **INSERT - Agregar Datos** | 5 min | 10% | 💻 Práctica |
| **Ejercicio Breakout Rooms** | 10 min | 20% | 🎮 Juego + 💻 Práctica |
| **UPDATE y DELETE** | 8 min | 16% | 📚 Teoría + 💻 Práctica |
| **WHERE, ORDER BY, LIMIT** | 7 min | 14% | 💻 Práctica |
| **Reto Semanal + Cierre** | 5 min | 10% | 🎮 Juego |

### **Resumen:**
- 🎮 **Juego/Interacción:** 15 min (30%)
- 📚 **Teoría:** 13 min (26%)
- 💻 **Práctica:** 22 min (44%)

---

## 📋 Plan Detallado Minuto a Minuto

### **[0-5 min] 🎮 Quiz de Repaso - Kahoot** (Juego - 10%)

**Objetivo:** Reactivar conocimientos de PHP de las clases anteriores

**Herramienta:** Kahoot (https://kahoot.com)

**Preguntas (5 preguntas, 1 min cada una):**

1. **¿Qué hace este código PHP?**
   ```php
   $nombre = "Juan";
   echo "Hola $nombre";
   ```
   - A) Imprime "Hola Juan" ✅
   - B) Da error
   - C) Imprime "Hola $nombre"
   - D) No hace nada

2. **¿Cuál es la diferencia entre GET y POST?**
   - A) GET es más seguro
   - B) POST envía datos en la URL
   - C) GET envía datos en la URL, POST en el body ✅
   - D) Son lo mismo

3. **¿Para qué sirve `session_start()`?**
   - A) Iniciar el servidor
   - B) Iniciar una sesión para guardar datos del usuario ✅
   - C) Conectar a base de datos
   - D) Crear un formulario

4. **¿Qué hace `$_POST['email']`?**
   - A) Envía un email
   - B) Obtiene el valor del campo 'email' de un formulario ✅
   - C) Valida un email
   - D) Crea una variable

5. **¿Por qué necesitamos bases de datos?**
   - A) Para guardar datos de forma permanente ✅
   - B) Para hacer páginas bonitas
   - C) Para usar PHP
   - D) No son necesarias

**Transición:** *"Perfecto, hasta ahora hemos guardado datos en variables y sesiones, pero ¿qué pasa cuando apagas el servidor? Se pierden. Hoy vamos a aprender a guardar datos PARA SIEMPRE."*

---

### **[5-8 min] 📚 Introducción: ¿Qué es una Base de Datos?** (Teoría - 6%)

**Analogía Visual:**

> **Base de datos = Excel con superpoderes**
> - Tablas = Hojas de Excel
> - Filas = Registros (usuarios, productos, pedidos)
> - Columnas = Campos (nombre, email, precio)
> - SQL = El lenguaje para hablar con la base de datos

**Mostrar en pantalla:**
1. Abrir phpMyAdmin (http://localhost/phpmyadmin)
2. Mostrar la base de datos `curso_fullstack` (ya creada)
3. Mostrar la tabla `usuarios` con 5 registros de ejemplo

**Tabla de ejemplo:**
| id | nombre | email | edad |
|----|--------|-------|------|
| 1 | Juan Pérez | juan@example.com | 25 |
| 2 | Ana López | ana@example.com | 30 |
| 3 | Carlos Ruiz | carlos@example.com | 22 |
| 4 | María García | maria@example.com | 28 |
| 5 | Pedro Sánchez | pedro@example.com | 35 |

**Pregunta rápida:** *"¿Qué aplicaciones usan bases de datos?"*  
Respuestas esperadas: Facebook, Instagram, Netflix, Amazon, etc.

---

### **[8-15 min] 💻 SELECT - Consultar Datos** (Teoría 3 min + Práctica 4 min - 14%)

#### **Teoría (3 min):**

**SELECT = "Muéstrame datos"**

```sql
-- Sintaxis básica
SELECT columna1, columna2 FROM tabla;

-- Ejemplo 1: Mostrar todos los nombres
SELECT nombre FROM usuarios;

-- Ejemplo 2: Mostrar nombre y email
SELECT nombre, email FROM usuarios;

-- Ejemplo 3: Mostrar TODO (usar con cuidado)
SELECT * FROM usuarios;
```

**Explicar:**
- `SELECT` = qué columnas quiero ver
- `FROM` = de qué tabla
- `*` = todas las columnas (asterisco = "todo")

#### **Práctica Guiada (4 min):**

**Ejercicio 1:** Los alumnos escriben en phpMyAdmin (pestaña SQL):
```sql
SELECT nombre, edad FROM usuarios;
```

**Ejercicio 2:**
```sql
SELECT * FROM usuarios;
```

**Ejercicio 3:** (Reto rápido)
> *"Muestra solo el email de todos los usuarios"*

Respuesta:
```sql
SELECT email FROM usuarios;
```

---

### **[15-20 min] 💻 INSERT - Agregar Datos** (Práctica - 10%)

**INSERT = "Agrega un nuevo registro"**

```sql
-- Sintaxis básica
INSERT INTO tabla (columna1, columna2) VALUES (valor1, valor2);

-- Ejemplo: Agregar un nuevo usuario
INSERT INTO usuarios (nombre, email, edad) 
VALUES ('Luis Martínez', 'luis@example.com', 27);
```

**Explicar:**
- `INSERT INTO` = en qué tabla
- `(nombre, email, edad)` = qué columnas vamos a llenar
- `VALUES` = los valores en el mismo orden

#### **Práctica Individual (3 min):**

**Ejercicio:** Cada alumno agrega su propio registro
```sql
INSERT INTO usuarios (nombre, email, edad) 
VALUES ('TU_NOMBRE', 'tu_email@example.com', TU_EDAD);
```

**Verificar:**
```sql
SELECT * FROM usuarios ORDER BY id DESC LIMIT 5;
```

**Tip:** *"Fíjense que el id se crea automáticamente (AUTO_INCREMENT)"*

---

### **[20-30 min] 🎮 Ejercicio Breakout Rooms** (Juego + Práctica - 20%)

**Formato:**
1. Dividir en grupos de 2-3 personas (Zoom breakout rooms)
2. Cada grupo tiene 7 minutos para resolver
3. Regresan y 1 grupo comparte pantalla (3 min)

**Ejercicio:**

> **Escenario:** Tienes una tabla `productos` con estas columnas:
> - `id` (número, auto-increment)
> - `nombre` (texto)
> - `precio` (número decimal)
> - `stock` (número entero)

**Crear la tabla primero (tú lo haces en pantalla):**
```sql
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);
```

**Tareas del grupo:**
1. Insertar 3 productos diferentes (ej: Laptop, Mouse, Teclado)
2. Mostrar todos los productos
3. Mostrar solo el nombre y precio de todos los productos

**Solución esperada:**
```sql
-- 1. Insertar productos
INSERT INTO productos (nombre, precio, stock) VALUES ('Laptop', 15000.00, 10);
INSERT INTO productos (nombre, precio, stock) VALUES ('Mouse', 250.00, 50);
INSERT INTO productos (nombre, precio, stock) VALUES ('Teclado', 800.00, 30);

-- 2. Mostrar todos
SELECT * FROM productos;

-- 3. Mostrar nombre y precio
SELECT nombre, precio FROM productos;
```

**Mientras trabajan:** Visita los breakout rooms para ayudar

**Al regresar:** Un grupo comparte pantalla y explica su solución

---

### **[30-38 min] 💻 UPDATE y DELETE** (Teoría 3 min + Práctica 5 min - 16%)

#### **UPDATE - Modificar Datos (4 min)**

**UPDATE = "Cambia datos existentes"**

```sql
-- Sintaxis básica
UPDATE tabla SET columna = nuevo_valor WHERE condicion;

-- Ejemplo: Cambiar el precio de un producto
UPDATE productos SET precio = 14500.00 WHERE id = 1;

-- Ejemplo: Aumentar stock de todos los productos
UPDATE productos SET stock = stock + 10;
```

**⚠️ ADVERTENCIA IMPORTANTE:**
```sql
-- ❌ PELIGRO: Esto cambia TODOS los registros
UPDATE productos SET precio = 0;

-- ✅ CORRECTO: Usa WHERE para especificar cuál
UPDATE productos SET precio = 0 WHERE id = 5;
```

**Práctica:**
```sql
-- Cambiar el precio del Mouse a $300
UPDATE productos SET precio = 300.00 WHERE nombre = 'Mouse';
```

#### **DELETE - Eliminar Datos (4 min)**

**DELETE = "Elimina registros"**

```sql
-- Sintaxis básica
DELETE FROM tabla WHERE condicion;

-- Ejemplo: Eliminar un producto
DELETE FROM productos WHERE id = 3;
```

**⚠️ ADVERTENCIA CRÍTICA:**
```sql
-- ❌ PELIGRO EXTREMO: Esto BORRA TODO
DELETE FROM productos;

-- ✅ SIEMPRE usa WHERE
DELETE FROM productos WHERE id = 5;
```

**Práctica:**
```sql
-- Eliminar productos con stock = 0
DELETE FROM productos WHERE stock = 0;
```

---

### **[38-45 min] 💻 WHERE, ORDER BY, LIMIT** (Práctica - 14%)

**WHERE = "Filtrar resultados"**

```sql
-- Productos con precio mayor a 500
SELECT * FROM productos WHERE precio > 500;

-- Productos con stock menor a 20
SELECT * FROM productos WHERE stock < 20;

-- Producto específico por nombre
SELECT * FROM productos WHERE nombre = 'Laptop';
```

**ORDER BY = "Ordenar resultados"**

```sql
-- Ordenar por precio (menor a mayor)
SELECT * FROM productos ORDER BY precio ASC;

-- Ordenar por precio (mayor a menor)
SELECT * FROM productos ORDER BY precio DESC;

-- Ordenar por nombre alfabéticamente
SELECT * FROM productos ORDER BY nombre ASC;
```

**LIMIT = "Limitar cantidad de resultados"**

```sql
-- Mostrar solo los primeros 3 productos
SELECT * FROM productos LIMIT 3;

-- Mostrar los 2 productos más caros
SELECT * FROM productos ORDER BY precio DESC LIMIT 2;
```

**Práctica Combinada:**
```sql
-- Mostrar los 3 productos más baratos
SELECT nombre, precio FROM productos ORDER BY precio ASC LIMIT 3;

-- Mostrar productos con stock mayor a 20, ordenados por nombre
SELECT * FROM productos WHERE stock > 20 ORDER BY nombre ASC;
```

---

### **[45-50 min] 🎮 Reto Semanal + Cierre** (Juego - 10%)

#### **Reto Semanal (3 min):**

**Sistema de Puntos:**
- ✅ Completar el reto: **10 puntos**
- ✅ Código limpio y comentado: **+5 puntos bonus**
- ✅ Entregar antes del viernes: **+5 puntos bonus**
- 🏆 Top 3 del módulo ganan: Sesión 1-on-1 con Rodrigo

**Reto:**

> **Crea una base de datos de películas**
> 
> 1. Crea una tabla `peliculas` con:
>    - id (auto-increment)
>    - titulo (texto)
>    - año (número)
>    - genero (texto)
>    - calificacion (decimal, ej: 8.5)
> 
> 2. Inserta 10 películas (usa tus favoritas)
> 
> 3. Escribe 5 queries diferentes:
>    - Mostrar todas las películas
>    - Películas de un género específico
>    - Películas con calificación mayor a 8
>    - Las 3 películas mejor calificadas
>    - Películas de un año específico
> 
> 4. Toma screenshots de:
>    - La estructura de tu tabla
>    - Tus 10 películas insertadas
>    - Los resultados de tus 5 queries
> 
> 5. Sube todo a un documento (Google Docs o PDF) y comparte el link en el grupo de WhatsApp

**Entrega:** Antes del viernes 6 de Febrero a las 11:59 PM

---

#### **Cierre (2 min):**

**Resumen de lo aprendido:**
- ✅ SELECT - Consultar datos
- ✅ INSERT - Agregar registros
- ✅ UPDATE - Modificar datos
- ✅ DELETE - Eliminar registros
- ✅ WHERE - Filtrar
- ✅ ORDER BY - Ordenar
- ✅ LIMIT - Limitar resultados

**Pregunta final:** *"¿Qué query usarías para mostrar los 5 usuarios más jóvenes?"*

Respuesta:
```sql
SELECT * FROM usuarios ORDER BY edad ASC LIMIT 5;
```

**Motivación:**
> *"Felicidades, ya saben SQL básico. La próxima clase vamos a aprender Joins y subconsultas para hacer queries más poderosas. Con esto ya pueden trabajar con el 80% de las bases de datos del mundo real."*

**Recordatorio:**
- 📱 Reto semanal antes del viernes
- 📚 Revisar documentación de SQL si tienen dudas
- 💬 Grupo de WhatsApp para preguntas

---

## 🛠️ Materiales Necesarios

### **Antes de la Clase:**

#### **1. Setup de Base de Datos (Elige UNA opción):**

**Opción A - phpMyAdmin Compartido (RECOMENDADA):**
- Crea una base de datos en tu servidor/hosting
- Configura usuarios para cada alumno (ej: `alumno1`, `alumno2`, etc.)
- Comparte URL + credenciales en el grupo de WhatsApp
- **Ventaja:** Cero instalación, empiezan en 30 segundos

**Opción B - Servicio Online Gratuito:**
- Cada alumno crea cuenta en [db4free.net](https://www.db4free.net/)
- Siguen tutorial de 2 minutos para crear su BD
- **Ventaja:** Cada quien tiene su propia BD

**Opción C - Local (Solo si ya tienen XAMPP):**
- Solo para alumnos que ya instalaron XAMPP en clases anteriores
- Acceden a http://localhost/phpmyadmin
- **Desventaja:** Pierdes tiempo ayudando con instalación

#### **2. Script SQL Base (Ejecutar en tu servidor):**

```sql
-- Base de datos principal
CREATE DATABASE curso_fullstack;
USE curso_fullstack;

-- Tabla de ejemplo con datos
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    edad INT NOT NULL
);

INSERT INTO usuarios (nombre, email, edad) VALUES
('Juan Pérez', 'juan@example.com', 25),
('Ana López', 'ana@example.com', 30),
('Carlos Ruiz', 'carlos@example.com', 22),
('María García', 'maria@example.com', 28),
('Pedro Sánchez', 'pedro@example.com', 35);
```

#### **3. Kahoot Preparado:**
- Crea quiz en https://create.kahoot.it
- Usa las 5 preguntas de repaso de PHP
- Ten el PIN listo para compartir

#### **4. Herramientas Abiertas:**
- ✅ phpMyAdmin (tu servidor o local)
- ✅ Kahoot
- ✅ Zoom con breakout rooms configurados (grupos de 2-3)
- ✅ Timer visible (https://timer.online)
- ✅ Google Sheet para leaderboard de puntos

#### **5. Compartir con Alumnos (WhatsApp):**

**Mensaje para enviar 1 día antes:**

> 📢 **Clase 4 - Mañana Sábado 9:00 AM**
> 
> Tema: Introducción a SQL
> 
> **Acceso a Base de Datos:**
> - URL: [TU_URL_PHPMYADMIN]
> - Usuario: alumno1, alumno2, etc. (te asignaré el tuyo)
> - Contraseña: [CONTRASEÑA]
> 
> **NO necesitas instalar nada.** Solo abre el link y listo.
> 
> Nos vemos mañana 🚀

---

### **⚠️ IMPORTANTE: Esta clase es 100% SQL**

- ❌ **NO se usa PHP** en esta clase
- ❌ **NO se instala XAMPP** (eso es en Clase 6)
- ✅ **Solo phpMyAdmin** para escribir SQL
- ✅ **Enfoque:** Dominar SELECT, INSERT, UPDATE, DELETE

**PHP + Base de datos se verá en Clase 6** (después de dominar SQL)

---

## 📊 Métricas de Éxito

**Durante la clase:**
- ✅ Al menos 80% responden en el quiz
- ✅ Todos completan el ejercicio de INSERT
- ✅ Todos los grupos terminan el ejercicio de breakout rooms
- ✅ Al menos 3 alumnos responden la pregunta final

**Después de la clase:**
- ✅ Al menos 60% completan el reto semanal
- ✅ Menos de 5 preguntas repetitivas en WhatsApp sobre lo mismo

---

## 💡 Tips para el Instructor

### **Timing:**
- ⏱️ Usa un timer visible para cada bloque
- 🚨 Si un ejercicio toma más tiempo, acorta la teoría, NO la práctica
- ⚡ Ten queries pre-escritas en un archivo .txt para copiar/pegar rápido

### **Engagement:**
- 🎉 Celebra cada query exitoso: *"¡Perfecto! Eso es exactamente lo que hace Facebook"*
- 🤝 Normaliza errores: *"Ese error es súper común, aprendamos de él"*
- 👀 Pregunta constantemente: *"¿Alguien tiene un error diferente? Comparte pantalla"*

### **Adaptación:**
- **Si van rápido:** Agregar ejercicio de subconsultas simples
- **Si van lento:** Eliminar ORDER BY y LIMIT, dejarlo para tarea
- **Si hay muchos errores:** Pausar y hacer debugging en vivo

### **Uso de IA:**
- ✅ Permitir: Generar datos de prueba (INSERT de 10 usuarios)
- ✅ Permitir: Explicar errores de sintaxis
- ❌ NO permitir: Que generen las queries completas del reto

---

## 📚 Recursos Adicionales

**Para compartir en el grupo:**
- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)
- [SQL Cheat Sheet](https://www.sqltutorial.org/sql-cheat-sheet/)
- [phpMyAdmin Documentation](https://www.phpmyadmin.net/docs/)

**Para practicar:**
- [SQLBolt](https://sqlbolt.com/) - Ejercicios interactivos
- [HackerRank SQL](https://www.hackerrank.com/domains/sql) - Challenges

---

**¡Éxito en tu clase! 🚀**

*Recuerda: La clave es 44% práctica, 30% juego, 26% teoría. Mantén el ritmo dinámico y celebra cada pequeño logro.*
