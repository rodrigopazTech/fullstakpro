-- ============================================
-- CLASE 4: INTRODUCCIÓN A SQL
-- Archivo 1: Setup Inicial
-- Tiempo estimado: 3 minutos
-- ============================================

-- OBJETIVO:
-- Crear la base de datos y la tabla de usuarios
-- que usaremos durante toda la clase

-- PASO 1: Crear la base de datos
-- Una base de datos es como una carpeta que contiene tablas
CREATE DATABASE curso_fullstack;

-- PASO 2: Seleccionar la base de datos para usarla
-- Esto es como "entrar" a la carpeta
USE curso_fullstack;

-- PASO 3: Crear la tabla de usuarios
-- Una tabla es como una hoja de Excel con columnas definidas
CREATE TABLE usuarios (
    -- id: Número único que se incrementa automáticamente
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- nombre: Texto de máximo 100 caracteres, obligatorio
    nombre VARCHAR(100) NOT NULL,
    
    -- email: Texto único (no se puede repetir), obligatorio
    email VARCHAR(100) UNIQUE NOT NULL,
    
    -- edad: Número entero, obligatorio
    edad INT NOT NULL
);

-- PASO 4: Insertar datos de ejemplo
-- Esto es para tener datos con los que practicar
INSERT INTO usuarios (nombre, email, edad) VALUES
('Juan Pérez', 'juan@example.com', 25),
('Ana López', 'ana@example.com', 30),
('Carlos Ruiz', 'carlos@example.com', 22),
('María García', 'maria@example.com', 28),
('Pedro Sánchez', 'pedro@example.com', 35);

-- VERIFICAR: Mostrar todos los usuarios insertados
SELECT * FROM usuarios;

-- ============================================
-- RESULTADO ESPERADO:
-- Deberías ver una tabla con 5 usuarios
-- ============================================
