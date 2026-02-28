<?php
// ==========================================
// EJERCICIO 1: CONEXIÓN Y SELECT (COMPARATIVA)
// ==========================================

// --- PARTE A: LA CONEXIÓN (La única gran diferencia) ---

// SI USÁRAMOS MYSQL (XAMPP Clásico), el código se vería así:
/*
$dsn_mysql = "mysql:host=localhost;dbname=CursoFullStack";
$usuario_mysql = "root";
$password_mysql = "";
$pdo = new PDO($dsn_mysql, $usuario_mysql, $password_mysql);
*/

// PERO USAMOS SQL SERVER:
// Importamos la conexión desde el archivo centralizado
require '01_conexion_sqlsrv.php';

echo "<h1>✅ Conexión Exitosa con SQL Server</h1>";


// --- PARTE B: CONSULTAR DATOS (99% IDÉNTICO A MYSQL) ---

echo "<h2>Lista de Estudiantes (Desde SQL Server)</h2>";

try {
    // 1. Preparar la consulta
    // En MySQL: SELECT * FROM Estudiantes
    // En SQL Server: ES LO MISMO
    $sql = "SELECT * FROM Estudiantes";
    $stmt = $pdo->prepare($sql);

    // 2. Ejecutar
    $stmt->execute();

    // 3. Obtener resultados (Fetch)
    // PDO::FETCH_ASSOC te devuelve un array asociativo ['Nombre' => 'Juan']
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // --- PARTE C: MOSTRAR EN HTML (100% IDÉNTICO A MYSQL) ---
    
    echo "<ul>";
    foreach ($resultados as $estudiante) {
        // OJO: En SQL Server los nombres de columnas respetan mayúsculas/minúsculas
        // Si en BD es 'Nombre', usa $estudiante['Nombre'], no 'nombre'.
        echo "<li>";
        echo "<strong>" . $estudiante['Nombre'] . "</strong><br>";
        echo "<small>" . $estudiante['Email'] . "</small>";
        echo "</li>";
        echo "<hr>";
    }
    echo "</ul>";

} catch (PDOException $e) {
    echo "Error al consultar: " . $e->getMessage();
}
?>
