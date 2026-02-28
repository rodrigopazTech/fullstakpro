<?php
/**
 * ============================================
 * CLASE 5: MINI CRUD
 * Archivo: 04_editar_usuario.php
 * ============================================
 * 
 * OBJETIVO:
 * 1. Obtener el ID de la URL.
 * 2. Cargar los datos actuales del usuario.
 * 3. Mostrar formulario pre-llenado.
 * 4. Guardar los cambios (UPDATE).
 */

require '01_conexion.php';

$id = $_GET['id'] ?? null;
$mensaje = "";

if (!$id) {
    die("❌ Error: No se especificó un ID.");
}

// 1. Cargar datos del usuario
$sql = "SELECT * FROM usuarios WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $id]);
$usuario = $stmt->fetch();

if (!$usuario) {
    die("❌ Usuario no encontrado.");
}

// 2. Procesar formulario de actualización
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $edad = $_POST['edad'];

    try {
        $sql = "UPDATE usuarios SET nombre = :nombre, email = :email, edad = :edad WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':nombre' => $nombre,
            ':email' => $email,
            ':edad' => $edad,
            ':id' => $id
        ]);
        $mensaje = "✅ Usuario actualizado correctamente.";
        
        // Recargar datos para mostrar los nuevos
        $usuario['nombre'] = $nombre;
        $usuario['email'] = $email;
        $usuario['edad'] = $edad;
        
    } catch(PDOException $e) {
        $mensaje = "❌ Error al actualizar: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Editar Usuario</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-5">
    <h1>Editar Usuario</h1>

    <?php if ($mensaje): ?>
        <div class="alert alert-info"><?= $mensaje ?></div>
    <?php endif; ?>

    <form method="POST">
        <input type="hidden" name="id" value="<?= $usuario['id'] ?>">
        
        <div class="mb-3">
            <label>Nombre:</label>
            <input type="text" name="nombre" class="form-control" 
                   value="<?= htmlspecialchars($usuario['nombre']) ?>" required>
        </div>
        <div class="mb-3">
            <label>Email:</label>
            <input type="email" name="email" class="form-control" 
                   value="<?= htmlspecialchars($usuario['email']) ?>" required>
        </div>
        <div class="mb-3">
            <label>Edad:</label>
            <input type="number" name="edad" class="form-control" 
                   value="<?= $usuario['edad'] ?>">
        </div>
        
        <button type="submit" class="btn btn-warning">Actualizar</button>
        <a href="03_leer_usuarios.php" class="btn btn-secondary">Cancelar</a>
    </form>
</body>
</html>
