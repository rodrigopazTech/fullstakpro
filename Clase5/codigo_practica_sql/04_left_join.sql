-- ============================================
-- CLASE 5: REPASO CRUD Y JOINS
-- Archivo 4: LEFT JOIN (Inclusivo)
-- ============================================

-- OBJETIVO:
-- Entender la diferencia con INNER JOIN.
-- LEFT JOIN trae TODOS los registros de la tabla izquierda (usuarios),
-- aunque no tengan coincidencia en la derecha (pedidos).

USE curso_fullstack;

-- ESCENARIO:
-- Queremos ver TODOS los usuarios y qué han comprado.
-- Si Juan no compró nada, queremos que aparezca Juan y diga "NULL" en producto.

-- 1. LEFT JOIN
SELECT 
    u.nombre, 
    p.producto, 
    p.monto
FROM usuarios u       -- Tabla IZQUIERDA (Left)
LEFT JOIN pedidos p   -- Tabla DERECHA (Right)
ON u.id = p.usuario_id;

-- OBSERVACIÓN:
-- Fíjate en los usuarios que no tienen pedidos.
-- Sus columnas de producto y monto dirán NULL.

-- 2. Usos útiles del LEFT JOIN
-- ¿Qué usuarios NO han comprado nada? (Usuarios prospecto)
SELECT 
    u.nombre,
    u.email
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
WHERE p.id IS NULL; -- Filtramos donde no hubo coincidencia (pedido es nulo)

-- ============================================
-- RESUMEN RÁPIDO:
-- INNER JOIN = Solo lo que coincide (Intersección)
-- LEFT JOIN  = Todo lo de la izquierda + coincidencias (o NULL)
-- RIGHT JOIN = Todo lo de la derecha + coincidencias (Poco usado)
-- ============================================
