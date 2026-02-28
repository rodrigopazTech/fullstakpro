<?php
/**
 * ============================================
 * CLASE 6: REGISTRO DE ESTUDIANTES
 * Archivo: 02_formulario_registro.php
 * ============================================
 * 
 * OBJETIVO:
 * Crear un formulario HTML que envíe datos a SQL Server.
 * Usamos la tabla 'Estudiantes' creada en 00_setup_sqlserver.sql
 */

require '01_conexion_sqlsrv.php';

$mensaje = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    // IMPORTANTE: Ya no pedimos edad porque la tabla Estudiantes no tiene esa columna.

    // Validación simple
    if (!empty($nombre) && !empty($email)) {
        try {
            // QUERY PARA SQL SERVER (Es igual que MySQL)
            // Usamos la tabla 'Estudiantes' y las columnas 'Nombre', 'Email'
            // ID es IDENTITY (automático), FechaRegistro es DEFAULT (automático)
            $sql = "INSERT INTO Estudiantes (Nombre, Email) VALUES (:nombre, :email)";
            
            $stmt = $pdo->prepare($sql);
            
            $stmt->execute([
                ':nombre' => $nombre,
                ':email' => $email
            ]);

            $mensaje = "✅ Estudiante registrado exitosamente en SQL Server!";
            
        } catch (PDOException $e) {
            // Capturar errores (ej: email duplicado)
            // SQL Server Error 2627 o 2601 es "Violation of UNIQUE KEY constraint"
            // También 23000 es común en PDO para contrainsts
            if ($e->getCode() == 23000 || strpos($e->getMessage(), '2627') !== false) {
                $mensaje = "❌ Error: Este email ya está registrado.";
            } else {
                $mensaje = "❌ Error en base de datos: " . $e->getMessage();
            }
        }
    } else {
        $mensaje = "⚠️ Por favor completa todos los campos.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registro Estudiantes SQL Server</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <style>
        body { background-color: #f0f2f5; }
        .card { max-width: 500px; margin: 50px auto; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        .header-logo { text-align: center; margin-bottom: 20px; }
        .sql-logo { width: 50px; }
    </style>
</head>
<body>
    <div class="card">
        <div class="header-logo">
            <!-- Logo de SQL Server (URL pública) -->
            <img src="https://upload.wikimedia.org/wikipedia/de/thumb/8/8c/Microsoft_SQL_Server_Logo.svg/1200px-Microsoft_SQL_Server_Logo.svg.png" 
                 alt="SQL Server Logo" class="sql-logo">
            <h3>Registro de Estudiantes</h3>
            <p class="text-muted">Conectado a SQL Server 2022</p>
        </div>

        <?php if ($mensaje): ?>
            <!-- Mostrar mensaje de éxito/error -->
            <div class="alert alert-info"><?= $mensaje ?></div>
        <?php endif; ?>

        <form method="POST">
            <div class="mb-3">
                <label class="form-label">Nombre del Estudiante</label>
                <input type="text" name="nombre" class="form-control" placeholder="Ej: Ana García" required>
            </div>
            
            <div class="mb-3">
                <label class="form-label">Correo Institucional</label>
                <input type="email" name="email" class="form-control" placeholder="ana@universidad.com" required>
            </div>
            
            <!-- Botón de envío -->
            <button type="submit" class="btn btn-primary w-100">Guardar en Base de Datos</button>
        </form>
    </div>
</body>
</html>
