<?php
/**
 * ============================================
 * ARCHIVO 7: Ejemplo Completo - Formulario + CRUD
 * Tiempo estimado: 10 minutos
 * ============================================
 * 
 * OBJETIVO:
 * Ejemplo práctico de un formulario HTML que inserta datos
 */

require '01_conexion.php';

// PASO 1: Verificar si se envió el formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // El formulario fue enviado
    
    // PASO 2: Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $edad = $_POST['edad'];
    
    // PASO 3: Validar que no estén vacíos
    if (!empty($nombre) && !empty($email) && !empty($edad)) {
        
        // PASO 4: Insertar en la base de datos
        $sql = "INSERT INTO usuarios (nombre, email, edad) VALUES (:nombre, :email, :edad)";
        $stmt = $pdo->prepare($sql);
        
        try {
            $stmt->execute([
                'nombre' => $nombre,
                'email' => $email,
                'edad' => $edad
            ]);
            
            $mensaje = "<div style='background: #d4edda; padding: 15px; border-radius: 5px; margin: 10px 0;'>";
            $mensaje .= "✅ Usuario agregado exitosamente!";
            $mensaje .= "</div>";
            
        } catch(PDOException $e) {
            $mensaje = "<div style='background: #f8d7da; padding: 15px; border-radius: 5px; margin: 10px 0;'>";
            $mensaje .= "❌ Error: " . $e->getMessage();
            $mensaje .= "</div>";
        }
    } else {
        $mensaje = "<div style='background: #fff3cd; padding: 15px; border-radius: 5px; margin: 10px 0;'>";
        $mensaje .= "⚠️ Por favor completa todos los campos";
        $mensaje .= "</div>";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        .form-container {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }
        button {
            background: #007bff;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background: #0056b3;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background: #007bff;
            color: white;
        }
    </style>
</head>
<body>
    <h1>📝 Registro de Usuarios</h1>
    
    <!-- Mostrar mensaje si existe -->
    <?php if (isset($mensaje)) echo $mensaje; ?>
    
    <!-- Formulario HTML -->
    <div class="form-container">
        <h2>Agregar Nuevo Usuario</h2>
        <form method="POST" action="">
            <div class="form-group">
                <label for="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="edad">Edad:</label>
                <input type="number" id="edad" name="edad" min="1" max="120" required>
            </div>
            
            <button type="submit">➕ Agregar Usuario</button>
        </form>
    </div>
    
    <!-- Mostrar lista de usuarios -->
    <h2>📋 Usuarios Registrados</h2>
    <?php
    $sql = "SELECT * FROM usuarios ORDER BY id DESC";
    $stmt = $pdo->query($sql);
    $usuarios = $stmt->fetchAll();
    
    if (count($usuarios) > 0) {
        echo "<table>";
        echo "<tr><th>ID</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>";
        foreach($usuarios as $usuario) {
            echo "<tr>";
            echo "<td>" . $usuario['id'] . "</td>";
            echo "<td>" . $usuario['nombre'] . "</td>";
            echo "<td>" . $usuario['email'] . "</td>";
            echo "<td>" . $usuario['edad'] . " años</td>";
            echo "</tr>";
        }
        echo "</table>";
        echo "<p><strong>Total:</strong> " . count($usuarios) . " usuarios</p>";
    } else {
        echo "<p>No hay usuarios registrados aún.</p>";
    }
    ?>
</body>
</html>

<?php
/**
 * EXPLICACIÓN DEL FLUJO:
 * 
 * 1. Usuario abre la página → Ve el formulario
 * 2. Usuario llena el formulario → Click en "Agregar"
 * 3. Formulario se envía (POST) → PHP recibe los datos
 * 4. PHP valida los datos → Inserta en la base de datos
 * 5. Página se recarga → Muestra mensaje de éxito
 * 6. Lista se actualiza → Muestra el nuevo usuario
 * 
 * CONCEPTOS IMPORTANTES:
 * 
 * - $_SERVER['REQUEST_METHOD']: Detecta si es GET o POST
 * - $_POST['nombre']: Obtiene el valor del campo 'nombre'
 * - method="POST": Envía datos de forma segura
 * - action="": Envía al mismo archivo
 * - required: Validación HTML5 (obligatorio)
 */
?>
