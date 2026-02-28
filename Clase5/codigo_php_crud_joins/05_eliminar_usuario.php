<?php
/**
 * ============================================
 * CLASE 5: MINI CRUD
 * Archivo: 05_eliminar_usuario.php
 * ============================================
 * 
 * OBJETIVO:
 * Eliminar el registro y redireccionar a la lista.
 * Es un archivo "invisible" (no tiene HTML), solo lógica.
 */

require '01_conexion.php';

$id = $_GET['id'] ?? null;

if ($id) {
    try {
        $sql = "DELETE FROM usuarios WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([':id' => $id]);
    } catch (PDOException $e) {
        die("Error al eliminar: " . $e->getMessage());
    }
}

// Redireccionar de vuelta a la lista
header("Location: 03_leer_usuarios.php");
exit;
?>
