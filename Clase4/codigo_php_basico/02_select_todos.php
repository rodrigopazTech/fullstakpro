<?php
/**
 * ============================================
 * ARCHIVO 2: SELECT - Consultar Todos los Usuarios
 * Tiempo estimado: 5 minutos
 * ============================================
 * 
 * OBJETIVO:
 * Ejecutar un SELECT desde PHP y mostrar los resultados
 */

// PASO 1: Incluir el archivo de conexión
// require detiene el script si el archivo no existe
require '01_conexion.php';

echo "<h2>📋 Lista de Usuarios</h2>";

// PASO 2: Escribir la query SQL
// Es la MISMA query que escribiste en phpMyAdmin
$sql = "SELECT * FROM usuarios";

// PASO 3: Ejecutar la query
// query() se usa para queries SIN parámetros
$stmt = $pdo->query($sql);

// PASO 4: Obtener todos los resultados
// fetchAll() trae todos los registros como un array
$usuarios = $stmt->fetchAll();



/**
 * EXPLICACIÓN:
 * 
 * 1. $pdo->query($sql):
 *    - Ejecuta la query SQL
 *    - Devuelve un objeto PDOStatement
 * 
 * 2. $stmt->fetchAll():
 *    - Obtiene todos los resultados
 *    - Los devuelve como array de arrays asociativos
 * 
 * 3. foreach($usuarios as $usuario):
 *    - Recorre cada usuario
 *    - $usuario es un array: ['id' => 1, 'nombre' => 'Juan', ...]
 * 
 * 4. $usuario['nombre']:
 *    - Accede al valor de la columna 'nombre'
 */

// ALTERNATIVA: Mostrar en lista simple
echo "<hr>";
echo "<h3>Lista Simple:</h3>";
echo "<ul>";
foreach($usuarios as $usuario) {
    echo "<li>";
    echo "<strong>" . $usuario['nombre'] . "</strong> ";
    echo "(" . $usuario['email'] . ") - ";
    echo $usuario['edad'] . " años";
    echo "</li>";
}
echo "</ul>";
?>
