-- ============================================
-- CLASE 4: INTRODUCCIÓN A SQL
-- Archivo 5: UPDATE - Modificar Datos
-- Tiempo estimado: 4 minutos
-- ============================================

-- OBJETIVO:
-- Aprender a actualizar (modificar) registros existentes

-- ⚠️ ADVERTENCIA IMPORTANTE:
-- UPDATE sin WHERE modifica TODOS los registros
-- SIEMPRE usa WHERE para especificar cuál modificar

-- ============================================
-- EJEMPLO 1: Actualizar un solo campo
-- Tiempo: 2 minutos
-- ============================================

-- Cambiar el precio de un producto específico
UPDATE productos 
SET precio = 14500.00 
WHERE id = 1;

-- VERIFICAR el cambio:
SELECT * FROM productos WHERE id = 1;


-- ============================================
-- EJEMPLO 2: Actualizar múltiples campos
-- Tiempo: 1 minuto
-- ============================================

-- Cambiar precio Y stock del mismo producto
UPDATE productos 
SET precio = 14000.00, stock = 15 
WHERE id = 1;

-- VERIFICAR:
SELECT * FROM productos WHERE id = 1;


-- ============================================
-- EJEMPLO 3: Actualizar usando el nombre
-- Tiempo: 1 minuto
-- ============================================

-- Cambiar precio del Mouse a $300
UPDATE productos 
SET precio = 300.00 
WHERE nombre = 'Mouse Logitech';

-- VERIFICAR:
SELECT * FROM productos WHERE nombre = 'Mouse Logitech';


-- ============================================
-- EJERCICIO PRÁCTICO
-- Tiempo: 2 minutos
-- ============================================

-- INSTRUCCIÓN: Aumenta el stock del Teclado en 20 unidades
-- Pista: Puedes usar stock = stock + 20

-- TU CÓDIGO AQUÍ:
-- UPDATE productos SET ...


-- SOLUCIÓN:
-- UPDATE productos SET stock = stock + 20 WHERE nombre = 'Teclado Mecánico';


-- ============================================
-- ⚠️ ERRORES PELIGROSOS (NO EJECUTAR)
-- ============================================

-- ❌ PELIGRO: Esto cambia el precio de TODOS los productos a 0
-- UPDATE productos SET precio = 0;
-- (Falta el WHERE)

-- ✅ CORRECTO: Especifica cuál producto
-- UPDATE productos SET precio = 0 WHERE id = 5;


-- ============================================
-- RESUMEN:
-- UPDATE tabla SET columna = valor WHERE condicion;
-- SIEMPRE usa WHERE (a menos que quieras cambiar TODO)
-- Puedes actualizar múltiples columnas separadas por comas
-- ============================================
