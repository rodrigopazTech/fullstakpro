<?php
/**
 * ============================================
 * ARCHIVO 3: SELECT con WHERE - Buscar Usuario Específico
 * Tiempo estimado: 5 minutos
 * ============================================
 * 
 * OBJETIVO:
 * Usar prepared statements para buscar un usuario por ID
 * Esto previene SQL Injection (ataques de seguridad)
 */

require '01_conexion.php';

echo "<h2>🔍 Buscar Usuario por ID</h2>";

// PASO 1: Definir el ID que queremos buscar
// En un caso real, esto vendría de un formulario ($_GET['id'])
$id_buscar = 1;

echo "<p>Buscando usuario con ID: $id_buscar</p>";

// PASO 2: Escribir la query con placeholder
// :id es un placeholder (marcador de posición)
$sql = "SELECT * FROM usuarios WHERE id = :id";

// PASO 3: Preparar la query
// prepare() crea un prepared statement
$stmt = $pdo->prepare($sql);

// PASO 4: Ejecutar con los valores
// Pasamos un array asociativo con los valores
$stmt->execute(['id' => $id_buscar]);

// PASO 5: Obtener UN solo resultado
// fetch() trae solo el primer resultado (no todos)
$usuario = $stmt->fetch();

// PASO 6: Verificar si se encontró el usuario
if ($usuario) {
    // Usuario encontrado
    echo "<div style='background: #d4edda; padding: 15px; border-radius: 5px;'>";
    echo "<h3>✅ Usuario Encontrado:</h3>";
    echo "<p><strong>ID:</strong> " . $usuario['id'] . "</p>";
    echo "<p><strong>Nombre:</strong> " . $usuario['nombre'] . "</p>";
    echo "<p><strong>Email:</strong> " . $usuario['email'] . "</p>";
    echo "<p><strong>Edad:</strong> " . $usuario['edad'] . " años</p>";
    echo "</div>";
} else {
    // Usuario no encontrado
    echo "<div style='background: #f8d7da; padding: 15px; border-radius: 5px;'>";
    echo "<p>❌ No se encontró ningún usuario con ID: $id_buscar</p>";
    echo "</div>";
}

/**
 * ¿POR QUÉ USAR PREPARED STATEMENTS?
 * 
 * ❌ FORMA INSEGURA (NO HACER):
 * $sql = "SELECT * FROM usuarios WHERE id = $id_buscar";
 * 
 * Problema: Si $id_buscar viene de un usuario malicioso,
 * podría inyectar código SQL y hackear tu base de datos.
 * 
 * Ejemplo de ataque:
 * $id_buscar = "1 OR 1=1"; // Mostraría TODOS los usuarios
 * 
 * ✅ FORMA SEGURA (SIEMPRE HACER):
 * $sql = "SELECT * FROM usuarios WHERE id = :id";
 * $stmt->execute(['id' => $id_buscar]);
 * 
 * PDO escapa automáticamente los valores y previene ataques.
 */

// EJEMPLO 2: Buscar por email
echo "<hr>";
echo "<h3>🔍 Buscar por Email:</h3>";

$email_buscar = "juan@example.com";

$sql = "SELECT * FROM usuarios WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->execute(['email' => $email_buscar]);
$usuario = $stmt->fetch();

if ($usuario) {
    echo "<p>✅ Usuario encontrado: <strong>" . $usuario['nombre'] . "</strong></p>";
} else {
    echo "<p>❌ Email no encontrado</p>";
}
?>
