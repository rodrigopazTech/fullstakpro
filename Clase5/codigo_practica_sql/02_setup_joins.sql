-- ============================================
-- CLASE 5: REPASO CRUD Y JOINS
-- Archivo 2: Preparando el Terreno (Tablas Relacionales)
-- ============================================

-- OBJETIVO:
-- Crear una segunda tabla 'pedidos' que se relacione con 'usuarios'.
-- Esto es necesario para entender los JOINs.

USE curso_fullstack;

-- 1. Crear tabla de PEDIDOS
-- Fíjate en el campo 'usuario_id'. Ese es el enlace (Foreign Key).
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto VARCHAR(100) NOT NULL,
    monto DECIMAL(10,2) NOT NULL,
    fecha DATE DEFAULT CURRENT_DATE,
    usuario_id INT, -- Aquí guardaremos el ID del usuario que hizo la compra
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) -- Opcional: Integridad referencial
);

-- 2. Insertar Pedidos vinculados a Usuarios existentes
-- Primero, mira los IDs de tus usuarios para saber cuáles existen
SELECT id, nombre FROM usuarios;

-- Supongamos que tienes usuarios con ID 1, 2 y 3.
-- Ajusta los IDs en los INSERT de abajo según TU base de datos.
INSERT INTO pedidos (producto, monto, usuario_id) VALUES 
('Laptop Gamer', 25000.00, 1),  -- Comprado por el usuario ID 1
('Mouse RGB', 500.00, 1),       -- Comprado por el usuario ID 1
('Monitor 4K', 8000.00, 2),     -- Comprado por el usuario ID 2
('Teclado Mecánico', 1200.00, 3); -- Comprado por el usuario ID 3

-- Insertamos un pedido "huérfano" (sin usuario) para ejemplos de RIGHT JOIN (opcional)
-- INSERT INTO pedidos (producto, monto, usuario_id) VALUES ('Pedido Anónimo', 100.00, NULL);

-- 3. Ver las tablas por separado
SELECT * FROM usuarios;
SELECT * FROM pedidos;

-- PREGUNTA:
-- Al ver la tabla 'pedidos', solo vemos números en 'usuario_id'.
-- ¿Cómo sabemos el NOMBRE de quién compró la Laptop?
-- R: ¡Usando JOINs! (Siguiente archivo)
