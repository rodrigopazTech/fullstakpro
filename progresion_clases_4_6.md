# Progresión Clases 4-6: De SQL a PHP
**Estrategia Pedagógica: Separar SQL de PHP**

---

## 🎯 Filosofía de Enseñanza

**Problema común:** Enseñar SQL y PHP juntos confunde a los alumnos.

**Solución:** Separar en 3 etapas claras:
1. **Clase 4:** SQL puro (sin PHP)
2. **Clase 5:** SQL avanzado (sin PHP)
3. **Clase 6:** Conectar PHP con lo que ya saben de SQL

---

## 📅 Clase 4: Introducción a SQL (31 Enero)

### **Objetivo:**
Que los alumnos dominen SQL básico SIN tocar PHP.

### **Herramienta:**
phpMyAdmin (compartido o servicio online)

### **NO se enseña:**
- ❌ Instalación de XAMPP/WAMP
- ❌ Conexión PHP con base de datos
- ❌ PDO
- ❌ Código PHP

### **SÍ se enseña:**
- ✅ SELECT, INSERT, UPDATE, DELETE
- ✅ WHERE, ORDER BY, LIMIT
- ✅ Estructura de tablas
- ✅ Tipos de datos básicos

### **Setup:**
**Opción A (Recomendada):** phpMyAdmin compartido
- Creas BD en tu servidor
- Compartes URL + credenciales
- Alumnos empiezan en 30 segundos

**Opción B:** Servicio online gratuito
- db4free.net o RemoteMySQL
- Cada alumno crea su cuenta

**Opción C:** Local (solo si ya tienen XAMPP)
- No recomendado para Clase 4
- Pierdes 15-20 min en troubleshooting

### **Duración:** 50 minutos
- 30% Juego (quiz, breakout rooms)
- 26% Teoría (conceptos SQL)
- 44% Práctica (escribir queries)

---

## 📅 Clase 5: SQL Avanzado (7 Febrero)

### **Objetivo:**
Queries complejos con múltiples tablas.

### **Herramienta:**
Mismo phpMyAdmin de Clase 4

### **Temas:**
- ✅ INNER JOIN, LEFT JOIN, RIGHT JOIN
- ✅ Subconsultas (subqueries)
- ✅ GROUP BY, HAVING
- ✅ Funciones agregadas (COUNT, SUM, AVG)
- ✅ Alias y renombrado

### **Ejemplo práctico:**
```sql
-- Unir tablas de usuarios y pedidos
SELECT usuarios.nombre, COUNT(pedidos.id) as total_pedidos
FROM usuarios
LEFT JOIN pedidos ON usuarios.id = pedidos.usuario_id
GROUP BY usuarios.id
ORDER BY total_pedidos DESC;
```

### **Setup:**
- Mismo acceso que Clase 4
- Agregar tabla `pedidos` para practicar joins

---

## 📅 Clase 6: PHP + Base de Datos (14 Febrero)

### **Objetivo:**
Conectar PHP con lo que YA saben de SQL.

### **AQUÍ SÍ se enseña:**
- ✅ Instalación de XAMPP/WAMP (15 min)
- ✅ Conexión PDO (10 min)
- ✅ Ejecutar queries desde PHP (15 min)
- ✅ Prepared statements (10 min)

### **Estructura de 50 minutos:**

#### **Bloque 1: Instalación (15 min)**
- Descargar XAMPP
- Instalar paso a paso
- Verificar que funciona (localhost)
- Abrir phpMyAdmin local

#### **Bloque 2: Primera Conexión (10 min)**
```php
<?php
// conexion.php
$host = 'localhost';
$dbname = 'curso_fullstack';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Conexión exitosa!";
} catch(PDOException $e) {
    echo "❌ Error: " . $e->getMessage();
}
?>
```

#### **Bloque 3: Ejecutar SELECT (15 min)**
```php
<?php
require 'conexion.php';

// Esto YA lo saben de Clase 4
$sql = "SELECT * FROM usuarios";

// Esto es NUEVO (ejecutar desde PHP)
$stmt = $pdo->query($sql);
$usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($usuarios as $usuario) {
    echo $usuario['nombre'] . "<br>";
}
?>
```

**Explicar:** *"Miren, este SELECT es el MISMO que escribieron en Clase 4. Solo que ahora lo ejecutamos desde PHP."*

#### **Bloque 4: Prepared Statements (10 min)**
```php
<?php
// Esto YA lo saben (Clase 4)
// SELECT * FROM usuarios WHERE email = 'juan@example.com'

// Esto es NUEVO (prepared statement)
$sql = "SELECT * FROM usuarios WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->execute(['email' => 'juan@example.com']);
$usuario = $stmt->fetch(PDO::FETCH_ASSOC);

echo $usuario['nombre'];
?>
```

