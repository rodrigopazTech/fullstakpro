<?php
/**
 * ============================================
 * ARCHIVO 1: Conexión Básica a Base de Datos
 * Tiempo estimado: 3 minutos
 * ============================================
 * 
 * OBJETIVO:
 * Conectar PHP con MySQL usando PDO (PHP Data Objects)
 * 
 * REQUISITOS:
 * - XAMPP instalado y corriendo
 * - MySQL iniciado
 * - Base de datos 'curso_fullstack' creada
 */

// PASO 1: Definir las credenciales de conexión
// Estos datos dependen de tu configuración de XAMPP
$host = 'localhost';        // Servidor (casi siempre es localhost)
$dbname = 'curso_fullstack'; // Nombre de la base de datos
$username = 'root';          // Usuario (por defecto en XAMPP es 'root')
$password = '';              // Contraseña (vacía por defecto en XAMPP)

// PASO 2: Intentar conectar usando try-catch
// try-catch nos permite manejar errores de forma elegante
try {
    // Crear la conexión PDO
    // DSN (Data Source Name) = "mysql:host=localhost;dbname=curso_fullstack"
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    // PASO 3: Configurar PDO para mostrar errores
    // Esto es MUY importante para debugging
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // PASO 4: Configurar el charset a UTF-8
    // Esto permite usar acentos y caracteres especiales
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    
    // Si llegamos aquí, la conexión fue exitosa
    echo "✅ Conexión exitosa a la base de datos!<br>";
    echo "📊 Base de datos: $dbname<br>";
    echo "🖥️ Servidor: $host<br>";
    
} catch(PDOException $e) {
    // Si hay un error, lo capturamos aquí
    echo "❌ Error de conexión: " . $e->getMessage() . "<br>";
    echo "💡 Verifica que MySQL esté corriendo en XAMPP<br>";
    
    // Detener la ejecución si no hay conexión
    die();
}

/**
 * NOTAS IMPORTANTES:
 * 
 * 1. PDO vs mysqli:
 *    - PDO funciona con MySQL, PostgreSQL, SQL Server, etc.
 *    - mysqli solo funciona con MySQL
 *    - PDO es más moderno y recomendado
 * 
 * 2. Seguridad:
 *    - NUNCA pongas credenciales reales en código público
 *    - En producción, usa variables de entorno
 * 
 * 3. Errores comunes:
 *    - "Connection refused" = MySQL no está corriendo
 *    - "Access denied" = Usuario/contraseña incorrectos
 *    - "Unknown database" = La base de datos no existe
 */

// PASO 5: Verificar que la conexión sigue activa
if ($pdo) {
    echo "🔗 Objeto PDO creado correctamente<br>";
    echo "👍 Listo para ejecutar queries SQL<br>";
}
?>
