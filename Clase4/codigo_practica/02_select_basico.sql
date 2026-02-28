-- ============================================
-- CLASE 4: INTRODUCCIÓN A SQL
-- Archivo 2: SELECT - Consultar Datos
-- Tiempo estimado: 7 minutos
-- ============================================

-- OBJETIVO:
-- Aprender a consultar (leer) datos de la base de datos
-- SELECT es el comando más usado en SQL

-- ============================================
-- EJEMPLO 1: Mostrar una sola columna
-- Tiempo: 1 minuto
-- ============================================

-- Mostrar solo los nombres de todos los usuarios
SELECT nombre FROM usuarios;

-- RESULTADO ESPERADO:
-- Juan Pérez
-- Ana López
-- Carlos Ruiz
-- María García
-- Pedro Sánchez


-- ============================================
-- EJEMPLO 2: Mostrar varias columnas
-- Tiempo: 1 minuto
-- ============================================

-- Mostrar nombre y email de todos los usuarios
SELECT nombre, email FROM usuarios;

-- RESULTADO ESPERADO:
-- Tabla con 2 columnas: nombre y email


-- ============================================
-- EJEMPLO 3: Mostrar TODAS las columnas
-- Tiempo: 1 minuto
-- ============================================

-- El asterisco (*) significa "todas las columnas"
SELECT * FROM usuarios;

-- RESULTADO ESPERADO:
-- Tabla con todas las columnas: id, nombre, email, edad


-- ============================================
-- EJERCICIO PRÁCTICO 1
-- Tiempo: 2 minutos
-- ============================================

-- INSTRUCCIÓN: Escribe un SELECT que muestre solo los emails

-- TU CÓDIGO AQUÍ:
-- SELECT ...


-- SOLUCIÓN:
-- SELECT email FROM usuarios;


-- ============================================
-- EJERCICIO PRÁCTICO 2
-- Tiempo: 2 minutos
-- ============================================

-- INSTRUCCIÓN: Escribe un SELECT que muestre nombre y edad

-- TU CÓDIGO AQUÍ:
-- SELECT ...


-- SOLUCIÓN:
-- SELECT nombre, edad FROM usuarios;


-- ============================================
-- RESUMEN:
-- SELECT columna1, columna2 FROM tabla;
-- SELECT * FROM tabla; (todas las columnas)
-- ============================================
