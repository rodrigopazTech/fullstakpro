# Prompt para Generar Presentación: PHP + SQL
**Para IA de Presentaciones - Conexión Básica**

---

## 📊 PROMPT COMPLETO:

```
Crea una presentación visual y práctica de 8 slides sobre "Conectar PHP con SQL" para estudiantes que YA conocen SQL básico pero NUNCA han usado PHP con bases de datos. Debe ser simple, clara y con código real paso a paso.

ESTRUCTURA DE SLIDES:

Slide 1 - PORTADA:
- Título: "PHP + SQL: Tu Primera Conexión"
- Subtítulo: "De phpMyAdmin a código PHP en 3 pasos"
- Incluir íconos de PHP y MySQL conectados
- Diseño moderno y motivador

Slide 2 - RECORDATORIO: LO QUE YA SABES:
- Título: "Lo que ya dominas en SQL"
- Mostrar queries que ya conocen:
  ```sql
  SELECT * FROM usuarios;
  INSERT INTO usuarios (nombre, email) VALUES (...);
  UPDATE usuarios SET edad = 26 WHERE id = 1;
  DELETE FROM usuarios WHERE id = 5;
  ```
- Mensaje clave: "Estas queries son EXACTAMENTE las mismas en PHP"
- Ícono de checkmark verde

Slide 3 - EL PUENTE: PDO:
- Título: "PDO: El Puente entre PHP y SQL"
- Diagrama visual simple:
  [PHP] ←→ [PDO] ←→ [MySQL]
- Definición: "PDO = PHP Data Objects"
- Ventajas en bullets:
  * Funciona con MySQL, PostgreSQL, SQL Server
  * Más seguro (previene SQL Injection)
  * Moderno y recomendado
- Analogía: "PDO es como un traductor entre PHP y la base de datos"

Slide 4 - PASO 1: CONECTAR:
- Título: "Paso 1: Crear la Conexión"
- Código PHP con syntax highlighting:
  ```php
  <?php
  $host = 'localhost';
  $dbname = 'curso_fullstack';
  $username = 'root';
  $password = '';

  $pdo = new PDO("mysql:host=$host;dbname=$dbname", 
                  $username, $password);
  
  echo "✅ Conectado!";
  ?>
  ```
- Explicación visual con flechas:
  * $host → Dónde está la BD
  * $dbname → Qué base de datos
  * $username/$password → Credenciales
- Ícono de conexión/enlace

Slide 5 - PASO 2: EJECUTAR SELECT:
- Título: "Paso 2: Ejecutar tu Primera Query"
- Comparación lado a lado:
  
  EN PHPMYADMIN (lo que ya conoces):
  ```sql
  SELECT * FROM usuarios;
  ```
  
  EN PHP (lo nuevo):
  ```php
  <?php
  $sql = "SELECT * FROM usuarios";
  $stmt = $pdo->query($sql);
  $usuarios = $stmt->fetchAll();
  
  foreach($usuarios as $usuario) {
      echo $usuario['nombre'];
  }
  ?>
  ```
- Destacar: "La query SQL es IDÉNTICA"
- Flecha grande: phpMyAdmin → PHP

Slide 6 - PASO 3: MOSTRAR RESULTADOS:
- Título: "Paso 3: Mostrar los Datos en HTML"
- Código completo funcional:
  ```php
  <?php
  $sql = "SELECT * FROM usuarios";
  $stmt = $pdo->query($sql);
  $usuarios = $stmt->fetchAll();
  ?>
  
  <table>
  <?php foreach($usuarios as $usuario): ?>
    <tr>
      <td><?= $usuario['nombre'] ?></td>
      <td><?= $usuario['email'] ?></td>
    </tr>
  <?php endforeach; ?>
  </table>
  ```
- Mostrar resultado visual: tabla HTML con datos
- Ícono de tabla/grid

Slide 7 - SEGURIDAD: PREPARED STATEMENTS:
- Título: "⚠️ Seguridad: Prepared Statements"
- Comparación visual:
  
  ❌ INSEGURO (NO HACER):
  ```php
  $sql = "SELECT * FROM usuarios WHERE id = $id";
  $stmt = $pdo->query($sql);
  ```
  Problema: SQL Injection
  
  ✅ SEGURO (SIEMPRE HACER):
  ```php
  $sql = "SELECT * FROM usuarios WHERE id = :id";
  $stmt = $pdo->prepare($sql);
  $stmt->execute(['id' => $id]);
  ```
- Mensaje destacado en rojo: "NUNCA concatenes variables en SQL"
- Ícono de escudo/seguridad

Slide 8 - RESUMEN: DE SQL A PHP:
- Título: "¡Felicidades! Ya conectaste PHP con SQL 🎉"
- Tabla comparativa visual:
  
  | Antes (phpMyAdmin) | Ahora (PHP) |
  |-------------------|-------------|
  | SELECT * FROM usuarios | $pdo->query("SELECT...") |
  | INSERT INTO... | $stmt->execute([...]) |
  | UPDATE... | $stmt->execute([...]) |
  | DELETE... | $stmt->execute([...]) |

- 3 pasos recordatorio:
  1. 🔗 Conectar con PDO
  2. 📝 Escribir la query SQL (igual que antes)
  3. ▶️ Ejecutar y mostrar resultados

- Próximo paso: "Clase 6: CRUD completo con formularios"
- Call to action: "Practica con los archivos PHP que te compartí"

ESPECIFICACIONES DE DISEÑO:
- Paleta: Azul (#007bff) + Morado (#6f42c1) para PHP
- Código: Fondo oscuro (#2d2d2d) con syntax highlighting
- Comparaciones: Usar layout de 2 columnas
- Flechas grandes para mostrar flujo/transformación
- Íconos: Modernos (conexión, seguridad, código)
- Destacar diferencias entre ANTES/DESPUÉS
- Usar checkmarks (✅) y X rojas (❌)
- Máximo 4-5 elementos por slide
- Código legible (tamaño grande)

ESTILO:
- Enfoque: "Es lo mismo que ya sabes, solo en PHP"
- Reducir miedo: "No es complicado, es el mismo SQL"
- Ejemplos prácticos y ejecutables
- Comparaciones visuales constantes
- Mensajes de seguridad destacados
```

