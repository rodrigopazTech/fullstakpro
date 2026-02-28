<?php
//$serverName = getenv("DB_HOST") ? getenv("DB_HOST") : "localhost"; 
$serverName = "localhost"; 
$connectionInfo = [
    "Database" => "CursoFullStack",
    "UID" => "sa",
    "PWD" => "TuPasswordFuerte123!",
    "CharacterSet" => "UTF-8"
];

try{
    $dsn  = "sqlsrv:Server=$serverName;Database=".$connectionInfo['Database'].";TrustServerCertificate=1";
    $pdo = new PDO($dsn, $connectionInfo['UID'], $connectionInfo['PWD']);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die("Error de Conexión: ".$e->getMessage());
}
?>