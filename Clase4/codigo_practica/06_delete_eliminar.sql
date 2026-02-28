-- ============================================
-- CLASE 4: INTRODUCCIÓN A SQL
-- Archivo 6: DELETE - Eliminar Datos
-- Tiempo estimado: 4 minutos
-- ============================================

-- OBJETIVO:
-- Aprender a eliminar registros de la base de datos

-- ⚠️ ADVERTENCIA CRÍTICA:
-- DELETE sin WHERE elimina TODOS los registros
-- NO HAY CTRL+Z en bases de datos
-- SIEMPRE verifica antes de eliminar

-- ============================================
-- BUENA PRÁCTICA: Verificar antes de eliminar
-- Tiempo: 2 minutos
-- ============================================

-- PASO 1: Primero VER qué vas a eliminar
SELECT * FROM productos WHERE id = 3;

-- PASO 2: Si estás seguro, eliminar
DELETE FROM productos WHERE id = 3;

-- PASO 3: Verificar que se eliminó
SELECT * FROM productos;


-- ============================================
-- EJEMPLO 2: Eliminar por condición
-- Tiempo: 2 minutos
-- ============================================

-- Primero, agregar un producto con stock 0
INSERT INTO productos (nombre, precio, stock) 
VALUES ('Producto Agotado', 100.00, 0);

-- Verificar que existe:
SELECT * FROM productos WHERE stock = 0;

-- Eliminar productos sin stock
DELETE FROM productos WHERE stock = 0;

-- Verificar que se eliminó:
SELECT * FROM productos WHERE stock = 0;
-- (No debería mostrar nada)


-- ============================================
-- EJERCICIO PRÁCTICO
-- Tiempo: 2 minutos
-- ============================================

-- INSTRUCCIÓN: 
-- 1. Inserta un producto de prueba
-- 2. Verifica que existe
-- 3. Elimínalo
-- 4. Verifica que ya no existe

-- TU CÓDIGO AQUÍ:
-- INSERT INTO productos ...
-- SELECT * FROM productos WHERE ...
-- DELETE FROM productos WHERE ...
-- SELECT * FROM productos WHERE ...


-- ============================================
-- ⚠️ PELIGRO EXTREMO (NO EJECUTAR JAMÁS)
-- ============================================

-- ❌ ESTO BORRA TODA LA TABLA (TODOS LOS PRODUCTOS)
-- DELETE FROM productos;
-- (Sin WHERE = elimina TODO)

-- ❌ ESTO BORRA LA TABLA COMPLETA (estructura y datos)
-- DROP TABLE productos;
-- (Ni siquiera queda la tabla)


-- ============================================
-- ALTERNATIVA SEGURA: Soft Delete
-- ============================================

-- En lugar de eliminar, marcar como "inactivo"
-- (Esto se verá en clases avanzadas)

-- Ejemplo conceptual (NO ejecutar ahora):
-- ALTER TABLE productos ADD COLUMN activo BOOLEAN DEFAULT TRUE;
-- UPDATE productos SET activo = FALSE WHERE id = 5;
-- SELECT * FROM productos WHERE activo = TRUE;


-- ============================================
-- RESUMEN:
-- DELETE FROM tabla WHERE condicion;
-- SIEMPRE usa WHERE (a menos que quieras borrar TODO)
-- Verifica con SELECT antes de DELETE
-- NO HAY DESHACER en bases de datos
-- ============================================