---

## 📝 VERSIÓN CORTA:

```
Crea presentación de 8 slides "PHP + SQL: Primera Conexión" para principiantes:

1. Portada: Título + íconos PHP-MySQL
2. Recordatorio: Queries SQL que ya conocen
3. PDO: Diagrama PHP ←→ PDO ←→ MySQL, definición
4. Paso 1 Conectar: Código conexión PDO con explicación
5. Paso 2 SELECT: Comparación phpMyAdmin vs PHP lado a lado
6. Paso 3 Mostrar: Código completo con tabla HTML
7. Seguridad: Prepared statements, comparación seguro/inseguro
8. Resumen: Tabla comparativa + 3 pasos + próximo tema

Diseño: Azul #007bff + morado #6f42c1, código fondo oscuro, comparaciones en 2 columnas, flechas grandes, destacar ANTES/DESPUÉS, íconos modernos.

Mensaje clave: "Es el mismo SQL que ya sabes, solo ejecutado desde PHP"
```

---

## 🎯 OBJETIVO DE LA PRESENTACIÓN:

**Que los alumnos entiendan:**
1. ✅ PDO es el puente entre PHP y SQL
2. ✅ Las queries SQL son IDÉNTICAS
3. ✅ Solo cambia CÓMO las ejecutas
4. ✅ Siempre usar prepared statements por seguridad

**Mensaje final:**
> "Si ya sabes SQL, ya sabes el 80%. Solo falta aprender a ejecutarlo desde PHP."

---

## 📁 ARCHIVO GUARDADO EN:
`/Users/rodrigopaz/Documents/Courses/FullStack/LandingPage/Clase4/prompt_presentacion_php_sql.md`

---

**Copia el PROMPT COMPLETO y pégalo en Gamma.app o tu herramienta preferida.**
