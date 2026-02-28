<?php
/**
 * ============================================
 * CLASE 5: MINI CRUD
 * Archivo: 02_crear_usuario.php
 * ============================================
 * 
 * OBJETIVO:
 * Un formulario simple para insertar datos en la tabla 'usuarios'.
 */

require '01_conexion.php';

$mensaje = "";

// Verificar si el formulario fue enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $edad = $_POST['edad'];

    // Validación básica
    if (!empty($nombre) && !empty($email)) {
        try {
            // Preparar la consulta (Seguridad ante todo)
            $sql = "INSERT INTO usuarios (nombre, email, edad) VALUES (:nombre, :email, :edad)";
            $stmt = $pdo->prepare($sql);
            
            // Ejecutar
            $stmt->execute([
                ':nombre' => $nombre,
                ':email' => $email,
                ':edad' => $edad
            ]);

            $mensaje = "✅ Usuario creado con éxito!";
        } catch (PDOException $e) {
            $mensaje = "❌ Error: " . $e->getMessage();
        }
    } else {
        $mensaje = "⚠️ Por favor llena todos los campos.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Crear Usuario</title>
    <!-- Un poco de CSS para que no se vea tan feo -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-5">
    <h1>Crear Nuevo Usuario</h1>
    
    <?php if ($mensaje): ?>
        <div class="alert alert-info"><?= $mensaje ?></div>
    <?php endif; ?>

    <form method="POST">
        <div class="mb-3">
            <label>Nombre:</label>
            <input type="text" name="nombre" class="form-control" required>
        </div>
        <div class="mb-3">
            <label>Email:</label>
            <input type="email" name="email" class="form-control" required>
        </div>
        <div class="mb-3">
            <label>Edad:</label>
            <input type="number" name="edad" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Guardar Usuario</button>
        <a href="03_leer_usuarios.php" class="btn btn-secondary">Ver Lista</a>
    </form>
</body>
</html>
