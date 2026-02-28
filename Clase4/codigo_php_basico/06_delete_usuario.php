<?php
/**
 * ============================================
 * ARCHIVO 6: DELETE - Eliminar Usuario
 * Tiempo estimado: 4 minutos
 * ============================================
 * 
 * OBJETIVO:
 * Eliminar un usuario de la base de datos de forma segura
 */

require '01_conexion.php';

echo "<h2>🗑️ Eliminar Usuario</h2>";

// PASO 1: Definir qué usuario eliminar
$id_eliminar = 10; // Cambia esto según tu base de datos

echo "<p>Intentando eliminar usuario con ID: $id_eliminar</p>";

// PASO 2: BUENA PRÁCTICA - Verificar que existe antes de eliminar
echo "<h3>🔍 Verificación Previa:</h3>";

$sql = "SELECT * FROM usuarios WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id_eliminar]);
$usuario = $stmt->fetch();

if ($usuario) {
    // Usuario existe, mostrar sus datos
    echo "<div style='background: #fff3cd; padding: 15px; border-radius: 5px;'>";
    echo "<p>⚠️ Se eliminará el siguiente usuario:</p>";
    echo "<p><strong>ID:</strong> " . $usuario['id'] . "</p>";
    echo "<p><strong>Nombre:</strong> " . $usuario['nombre'] . "</p>";
    echo "<p><strong>Email:</strong> " . $usuario['email'] . "</p>";
    echo "</div>";
    
    // PASO 3: Proceder con la eliminación
    echo "<h3>🗑️ Eliminando...</h3>";
    
    $sql = "DELETE FROM usuarios WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    
    try {
        $stmt->execute(['id' => $id_eliminar]);
        
        // Verificar cuántas filas se eliminaron
        $filas_eliminadas = $stmt->rowCount();
        
        if ($filas_eliminadas > 0) {
            echo "<div style='background: #d4edda; padding: 15px; border-radius: 5px;'>";
            echo "<p>✅ Usuario eliminado exitosamente!</p>";
            echo "<p>Filas eliminadas: $filas_eliminadas</p>";
            echo "</div>";
        } else {
            echo "<p>⚠️ No se eliminó ningún registro</p>";
        }
        
    } catch(PDOException $e) {
        echo "<div style='background: #f8d7da; padding: 15px; border-radius: 5px;'>";
        echo "<p>❌ Error al eliminar: " . $e->getMessage() . "</p>";
        echo "</div>";
    }
    
} else {
    // Usuario no existe
    echo "<div style='background: #f8d7da; padding: 15px; border-radius: 5px;'>";
    echo "<p>❌ No existe ningún usuario con ID: $id_eliminar</p>";
    echo "<p>No hay nada que eliminar.</p>";
    echo "</div>";
}

/**
 * ⚠️ ADVERTENCIAS IMPORTANTES:
 * 
 * 1. NO HAY CTRL+Z:
 *    - Una vez eliminado, no se puede recuperar
 *    - SIEMPRE verifica antes de eliminar
 * 
 * 2. DELETE sin WHERE:
 *    - DELETE FROM usuarios; (SIN WHERE)
 *    - ❌ Esto eliminaría TODOS los usuarios
 *    - NUNCA olvides el WHERE
 * 
 * 3. Alternativa: Soft Delete
 *    - En lugar de eliminar, marcar como "inactivo"
 *    - Agregar columna: activo BOOLEAN
 *    - UPDATE usuarios SET activo = 0 WHERE id = X
 */

// PASO 4: Mostrar usuarios restantes
echo "<hr>";
echo "<h3>📋 Usuarios Restantes:</h3>";

$sql = "SELECT * FROM usuarios ORDER BY id ASC";
$stmt = $pdo->query($sql);
$usuarios = $stmt->fetchAll();

if (count($usuarios) > 0) {
    echo "<table border='1' cellpadding='10'>";
    echo "<tr><th>ID</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>";
    foreach($usuarios as $u) {
        echo "<tr>";
        echo "<td>" . $u['id'] . "</td>";
        echo "<td>" . $u['nombre'] . "</td>";
        echo "<td>" . $u['email'] . "</td>";
        echo "<td>" . $u['edad'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    echo "<p>Total de usuarios: " . count($usuarios) . "</p>";
} else {
    echo "<p>⚠️ No hay usuarios en la base de datos</p>";
}
?>
