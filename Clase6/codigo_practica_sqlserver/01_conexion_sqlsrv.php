<?php
/**
 * ============================================
 * CLASE 6: PHP + SQL SERVER
 * Archivo: 01_conexion_sqlsrv.php
 * ============================================
 * 
 * OBJETIVO:
 * Conectar PHP a SQL Server usando el driver 'sqlsrv'.
 * 
 * REQUISITOS PREVIOS:
 * 1. Tener SQL Server instalado y corriendo.
 * 2. Tener la base de datos 'curso_fullstack' creada.
 * 3. Tener habilitada la extensión 'pdo_sqlsrv' en php.ini.
 */

// CONFIGURACIÓN PARA WINDOWS (Nativo) vs DOCKER (Mac/Linux)
// Si existe la variable DB_HOST (Docker), la usamos. Si no, asumimos localhost (Windows/XAMPP).
$serverName = getenv("DB_HOST") ? getenv("DB_HOST") : "localhost"; 

$connectionInfo = [
    "Database" => "CursoFullStack", // Ajustado nombre de BD para coincidir con el script SQL
    "UID" => "sa",       
    "PWD" => "TuPasswordFuerte123!", 
    "CharacterSet" => "UTF-8"
];

try {
    // Intentar conectar con PDO (Recomendado)
    // DSN para SQL Server: "sqlsrv:Server=localhost;Database=nombre_db"
    // Importante: TrustServerCertificate=1 evita error SSL en local/docker
    
    $dsn = "sqlsrv:Server=$serverName;Database=" . $connectionInfo['Database'] . ";TrustServerCertificate=1";
    
    $pdo = new PDO($dsn, $connectionInfo['UID'], $connectionInfo['PWD']);
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // echo "✅ Conexión exitosa a SQL Server!"; // Comenta esto en producción

} catch(PDOException $e) {
    die("❌ Error de conexión: " . $e->getMessage());
}

/**
 * NOTA PARA MAC (Docker):
 * Si usas Docker, el $serverName suele ser "localhost,1433" (con coma y puerto).
 * $dsn = "sqlsrv:Server=localhost,1433;Database=curso_fullstack;TrustServerCertificate=1";
 */
?>
