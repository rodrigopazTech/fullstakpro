-- ============================================
-- CLASE 4: INTRODUCCIÓN A SQL
-- Archivo 7: WHERE, ORDER BY, LIMIT
-- Tiempo estimado: 7 minutos
-- ============================================

-- OBJETIVO:
-- Aprender a filtrar, ordenar y limitar resultados

-- ============================================
-- PARTE 1: WHERE - Filtrar Resultados
-- Tiempo: 3 minutos
-- ============================================

-- WHERE te permite filtrar registros que cumplan una condición

-- EJEMPLO 1: Filtrar por igualdad
SELECT * FROM usuarios WHERE edad = 25;

-- EJEMPLO 2: Mayor que
SELECT * FROM usuarios WHERE edad > 25;

-- EJEMPLO 3: Menor que
SELECT * FROM usuarios WHERE edad < 30;

-- EJEMPLO 4: Mayor o igual
SELECT * FROM usuarios WHERE edad >= 28;

-- EJEMPLO 5: Diferente de
SELECT * FROM usuarios WHERE edad != 25;
-- También puedes usar: WHERE edad <> 25

-- EJEMPLO 6: Filtrar por texto
SELECT * FROM usuarios WHERE nombre = 'Juan Pérez';

-- EJEMPLO 7: Búsqueda parcial (LIKE)
SELECT * FROM usuarios WHERE email LIKE '%gmail.com';
-- % significa "cualquier cosa antes"

-- EJERCICIO: Muestra usuarios con edad mayor a 27
-- TU CÓDIGO AQUÍ:


-- ============================================
-- PARTE 2: ORDER BY - Ordenar Resultados
-- Tiempo: 2 minutos
-- ============================================

-- ORDER BY ordena los resultados

-- EJEMPLO 1: Ordenar por edad (menor a mayor)
SELECT * FROM usuarios ORDER BY edad ASC;
-- ASC = Ascendente (de menor a mayor)

-- EJEMPLO 2: Ordenar por edad (mayor a menor)
SELECT * FROM usuarios ORDER BY edad DESC;
-- DESC = Descendente (de mayor a menor)

-- EJEMPLO 3: Ordenar por nombre alfabéticamente
SELECT * FROM usuarios ORDER BY nombre ASC;

-- EJEMPLO 4: Ordenar por nombre al revés
SELECT * FROM usuarios ORDER BY nombre DESC;

-- EJERCICIO: Muestra usuarios ordenados por email
-- TU CÓDIGO AQUÍ:


-- ============================================
-- PARTE 3: LIMIT - Limitar Cantidad
-- Tiempo: 2 minutos
-- ============================================

-- LIMIT restringe cuántos resultados mostrar

-- EJEMPLO 1: Mostrar solo los primeros 3 usuarios
SELECT * FROM usuarios LIMIT 3;

-- EJEMPLO 2: Mostrar solo 1 usuario
SELECT * FROM usuarios LIMIT 1;

-- EJEMPLO 3: Los 2 usuarios más jóvenes
SELECT * FROM usuarios ORDER BY edad ASC LIMIT 2;

-- EJEMPLO 4: Los 3 usuarios mayores
SELECT * FROM usuarios ORDER BY edad DESC LIMIT 3;


-- ============================================
-- PARTE 4: COMBINANDO TODO
-- Tiempo: 3 minutos
-- ============================================

-- Puedes combinar WHERE, ORDER BY y LIMIT

-- EJEMPLO 1: Usuarios mayores de 25, ordenados por edad, solo 3
SELECT * FROM usuarios 
WHERE edad > 25 
ORDER BY edad ASC 
LIMIT 3;

-- EJEMPLO 2: Usuarios con gmail, ordenados por nombre
SELECT * FROM usuarios 
WHERE email LIKE '%example.com' 
ORDER BY nombre ASC;

-- EJEMPLO 3: El usuario más joven
SELECT * FROM usuarios 
ORDER BY edad ASC 
LIMIT 1;

-- EJEMPLO 4: El usuario mayor
SELECT * FROM usuarios 
ORDER BY edad DESC 
LIMIT 1;


-- ============================================
-- EJERCICIOS PRÁCTICOS COMBINADOS
-- ============================================

-- EJERCICIO 1: Muestra los 3 productos más caros
-- TU CÓDIGO AQUÍ:


-- SOLUCIÓN:
-- SELECT * FROM productos ORDER BY precio DESC LIMIT 3;


-- EJERCICIO 2: Muestra productos con precio mayor a 500, ordenados por nombre
-- TU CÓDIGO AQUÍ:


-- SOLUCIÓN:
-- SELECT * FROM productos WHERE precio > 500 ORDER BY nombre ASC;


-- EJERCICIO 3: Muestra el producto más barato
-- TU CÓDIGO AQUÍ:


-- SOLUCIÓN:
-- SELECT * FROM productos ORDER BY precio ASC LIMIT 1;


-- EJERCICIO 4: Muestra productos con stock menor a 20, ordenados por stock
-- TU CÓDIGO AQUÍ:


-- SOLUCIÓN:
-- SELECT * FROM productos WHERE stock < 20 ORDER BY stock ASC;


-- ============================================
-- RESUMEN:
-- WHERE: Filtrar (=, >, <, >=, <=, !=, LIKE)
-- ORDER BY: Ordenar (ASC ascendente, DESC descendente)
-- LIMIT: Limitar cantidad de resultados
-- Se pueden combinar: WHERE + ORDER BY + LIMIT
-- ============================================
