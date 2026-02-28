<?php
/**
 * ============================================
 * ARCHIVO 5: UPDATE - Actualizar Usuario
 * Tiempo estimado: 4 minutos
 * ============================================
 * 
 * OBJETIVO:
 * Modificar datos de un usuario existente
 */

require '01_conexion.php';

echo "<h2>✏️ Actualizar Usuario</h2>";

// PASO 1: Definir qué usuario actualizar y con qué datos
$id_actualizar = 1;
$nuevo_nombre = "Juan Pérez Actualizado";
$nueva_edad = 26;

echo "<p>Actualizando usuario con ID: $id_actualizar</p>";

// PASO 2: Primero, mostrar los datos ANTES de actualizar
echo "<h3>📋 Datos Antes:</h3>";
$sql = "SELECT * FROM usuarios WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id_actualizar]);
$usuario_antes = $stmt->fetch();

if ($usuario_antes) {
    echo "<p><strong>Nombre:</strong> " . $usuario_antes['nombre'] . "</p>";
    echo "<p><strong>Edad:</strong> " . $usuario_antes['edad'] . "</p>";
} else {
    echo "<p>❌ Usuario no encontrado</p>";
    die();
}

// PASO 3: Escribir la query UPDATE
$sql = "UPDATE usuarios SET nombre = :nombre, edad = :edad WHERE id = :id";

// PASO 4: Preparar y ejecutar
$stmt = $pdo->prepare($sql);

try {
    $stmt->execute([
        'nombre' => $nuevo_nombre,
        'edad' => $nueva_edad,
        'id' => $id_actualizar
    ]);
    
    // Verificar cuántas filas se actualizaron
    $filas_afectadas = $stmt->rowCount();
    
    echo "<div style='background: #d4edda; padding: 15px; border-radius: 5px;'>";
    echo "<p>✅ Usuario actualizado exitosamente!</p>";
    echo "<p>Filas afectadas: $filas_afectadas</p>";
    echo "</div>";
    
} catch(PDOException $e) {
    echo "<div style='background: #f8d7da; padding: 15px; border-radius: 5px;'>";
    echo "<p>❌ Error al actualizar: " . $e->getMessage() . "</p>";
    echo "</div>";
}

// PASO 5: Mostrar los datos DESPUÉS de actualizar
echo "<h3>📋 Datos Después:</h3>";
$sql = "SELECT * FROM usuarios WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id_actualizar]);
$usuario_despues = $stmt->fetch();

if ($usuario_despues) {
    echo "<p><strong>Nombre:</strong> " . $usuario_despues['nombre'] . "</p>";
    echo "<p><strong>Edad:</strong> " . $usuario_despues['edad'] . "</p>";
}

/**
 * EXPLICACIÓN:
 * 
 * 1. rowCount():
 *    - Devuelve cuántas filas fueron afectadas
 *    - Si es 0, significa que no se actualizó nada
 *    - (Puede ser porque el ID no existe o los datos son iguales)
 * 
 * 2. WHERE en UPDATE:
 *    - MUY IMPORTANTE: Siempre usar WHERE
 *    - Sin WHERE, actualizarías TODOS los usuarios
 * 
 * 3. Múltiples campos:
 *    - Puedes actualizar varios campos a la vez
 *    - Sepáralos con comas: SET campo1 = :val1, campo2 = :val2
 */

// EJEMPLO 2: Actualizar solo un campo
echo "<hr>";
echo "<h3>✏️ Actualizar Solo la Edad:</h3>";

$id = 2;
$nueva_edad = 31;

$sql = "UPDATE usuarios SET edad = :edad WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['edad' => $nueva_edad, 'id' => $id]);

echo "<p>✅ Edad actualizada para usuario ID: $id</p>";
?>
