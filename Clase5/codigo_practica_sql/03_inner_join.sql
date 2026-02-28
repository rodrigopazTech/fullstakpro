-- ============================================
-- CLASE 5: REPASO CRUD Y JOINS
-- Archivo 3: INNER JOIN (La Intersección)
-- ============================================

-- OBJETIVO:
-- Unir dos tablas para ver información combinada.
-- INNER JOIN muestra solo los registros que tienen coincidencia en AMBAS tablas.

USE curso_fullstack;

-- ESCENARIO:
-- Queremos ver una lista de pedidos, pero en lugar del 'usuario_id',
-- queremos ver el NOMBRE del usuario.

-- SINTAXIS BÁSICA:
-- SELECT columnas
-- FROM tabla_A
-- INNER JOIN tabla_B ON tabla_A.id = tabla_B.foreign_id;

-- 1. Ejemplo Práctico
SELECT 
    usuarios.nombre,   -- Dato de tabla usuarios
    pedidos.producto,  -- Dato de tabla pedidos
    pedidos.monto      -- Dato de tabla pedidos
FROM usuarios
INNER JOIN pedidos ON usuarios.id = pedidos.usuario_id;

-- EXPLICACIÓN:
-- "Trae el nombre, producto y monto"
-- "De la tabla usuarios"
-- "JUNTANDO con la tabla pedidos"
-- "DONDE el id del usuario coincida con el usuario_id del pedido"

-- 2. Usando Alias (Más corto y profesional)
-- Podemos poner apodos a las tablas (u = usuarios, p = pedidos)
SELECT 
    u.nombre, 
    p.producto, 
    p.monto,
    p.fecha
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;

-- 3. Filtrando con JOINs
-- ¿Quién gastó más de $5000?
SELECT 
    u.nombre, 
    p.producto, 
    p.monto
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id
WHERE p.monto > 5000;

-- ============================================
-- NOTE:
-- Si un usuario NUNCA ha comprado nada, NO aparecerá aquí.
-- Porque INNER JOIN es exclusivo (solo coincidencias).
-- Para ver usuarios sin compras, necesitamos LEFT JOIN.
-- ============================================
