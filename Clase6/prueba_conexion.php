<?php
// Datos de conexión
// Nota: Si usas Docker, "localhost" o "127.0.0.1" suele funcionar si expones el puerto.
// Si fallara, a veces se requiere la IP de la máquina host, pero probemos local primero.
$serverName = getenv("DB_HOST") ? getenv("DB_HOST") : "127.0.0.1, 1433"; 

$connectionOptions = array(
    "Database" => "master", // Probamos conectando a la base de datos del sistema 'master'
    "Uid" => "sa",
    "PWD" => "TuPasswordFuerte123!", // La contraseña que pusiste en el comando docker run
    "TrustServerCertificate" => true // Obligatorio para conexiones locales sin cert oficial
);

echo "Intentando conectar a SQL Server...\n";

// Verificar si la función existe (para saber si tenemos los drivers)
if (!function_exists('sqlsrv_connect')) {
    die("Error: Las extensiones de SQL Server (sqlsrv) no están instaladas o habilitadas en este PHP.\n");
}

// Intentar conectar
$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn) {
    echo "¡ÉXITO! Conexión Establecida con SQL Server.\n";
    
    // Opcional: Consultar versión para confirmar
    $tsql = "SELECT @@VERSION as SQL_VERSION";
    $stmt = sqlsrv_query($conn, $tsql);
    if ($stmt) {
        $row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
        echo "Versión del Servidor: " . $row['SQL_VERSION'] . "\n";
    }
} else {
    echo "Falla en la conexión.\n";
    echo "Errores:\n";
    print_r(sqlsrv_errors());
}
?>
