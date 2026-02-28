# Clase 4: Conexión a Datos con PDO
**Duración:** 45 minutos  
**Modalidad:** Práctica guiada (Learning by Doing)

---

## 🎯 Objetivo de la Clase
Al finalizar, los estudiantes serán capaces de:
- Conectarse a una base de datos usando PDO
- Ejecutar consultas SELECT, INSERT, UPDATE y DELETE
- Implementar prepared statements para prevenir SQL Injection
- Manejar errores de conexión y consultas

---

## 📋 Estructura de la Clase

### **Bloque 1: Introducción Práctica (10 min)**

#### **Minutos 0-3: Hook + Contexto Real**
> *"¿Alguna vez se han preguntado cómo Facebook guarda sus posts o cómo Netflix recuerda lo que vieron? Hoy vamos a conectar PHP con una base de datos real."*

**Actividad Inicial:**
- Mostrar un formulario simple (login o registro)
- Hacer clic en "Enviar" y mostrar cómo los datos NO se guardan sin base de datos
- **Pregunta clave:** *"¿Dónde deberían vivir estos datos?"*

#### **Minutos 3-10: Primera Conexión (Código en Vivo)**
```php
<?php
// conexion.php
$host = 'localhost';
$dbname = 'curso_fullstack';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Conexión exitosa!";
} catch(PDOException $e) {
    echo "❌ Error: " . $e->getMessage();
}
?>
```

**Teoría Just-in-Time (mientras escribes el código):**
- `PDO` = PHP Data Objects (funciona con MySQL, SQL Server, PostgreSQL, etc.)
- `try-catch` = manejo de errores (explicar por qué es importante)
- `ATTR_ERRMODE` = configuración para ver errores detallados

**Ejercicio Rápido (2 min):**
- Los estudiantes copian el código
- Cambian el nombre de la base de datos a su propio nombre
- Verifican la conexión

---

### **Bloque 2: Consultas SELECT (12 min)**

#### **Minutos 10-15: Leer Datos (Query Simple)**
**Escenario:** *"Tenemos una tabla `usuarios` con 5 registros. Vamos a mostrarlos."*

```php
<?php
// listar_usuarios.php
require 'conexion.php';

$sql = "SELECT id, nombre, email FROM usuarios";
$stmt = $pdo->query($sql);
$usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($usuarios as $usuario) {
    echo "ID: {$usuario['id']} - {$usuario['nombre']} ({$usuario['email']})<br>";
}
?>
```

**Teoría Integrada:**
- `query()` vs `prepare()` (mencionar brevemente, profundizar después)
- `fetchAll()` = trae todos los resultados como array
- `FETCH_ASSOC` = array asociativo (más fácil de leer)

**Ejercicio Práctico (5 min):**
- Crear una tabla HTML para mostrar los usuarios
- Agregar un campo más (ej: fecha_registro)

#### **Minutos 15-22: Filtrar con WHERE (Prepared Statements)**
**Problema Real:** *"¿Qué pasa si queremos buscar un usuario específico?"*

```php
<?php
// buscar_usuario.php
require 'conexion.php';

$email_buscar = "juan@example.com"; // Esto vendría de un formulario

// ❌ FORMA INSEGURA (mostrar primero para explicar el riesgo)
// $sql = "SELECT * FROM usuarios WHERE email = '$email_buscar'";

// ✅ FORMA SEGURA (Prepared Statement)
$sql = "SELECT * FROM usuarios WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->execute(['email' => $email_buscar]);
$usuario = $stmt->fetch(PDO::FETCH_ASSOC);

if($usuario) {
    echo "Usuario encontrado: " . $usuario['nombre'];
} else {
    echo "Usuario no existe";
}
?>
```

**Teoría Crítica (SQL Injection):**
- Mostrar ejemplo de inyección: `' OR '1'='1`
- Explicar cómo los prepared statements protegen
- **Regla de oro:** NUNCA concatenar variables en SQL

**Ejercicio (5 min):**
- Crear un formulario de búsqueda por ID
- Mostrar los datos del usuario o mensaje de error

---

### **Bloque 3: Insertar y Actualizar (15 min)**

#### **Minutos 22-30: INSERT - Crear Usuarios**
**Escenario:** *"Vamos a registrar un nuevo usuario desde un formulario."*

```php
<?php
// registrar_usuario.php
require 'conexion.php';

// Datos del formulario (simulados)
$nombre = "María García";
$email = "maria@example.com";
$password = password_hash("123456", PASSWORD_DEFAULT); // Siempre hashear passwords

$sql = "INSERT INTO usuarios (nombre, email, password) VALUES (:nombre, :email, :password)";
$stmt = $pdo->prepare($sql);

try {
    $stmt->execute([
        'nombre' => $nombre,
        'email' => $email,
        'password' => $password
    ]);
    echo "✅ Usuario registrado con ID: " . $pdo->lastInsertId();
} catch(PDOException $e) {
    echo "❌ Error: " . $e->getMessage();
}
?>
```