---

## 🔄 Ventajas de Esta Progresión

### **Clase 4 (SQL puro):**
✅ Se enfocan 100% en aprender SQL  
✅ No se confunden con sintaxis de PHP  
✅ Ven resultados inmediatos en phpMyAdmin  
✅ Cero problemas de instalación  

### **Clase 5 (SQL avanzado):**
✅ Dominan queries complejos  
✅ Entienden relaciones entre tablas  
✅ Llegan a Clase 6 con SQL sólido  

### **Clase 6 (PHP + SQL):**
✅ Ya saben SQL, solo aprenden PDO  
✅ Conectan conocimientos: "Ah, esto es lo mismo que hice en Clase 4"  
✅ Menos carga cognitiva  
✅ Más confianza  

---

## ❌ Por Qué NO Mezclar SQL y PHP en Clase 4

### **Problema 1: Sobrecarga Cognitiva**
```php
// Alumno ve esto en Clase 4:
$sql = "SELECT * FROM usuarios WHERE edad > 25";
$stmt = $pdo->query($sql);
```

**Confusión:**
- ¿Qué es `$sql`? (PHP)
- ¿Qué es `SELECT`? (SQL)
- ¿Qué es `$pdo`? (PHP)
- ¿Qué es `query()`? (PHP)

**Resultado:** Aprenden mal SQL y mal PHP.

### **Problema 2: Problemas de Instalación**
- 5 alumnos con Windows
- 3 con Mac
- 2 con Linux
- Pierdes 20 minutos resolviendo errores de XAMPP

### **Problema 3: No Dominan Ninguno**
- Saben un poco de SQL
- Saben un poco de PHP
- No dominan ninguno

---

## ✅ Solución: Separar en Etapas

### **Etapa 1 (Clase 4): SQL Maestro**
- 50 minutos de SQL puro
- phpMyAdmin compartido (cero instalación)
- Dominan SELECT, INSERT, UPDATE, DELETE

### **Etapa 2 (Clase 5): SQL Ninja**
- 50 minutos de SQL avanzado
- Joins, subconsultas, GROUP BY
- Queries complejos con confianza

### **Etapa 3 (Clase 6): PHP Connector**
- 15 min instalación XAMPP
- 35 min conectar PHP con SQL que YA saben
- "Esto es lo mismo que hiciste en Clase 4, pero desde PHP"

---

## 📊 Comparación de Enfoques

| Aspecto | Mezclar SQL+PHP (Clase 4) | Separar (Clases 4-6) |
|---------|---------------------------|----------------------|
| **Instalación** | 20 min perdidos | 0 min (Clase 4), 15 min (Clase 6) |
| **Confusión** | Alta (2 lenguajes) | Baja (1 lenguaje a la vez) |
| **Dominio SQL** | 50% | 100% |
| **Dominio PHP** | 50% | 100% |
| **Confianza** | Baja | Alta |
| **Errores** | Muchos (instalación + sintaxis) | Pocos |

---

## 🎯 Recomendación Final

### **Para Clase 4 (Mañana):**
1. ✅ **100% SQL** en phpMyAdmin compartido
2. ✅ **Cero PHP** (ni siquiera lo menciones)
3. ✅ **Cero instalación** (usa servidor compartido)
4. ✅ **Enfoque:** Que dominen SELECT, INSERT, UPDATE, DELETE

### **Para Clase 5:**
1. ✅ **100% SQL avanzado** (Joins, subconsultas)
2. ✅ **Mismo phpMyAdmin** de Clase 4
3. ✅ **Agregar tablas relacionadas** para practicar joins

### **Para Clase 6:**
1. ✅ **15 min:** Instalación XAMPP
2. ✅ **10 min:** Primera conexión PDO
3. ✅ **25 min:** Ejecutar queries que YA saben desde PHP
4. ✅ **Mensaje clave:** "Esto es lo mismo que hiciste en Clase 4"

---

## 💡 Mensaje para los Alumnos

**En Clase 4:**
> *"Hoy vamos a aprender SQL puro. NO vamos a usar PHP todavía. Primero dominen SQL, luego lo conectamos con PHP en 2 semanas."*

**En Clase 6:**
> *"¿Recuerdan el SELECT que escribieron en Clase 4? Hoy vamos a ejecutar ESE MISMO SELECT pero desde PHP. Es lo mismo, solo que ahora desde código."*

---

**Conclusión:** Separar SQL de PHP es pedagógicamente superior. Los alumnos aprenden mejor cuando se enfocan en una cosa a la vez.
