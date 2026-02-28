# Estrategia Pedagógica: Enseñanza de PHP con SQL Server (Vs. MySQL)

**Contexto:**
Tus alumnos ya conocen el "Happy Path" de XAMPP (Apache + PHP + MySQL todo integrado).
SQL Server rompe ese esquema porque requiere instalación manual de drivers y un motor de base de datos externo a XAMPP.

**El "Dolor" del Alumno:**
Van a sentir que "es muy difícil instalarlo" comparado con "darle Next a XAMPP". Tu objetivo es venderles que esta complejidad es el **estándar en la industria empresarial** y que dominarla les sube el nivel profesional.

---

## 🏗️ Fase 1: La Analogía del "Traductor" (Concepto Clave)

Para que no se pierdan, usa esta analogía antes de tocar código:

1.  **PHP** es un jefe que habla inglés (el lenguaje).
2.  **MySQL** es un empleado que también habla inglés. Se entienden directo (nativamente en XAMPP).
3.  **SQL Server** es un experto que habla *Alemán*.
4.  **Problema:** PHP le habla a SQL Server y no se entienden.
5.  **Solución:** Necesitamos contratar un **Traductor (Driver)**.
    *   En Windows, el traductor es un archivo `.dll`.
    *   En Linux/Mac, es una librería del sistema.
    *   Sin ese archivo, PHP no sabe ni saludar a SQL Server.

---

## 🗺️ Fase 2: Estrategia de Instalación (Divide y Vencerás)

No trates de enseñar Docker a todos si son nivel básico. Divide la clase por Sistema Operativo.

### Grupo A: Usuarios de Windows (La mayoría, seguramente)
*   **Enfoque:** Seguir usando XAMPP.
*   **Reto:** Instalar los Drivers.
*   **Paso a paso simplificado:**
    1.  Bajamos las DLLs de Microsoft.
    2.  Las copiamos a la carpeta `xampp/php/ext` (la oficina del traductor).
    3.  Le decimos al jefe (archivo `php.ini`) que contrate al traductor (`extension=...`).
    4.  Reiniciamos Apache (para que el jefe lea el memo).

### Grupo B: Usuarios de Mac (Tú y la minoría)
*   **Enfoque:** Docker.
*   **Razón:** instalar drivers en Mac nativo es un infierno de dependencias para un alumno. Docker les da un "Windows virtual" listo.
*   **Venta:** "Chicos de Mac, usaremos la tecnología que usan en Google y Facebook para no configurar nada manual".

---

## 💻 Fase 3: El Código (PDO es tu mejor amigo)

Si tus alumnos usan `mysqli`, este es el momento de **prohibirlo** amablemente y migrar a **PDO**.

**¿Por qué?**
*   Con `mysqli`, tendrían que aprender funciones nuevas (`sqlsrv_connect`, `sqlsrv_query`). ¡Es doble trabajo!
*   Con **PDO**, el código es **95% IDÉNTICO**.

**Comparativa Visual (Muéstrales esto):**

**Código MySQL (Lo que ya saben):**
```php
// Conexión
$dsn = "mysql:host=localhost;dbname=tienda";
$pdo = new PDO($dsn, "root", "");
```

**Código SQL Server (Lo nuevo):**
```php
// Conexión
// Solo cambia el "DSN" (La dirección del servidor)
$dsn = "sqlsrv:Server=localhost,1433;Database=tienda";
$pdo = new PDO($dsn, "sa", "Password123!");
```

**EL RESTO ES IGUAL:**
```php
// ¡Esto NO cambia nada!
$stmt = $pdo->prepare("SELECT * FROM productos");
$stmt->execute();
$resultados = $stmt->fetchAll();
```
*Lección:* "Aprendan PDO una vez, y conéctense a cualquier base de datos (Oracle, Postgres, SQL Server) solo cambiando una línea".

---

## 🚀 Resumen del Flujo de la Clase

1.  **Intro (5 min):** Analogía del traductor.
2.  **Instalación Drivers (20 min):** Es la parte "fea". Hazla con paciencia. Muestra cómo ver `phpinfo()` para confirmar que el driver está cargado.
3.  **SQL Server Management Studio (10 min):** Crea la BD. Muestra que `AUTO_INCREMENT` ahora es `IDENTITY`.
4.  **Código PHP (25 min):**
    *   Crea `conexion.php`.
    *   Prueba solo la conexión.
    *   Haz un `SELECT` simple.
    *   Muestra que `foreach` funciona igual que siempre.

---

## 💡 Tips para el ambiente laboral (Bonus)
Menciona esto para engancharlos con su trabajo actual:
*   "En su empresa seguro usan **Procedimientos Almacenados**. Con PDO se llaman así: `$pdo->prepare('EXEC sp_Miprocedimiento')`".
*   "SQL Server es más estricto con las fechas (`YYYY-MM-DD`). Tengan cuidado al insertar".
