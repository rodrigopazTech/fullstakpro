-- ============================================
-- CLASE 4: INTRODUCCIÓN A SQL
-- Archivo 4: Ejercicio Breakout Rooms - Productos
-- Tiempo estimado: 10 minutos
-- ============================================

-- OBJETIVO:
-- Practicar CREATE TABLE, INSERT y SELECT
-- en grupos de 2-3 personas

-- ============================================
-- PASO 1: Crear la tabla de productos
-- Tiempo: 2 minutos (el instructor lo hace)
-- ============================================

CREATE TABLE productos (
    -- id: Identificador único automático
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- nombre: Nombre del producto (máximo 100 caracteres)
    nombre VARCHAR(100) NOT NULL,
    
    -- precio: Precio con decimales (ej: 15000.50)
    -- DECIMAL(10,2) = 10 dígitos totales, 2 decimales
    precio DECIMAL(10,2) NOT NULL,
    
    -- stock: Cantidad disponible (número entero)
    stock INT NOT NULL
);


-- ============================================
-- PASO 2: EJERCICIO EN GRUPOS
-- Tiempo: 7 minutos
-- ============================================

-- TAREA 1: Insertar 3 productos diferentes
-- Ejemplos: Laptop, Mouse, Teclado, Monitor, Audífonos, etc.

-- EJEMPLO (NO COPIAR, inventa los tuyos):
-- INSERT INTO productos (nombre, precio, stock) 
-- VALUES ('Laptop Dell', 15000.00, 10);

-- TU CÓDIGO AQUÍ (3 productos):
-- INSERT INTO productos (nombre, precio, stock) VALUES (...);
-- INSERT INTO productos (nombre, precio, stock) VALUES (...);
-- INSERT INTO productos (nombre, precio, stock) VALUES (...);


-- TAREA 2: Mostrar todos los productos
-- TU CÓDIGO AQUÍ:
-- SELECT ...


-- TAREA 3: Mostrar solo nombre y precio de todos los productos
-- TU CÓDIGO AQUÍ:
-- SELECT ...


-- ============================================
-- PASO 3: Presentación (1 grupo comparte pantalla)
-- Tiempo: 3 minutos
-- ============================================

-- Un grupo voluntario muestra su solución
-- El instructor corrige y explica


-- ============================================
-- SOLUCIÓN COMPLETA (NO VER HASTA TERMINAR)
-- ============================================

-- TAREA 1: Insertar productos
INSERT INTO productos (nombre, precio, stock) VALUES ('Laptop HP', 15000.00, 10);
INSERT INTO productos (nombre, precio, stock) VALUES ('Mouse Logitech', 250.00, 50);
INSERT INTO productos (nombre, precio, stock) VALUES ('Teclado Mecánico', 800.00, 30);

-- TAREA 2: Mostrar todos
SELECT * FROM productos;

-- TAREA 3: Mostrar nombre y precio
SELECT nombre, precio FROM productos;


-- ============================================
-- BONUS (Si terminan antes):
-- ============================================

-- Insertar 2 productos más con precios diferentes
-- Mostrar solo productos con precio mayor a 500
-- (Pista: necesitarás usar WHERE, lo veremos después)
