-- ===========================================
-- SCRIPT DE INICIALIZACIÓN: SQL SERVER
-- ===========================================

-- 1. Crear la Base de Datos
-- Nota: Si ya existe, primero la borramos (CUIDADO en producción)
IF EXISTS(SELECT * FROM sys.databases WHERE name = 'CursoFullStack')
BEGIN
    DROP DATABASE CursoFullStack;
END
GO

CREATE DATABASE CursoFullStack;
GO

-- 2. Seleccionar la Base de Datos
USE CursoFullStack;
GO

-- 3. Crear la Tabla 'Estudiantes'
-- DIFERENCIA CLAVE: En MySQL usaban "AUTO_INCREMENT".
-- En SQL Server se usa "IDENTITY(1,1)" -> Empieza en 1, incrementa de 1 en 1.
CREATE TABLE Estudiantes (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,      -- NVARCHAR soporta caracteres especiales (tildes, ñ) mejor que VARCHAR
    Email NVARCHAR(100) NOT NULL UNIQUE,
    FechaRegistro DATETIME DEFAULT GETDATE() -- GETDATE() es el equivalente a NOW()
);
GO

-- 4. Insertar Datos de Prueba (Seed)
INSERT INTO Estudiantes (Nombre, Email) VALUES 
('Ana García', 'ana@gmail.com'),
('Carlos López', 'carlos@hotmail.com'),
('Luis Rodríguez', 'luis@outlook.com');
GO

-- 5. Verificar que todo funciona
SELECT * FROM Estudiantes;
GO
