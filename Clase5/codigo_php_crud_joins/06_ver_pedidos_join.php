<?php
/**
 * ============================================
 * CLASE 5: JOINS EN PHP
 * Archivo: 06_ver_pedidos_join.php
 * ============================================
 * 
 * OBJETIVO:
 * Mostrar el poder de SQL + PHP.
 * Vamos a mostrar una tabla que combine datos de 'usuarios' y 'pedidos'.
 * 
 * Antes de correr esto, asegúrate de haber ejecutado:
 * 02_setup_joins.sql (en la carpeta de SQL)
 */

require '01_conexion.php';

// Consulta con INNER JOIN para traer datos combinados
$sql = "SELECT 
            u.nombre as nombre_usuario, 
            u.email,
            p.producto, 
            p.monto,
            p.fecha
        FROM usuarios u
        INNER JOIN pedidos p ON u.id = p.usuario_id
        ORDER BY p.fecha DESC";

$stmt = $pdo->query($sql);
$filas = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reporte de Pedidos (JOIN)</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-5">
    <h1>🛒 Reporte de Compras (JOIN en Acción)</h1>
    <p>Esta tabla combina datos de <strong>Usuarios</strong> y <strong>Pedidos</strong> usando un <code>INNER JOIN</code>.</p>
    
    <div class="alert alert-warning">
        <strong>Nota:</strong> Solo aparecen usuarios que han hecho compras.
    </div>

    <table class="table table-striped">
        <thead class="table-dark">
            <tr>
                <th>Usuario</th>
                <th>Email</th>
                <th>Producto Comprado</th>
                <th>Monto</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($filas as $fila): ?>
            <tr>
                <!-- PHP imprime los datos combinados -->
                <td><?= htmlspecialchars($fila['nombre_usuario']) ?></td>
                <td><?= htmlspecialchars($fila['email']) ?></td>
                <td><strong><?= htmlspecialchars($fila['producto']) ?></strong></td>
                <td>$<?= number_format($fila['monto'], 2) ?></td>
                <td><?= $fila['fecha'] ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    
    <a href="03_leer_usuarios.php" class="btn btn-secondary mt-3">Volver al CRUD de Usuarios</a>
</body>
</html>