**Teoría Aplicada:**
- `password_hash()` = nunca guardar contraseñas en texto plano
- `lastInsertId()` = obtener el ID del registro recién creado
- Manejo de errores (ej: email duplicado)

**Ejercicio (5 min):**
- Crear un formulario HTML de registro
- Procesar los datos con POST
- Validar que el email no exista antes de insertar

#### **Minutos 30-37: UPDATE - Modificar Datos**
```php
<?php
// actualizar_usuario.php
require 'conexion.php';

$id = 5;
$nuevo_nombre = "María García López";

$sql = "UPDATE usuarios SET nombre = :nombre WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    'nombre' => $nuevo_nombre,
    'id' => $id
]);

echo "Filas actualizadas: " . $stmt->rowCount();
?>
```

**Ejercicio Rápido (3 min):**
- Actualizar el email de un usuario
- Verificar con SELECT que cambió

---

### **Bloque 4: DELETE y Buenas Prácticas (5 min)**

#### **Minutos 37-42: Eliminar Registros**
```php
<?php
// eliminar_usuario.php
require 'conexion.php';

$id = 10;

// Mejor práctica: verificar antes de eliminar
$sql_check = "SELECT nombre FROM usuarios WHERE id = :id";
$stmt = $pdo->prepare($sql_check);
$stmt->execute(['id' => $id]);
$usuario = $stmt->fetch();

if($usuario) {
    $sql_delete = "DELETE FROM usuarios WHERE id = :id";
    $stmt = $pdo->prepare($sql_delete);
    $stmt->execute(['id' => $id]);
    echo "Usuario '{$usuario['nombre']}' eliminado";
} else {
    echo "Usuario no encontrado";
}
?>
```

**Teoría Final:**
- Soft Delete vs Hard Delete (mencionar concepto)
- Transacciones (introducción rápida para próxima clase)

---

### **Bloque 5: Cierre y Reto (3 min)**

#### **Minutos 42-45: Proyecto Mini**
**Reto para casa:**
> *"Crear un CRUD completo de 'Productos' con los campos: id, nombre, precio, stock"*

**Checklist del Reto:**
- [ ] Crear tabla `productos`
- [ ] Listar todos los productos
- [ ] Buscar producto por ID
- [ ] Agregar nuevo producto
- [ ] Actualizar precio de un producto
- [ ] Eliminar producto

**Recursos:**
- Archivo `conexion.php` base
- Estructura SQL de la tabla
- Plantilla HTML del formulario

---

## 🛠️ Materiales Necesarios

### **Antes de la Clase:**
1. Base de datos `curso_fullstack` creada
2. Tabla `usuarios` con datos de ejemplo:
```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, email, password) VALUES
('Juan Pérez', 'juan@example.com', '$2y$10$...'),
('Ana López', 'ana@example.com', '$2y$10$...'),
('Carlos Ruiz', 'carlos@example.com', '$2y$10$...');
```

### **Durante la Clase:**
- Editor de código compartido (VS Code Live Share)
- phpMyAdmin o DBeaver abierto para verificar cambios
- Servidor local corriendo (XAMPP/WAMP/MAMP)

---

## 📊 Distribución del Tiempo

| Actividad | Minutos | Tipo |
|-----------|---------|------|
| Hook + Primera Conexión | 10 | Práctica Guiada |
| SELECT y Filtros | 12 | Teoría + Ejercicio |
| INSERT y UPDATE | 15 | Práctica Intensiva |
| DELETE y Buenas Prácticas | 5 | Demo + Teoría |
| Cierre y Reto | 3 | Asignación |

---

## 💡 Tips para el Instructor

### **Mantén el Ritmo:**
- ⏱️ Usa un timer visible (10 min, 5 min, 2 min)
- 🎯 Si un ejercicio toma más tiempo, pasa al siguiente y retoma después
- 💬 Pregunta constantemente: *"¿Alguien tiene error? Comparte pantalla"*

### **Engagement:**
- 🔴 Usa ejemplos reales (Instagram, WhatsApp, Netflix)
- ✅ Celebra cuando funcione: *"¡Eso es! Acabas de hacer lo que hace Facebook"*
- ❌ Normaliza los errores: *"Perfecto, este error es común, aprendamos de él"*

### **Adaptación:**
- Si van rápido: agregar transacciones o manejo de archivos
- Si van lento: enfocarse solo en SELECT e INSERT, dejar UPDATE/DELETE para tarea

---

## 🎓 Evaluación Rápida (Opcional)

**Pregunta Final (en chat):**
> *"¿Cuál es la diferencia entre `query()` y `prepare()`? ¿Cuándo usar cada uno?"*

**Respuesta esperada:**
- `query()` = consultas estáticas sin variables
- `prepare()` = consultas con parámetros (previene SQL Injection)

---

## 📚 Recursos Adicionales

- [Documentación oficial PDO](https://www.php.net/manual/es/book.pdo.php)
- [SQL Injection Explained (video 5 min)](https://www.youtube.com/watch?v=...)
- Código completo en GitHub: `github.com/tuusuario/clase4-pdo`

---

**¡Éxito en tu clase! 🚀**
