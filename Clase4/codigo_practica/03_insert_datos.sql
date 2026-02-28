-- ============================================
-- CLASE 4: INTRODUCCIÓN A SQL
-- Archivo 3: INSERT - Agregar Datos
-- Tiempo estimado: 5 minutos
-- ============================================

-- OBJETIVO:
-- Aprender a insertar (agregar) nuevos registros a la tabla

-- ============================================
-- EJEMPLO 1: Insertar un solo registro
-- Tiempo: 2 minutos
-- ============================================

-- Sintaxis básica:
-- INSERT INTO tabla (columna1, columna2, ...) VALUES (valor1, valor2, ...);

-- Agregar un nuevo usuario
INSERT INTO usuarios (nombre, email, edad) 
VALUES ('Luis Martínez', 'luis@example.com', 27);

-- VERIFICAR que se agregó:
SELECT * FROM usuarios WHERE nombre = 'Luis Martínez';

-- NOTA IMPORTANTE:
-- NO incluimos el 'id' porque es AUTO_INCREMENT
-- La base de datos lo genera automáticamente


-- ============================================
-- EJERCICIO PRÁCTICO 1
-- Tiempo: 3 minutos
-- ============================================

-- INSTRUCCIÓN: Agrega TU PROPIO registro con tus datos

-- TU CÓDIGO AQUÍ:
-- INSERT INTO usuarios (nombre, email, edad) 
-- VALUES ('TU_NOMBRE', 'tu_email@example.com', TU_EDAD);


-- VERIFICAR que se agregó:
-- SELECT * FROM usuarios ORDER BY id DESC LIMIT 1;


-- ============================================
-- EJEMPLO 2: Insertar múltiples registros
-- Tiempo: 2 minutos (OPCIONAL)
-- ============================================

-- Puedes insertar varios registros a la vez separándolos con comas
INSERT INTO usuarios (nombre, email, edad) VALUES
('Sofia Torres', 'sofia@example.com', 24),
('Diego Ramírez', 'diego@example.com', 31),
('Laura Mendoza', 'laura@example.com', 26);

-- VERIFICAR:
SELECT * FROM usuarios ORDER BY id DESC LIMIT 3;


-- ============================================
-- ERRORES COMUNES:
-- ============================================

-- ERROR 1: Email duplicado (violación de UNIQUE)
-- INSERT INTO usuarios (nombre, email, edad) 
-- VALUES ('Otro Juan', 'juan@example.com', 30);
-- ❌ Este dará error porque juan@example.com ya existe

-- ERROR 2: Olvidar una columna obligatoria (NOT NULL)
-- INSERT INTO usuarios (nombre, email) 
-- VALUES ('Sin Edad', 'sinedad@example.com');
-- ❌ Este dará error porque 'edad' es obligatoria


-- ============================================
-- RESUMEN:
-- INSERT INTO tabla (col1, col2) VALUES (val1, val2);
-- No incluir columnas AUTO_INCREMENT
-- Respetar tipos de datos (números sin comillas, texto con comillas)
-- ============================================
