-- ============================================
-- CLASE 5: REPASO CRUD Y JOINS
-- Archivo 1: Repaso Rápido de CRUD (5 min)
-- ============================================

-- OBJETIVO:
-- Reforzar lo visto teóricamente en la clase anterior.
-- Vamos a ejecutar estas sentencias para asegurar que recordamos 
-- cómo manipular datos antes de pasar a temas avanzados.

USE curso_fullstack;

-- 1. READ (Leer)
-- Ver qué tenemos en la tabla usuarios
SELECT * FROM usuarios;

-- 2. CREATE (Crear)
-- Agreguemos un par de usuarios nuevos para tener datos de prueba
INSERT INTO usuarios (nombre, email, edad) VALUES 
('Laura Bozzo', 'laura@talkshow.com', 60),
('Chabelo Inmortal', 'chabelo@tv.com', 99);

-- Verificamos
SELECT * FROM usuarios ORDER BY id DESC LIMIT 2;

-- 3. UPDATE (Actualizar)
-- Corregir la edad de un usuario (digamos que Laura tiene 61)
-- IMPORTANTE: Siempre usar WHERE
UPDATE usuarios 
SET edad = 61 
WHERE email = 'laura@talkshow.com';

-- Verificamos
SELECT * FROM usuarios WHERE email = 'laura@talkshow.com';

-- 4. DELETE (Eliminar)
-- Eliminemos al usuario Chabelo
DELETE FROM usuarios 
WHERE email = 'chabelo@tv.com';

-- Verificamos
SELECT * FROM usuarios;

-- ============================================
-- CONCLUSIÓN:
-- Ya sabemos manipular una sola tabla.
-- Ahora, ¿qué pasa si queremos relacionar información?
-- (Ej: Usuarios que tienen Pedidos)
-- Pasemos al archivo 02_setup_joins.sql
-- ============================================
