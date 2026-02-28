<?php
/**
 * ============================================
 * ARCHIVO 4: INSERT - Agregar Nuevo Usuario
 * Tiempo estimado: 5 minutos
 * ============================================
 * 
 * OBJETIVO:
 * Insertar un nuevo usuario en la base de datos desde PHP
 */

require '01_conexion.php';

echo "<h2>➕ Agregar Nuevo Usuario</h2>";

// PASO 1: Definir los datos del nuevo usuario
// En un caso real, estos datos vendrían de un formulario
$nombre = "Roberto Gómez";
$email = "roberto@example.com";
$edad = 32;

echo "<p>Insertando usuario: <strong>$nombre</strong></p>";

// PASO 2: Escribir la query INSERT con placeholders
$sql = "INSERT INTO usuarios (nombre, email, edad) VALUES (:nombre, :email, :edad)";

// PASO 3: Preparar la query
$stmt = $pdo->prepare($sql);

// PASO 4: Ejecutar con try-catch para manejar errores
try {
    // Ejecutar el INSERT
    $stmt->execute([
        'nombre' => $nombre,
        'email' => $email,
        'edad' => $edad
    ]);
    
    // Obtener el ID del registro recién insertado
    $ultimo_id = $pdo->lastInsertId();
    
    // Mensaje de éxito
    echo "<div style='background: #d4edda; padding: 15px; border-radius: 5px;'>";
    echo "<p>✅ Usuario agregado exitosamente!</p>";
    echo "<p><strong>ID asignado:</strong> $ultimo_id</p>";
    echo "</div>";
    
} catch(PDOException $e) {
    // Si hay error (ej: email duplicado)
    echo "<div style='background: #f8d7da; padding: 15px; border-radius: 5px;'>";
    echo "<p>❌ Error al insertar usuario:</p>";
    echo "<p>" . $e->getMessage() . "</p>";
    echo "</div>";
}

/**
 * EXPLICACIÓN:
 * 
 * 1. lastInsertId():
 *    - Devuelve el ID del último registro insertado
 *    - Útil para saber qué ID se asignó automáticamente
 * 
 * 2. try-catch:
 *    - Captura errores como email duplicado
 *    - Evita que el script se detenga abruptamente
 * 
 * 3. Placeholders (:nombre, :email, :edad):
 *    - Previenen SQL Injection
 *    - PDO escapa automáticamente los valores
 */

// PASO 5: Verificar que se insertó correctamente
echo "<hr>";
echo "<h3>📋 Usuarios Actualizados:</h3>";

$sql = "SELECT * FROM usuarios ORDER BY id DESC LIMIT 5";
$stmt = $pdo->query($sql);
$usuarios = $stmt->fetchAll();

echo "<table border='1' cellpadding='10'>";
echo "<tr><th>ID</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>";
foreach($usuarios as $usuario) {
    // Resaltar el nuevo usuario
    $estilo = ($usuario['id'] == $ultimo_id) ? "background: yellow;" : "";
    echo "<tr style='$estilo'>";
    echo "<td>" . $usuario['id'] . "</td>";
    echo "<td>" . $usuario['nombre'] . "</td>";
    echo "<td>" . $usuario['email'] . "</td>";
    echo "<td>" . $usuario['edad'] . "</td>";
    echo "</tr>";
}
echo "</table>";

/**
 * ERRORES COMUNES:
 * 
 * 1. "Duplicate entry for key 'email'":
 *    - El email ya existe en la base de datos
 *    - Solución: Cambiar el email o verificar antes de insertar
 * 
 * 2. "Column 'edad' cannot be null":
 *    - Falta un valor obligatorio
 *    - Solución: Asegurarse de pasar todos los campos NOT NULL
 */
?>
