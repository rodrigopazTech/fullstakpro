<?php
/**
 * ============================================
 * CLASE 5: PHP + SQL
 * Archivo: 01_conexion.php
 * ============================================
 * 
 * Este archivo se encargará de conectar a la base de datos.
 * Lo incluiremos en todos los demás archivos.
 */

$host = 'localhost';
$dbname = 'curso_fullstack';
$username = 'root';
$password = ''; // En XAMPP por defecto es vacío

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    
    // Configurar para que lance excepciones en caso de error
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // echo "Conexión exitosa"; // Desconecta esta línea en producción

} catch(PDOException $e) {
    die("❌ Error de conexión: " . $e->getMessage());
}
?>
