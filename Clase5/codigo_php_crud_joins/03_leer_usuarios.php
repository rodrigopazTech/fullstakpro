<?php
/**
 * ============================================
 * CLASE 5: MINI CRUD
 * Archivo: 03_leer_usuarios.php
 * ============================================
 * 
 * OBJETIVO:
 * Leer todos los datos y mostrarlos en una tabla HTML.
 * Incluiremos botones para Editar y Eliminar para completar la experiencia.
 */

require '01_conexion.php';

// Consulta para traer todos los usuarios
$sql = "SELECT * FROM usuarios ORDER BY id DESC";
$stmt = $pdo->query($sql);
$usuarios = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Lista de Usuarios</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-5">
    <h1>Lista de Usuarios</h1>
    <a href="02_crear_usuario.php" class="btn btn-success mb-3">Agregar Nuevo</a>
    
    <table class="table table-bordered table-hover">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Edad</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($usuarios as $usuario): ?>
            <tr>
                <td><?= $usuario['id'] ?></td>
                <td><?= htmlspecialchars($usuario['nombre']) ?></td>
                <td><?= htmlspecialchars($usuario['email']) ?></td>
                <td><?= $usuario['edad'] ?></td>
                <td>
                    <!-- Botón Editar (pasa el ID por URL) -->
                    <a href="04_editar_usuario.php?id=<?= $usuario['id'] ?>" class="btn btn-warning btn-sm">Editar</a>
                    
                    <!-- Botón Eliminar (pasa el ID por URL + confirmación JS) -->
                    <a href="05_eliminar_usuario.php?id=<?= $usuario['id'] ?>" 
                       class="btn btn-danger btn-sm"
                       onclick="return confirm('¿Seguro quieres eliminar a este usuario?')">Eliminar</a>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
