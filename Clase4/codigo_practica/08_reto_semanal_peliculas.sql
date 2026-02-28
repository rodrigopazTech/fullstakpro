-- ============================================
-- CLASE 4: INTRODUCCIÓN A SQL
-- Archivo 8: RETO SEMANAL - Base de Datos de Películas
-- Tiempo estimado: Para hacer en casa
-- Fecha límite: Viernes 6 de Febrero, 11:59 PM
-- ============================================

-- OBJETIVO:
-- Crear una base de datos completa de películas
-- y practicar todos los comandos aprendidos

-- PUNTOS:
-- ✅ Completar el reto: 10 puntos
-- ✅ Código limpio y comentado: +5 puntos bonus
-- ✅ Entregar antes del viernes: +5 puntos bonus
-- 🏆 Top 3 del módulo: Sesión 1-on-1 con Rodrigo

-- ============================================
-- PARTE 1: Crear la Base de Datos y Tabla
-- ============================================

-- TAREA 1: Crear base de datos
-- Nombre sugerido: peliculas_db
-- TU CÓDIGO AQUÍ:
CREATE DATABASE peliculas_db;
USE peliculas_db;


-- TAREA 2: Crear tabla de películas con estas columnas:
-- - id (auto-increment, primary key)
-- - titulo (texto, máximo 200 caracteres, obligatorio)
-- - año (número entero, obligatorio)
-- - genero (texto, máximo 50 caracteres, obligatorio)
-- - calificacion (decimal con 1 decimal, ej: 8.5, obligatorio)

-- TU CÓDIGO AQUÍ:
CREATE TABLE peliculas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    año INT NOT NULL,
    genero VARCHAR(50) NOT NULL,
    calificacion DECIMAL(3,1) NOT NULL
);


-- ============================================
-- PARTE 2: Insertar 10 Películas
-- ============================================

-- TAREA 3: Inserta 10 películas (usa tus favoritas)
-- Ejemplo de formato:
-- INSERT INTO peliculas (titulo, año, genero, calificacion) VALUES
-- ('El Padrino', 1972, 'Drama', 9.2),
-- ('Inception', 2010, 'Ciencia Ficción', 8.8);

-- TU CÓDIGO AQUÍ (10 películas):
INSERT INTO peliculas (titulo, año, genero, calificacion) VALUES
('El Padrino', 1972, 'Drama', 9.2),
('Inception', 2010, 'Ciencia Ficción', 8.8),
('Pulp Fiction', 1994, 'Crimen', 8.9),
('The Dark Knight', 2008, 'Acción', 9.0),
('Forrest Gump', 1994, 'Drama', 8.8),
('Matrix', 1999, 'Ciencia Ficción', 8.7),
('Interstellar', 2014, 'Ciencia Ficción', 8.6),
('Gladiador', 2000, 'Acción', 8.5),
('El Rey León', 1994, 'Animación', 8.5),
('Avengers: Endgame', 2019, 'Acción', 8.4);


-- ============================================
-- PARTE 3: Escribir 5 Queries Diferentes
-- ============================================

-- QUERY 1: Mostrar todas las películas
-- TU CÓDIGO AQUÍ:
SELECT * FROM peliculas;


-- QUERY 2: Películas de un género específico (elige uno)
-- Ejemplo: Mostrar solo películas de Ciencia Ficción
-- TU CÓDIGO AQUÍ:
SELECT * FROM peliculas WHERE genero = 'Ciencia Ficción';


-- QUERY 3: Películas con calificación mayor a 8.0
-- TU CÓDIGO AQUÍ:
SELECT * FROM peliculas WHERE calificacion > 8.0;


-- QUERY 4: Las 3 películas mejor calificadas
-- TU CÓDIGO AQUÍ:
SELECT * FROM peliculas ORDER BY calificacion DESC LIMIT 3;


-- QUERY 5: Películas de un año específico (elige uno)
-- Ejemplo: Películas del año 1994
-- TU CÓDIGO AQUÍ:
SELECT * FROM peliculas WHERE año = 1994;


-- ============================================
-- PARTE 4: Screenshots Requeridos
-- ============================================

-- Debes tomar 4 screenshots:

-- SCREENSHOT 1: Estructura de tu tabla
-- (En phpMyAdmin, pestaña "Estructura")

-- SCREENSHOT 2: Tus 10 películas insertadas
-- (Resultado del SELECT * FROM peliculas)

-- SCREENSHOT 3: Resultado de tus 5 queries
-- (Puedes ser 1 screenshot con los 5 resultados)

-- SCREENSHOT 4: Este archivo .sql con tu código


-- ============================================
-- PARTE 5: Entrega
-- ============================================

-- FORMATO DE ENTREGA:
-- 1. Crea un documento (Google Docs o PDF)
-- 2. Incluye:
--    - Tus 4 screenshots
--    - Este archivo .sql con tu código completo
--    - Tu nombre completo
-- 3. Comparte el link en el grupo de WhatsApp
-- 4. Fecha límite: Viernes 6 de Febrero, 11:59 PM

-- NOMBRE DEL ARCHIVO:
-- Reto_Clase4_TuNombre.pdf
-- Ejemplo: Reto_Clase4_JuanPerez.pdf


-- ============================================
-- BONUS OPCIONAL (+10 puntos extra)
-- ============================================

-- Si quieres puntos extra, agrega estas queries:

-- BONUS 1: Películas entre 2000 y 2020
SELECT * FROM peliculas WHERE año BETWEEN 2000 AND 2020;

-- BONUS 2: Películas ordenadas por año (más reciente primero)
SELECT * FROM peliculas ORDER BY año DESC;

-- BONUS 3: Contar cuántas películas hay por género
-- (Pista: Necesitas GROUP BY, lo veremos en Clase 5)
SELECT genero, COUNT(*) as total FROM peliculas GROUP BY genero;

-- BONUS 4: Película más antigua
SELECT * FROM peliculas ORDER BY año ASC LIMIT 1;

-- BONUS 5: Promedio de calificación de todas las películas
SELECT AVG(calificacion) as promedio FROM peliculas;


-- ============================================
-- CRITERIOS DE EVALUACIÓN
-- ============================================

-- ✅ Tabla creada correctamente (2 puntos)
-- ✅ 10 películas insertadas (3 puntos)
-- ✅ 5 queries funcionando (3 puntos)
-- ✅ Screenshots incluidos (2 puntos)
-- ✅ Código limpio y comentado (+5 bonus)
-- ✅ Entrega antes del viernes (+5 bonus)
-- ✅ Bonus opcionales (+10 extra)

-- TOTAL POSIBLE: 30 puntos


-- ============================================
-- ¿DUDAS?
-- ============================================

-- Si tienes problemas:
-- 1. Revisa los archivos de práctica de la clase
-- 2. Pregunta en el grupo de WhatsApp
-- 3. Usa Google/YouTube para buscar ejemplos
-- 4. Puedes usar IA para EXPLICAR errores (no para hacer todo)

-- ¡ÉXITO! 🚀
-- ============================================
