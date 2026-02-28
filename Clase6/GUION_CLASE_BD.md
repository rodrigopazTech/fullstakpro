# Guion de Clase: Creación de BD con SQL Server (Azure Data Studio)

Este guion está diseñado para que lo sigas paso a paso en tu pantalla compartida mientras explicas.

## 1. Conexión en Vivo (3 min)

**Acción:** Abre Azure Data Studio y muestra la ventana de conexión.
**Narrativa:**
> "Chicos, a diferencia de PHPMyAdmin donde entran directo, aquí necesitamos una herramienta cliente. Yo usaré Azure Data Studio, pero en SSMS es igual."

**Datos a ingresar:**
*   **Connection Type:** Microsoft SQL Server
*   **Server:** `localhost` (o tu IP si usas Docker remoto)
*   **Authentication:** SQL Login
*   **User:** `sa`
*   **Password:** `TuPasswordFuerte123!`
*   **Database:** `<default>`
*   **Trust Server Certificate:** True (Muy importante explicar esto: "Como es local, confiamos en el certificado aunque no sea oficial").

**Acción:** Dale a **Connect**. Si sale verde, celebra el primer éxito.

---

## 2. Creación de la Base de Datos (5 min)

**Acción:** Click derecho en la conexión -> **New Query**.
**Acción:** Pega el bloque 1 y 2 del script `00_setup_sqlserver.sql`.

```sql
CREATE DATABASE CursoFullStack;
GO
USE CursoFullStack;
GO
```

**Explicación Clave:**
> "Fíjense en ese `GO`. En MySQL usábamos punto y coma `;` para terminar. En SQL Server, el `;` es opcional, pero `GO` se usa para decirle al servidor: 'Hasta aquí procesa este lote de comandos antes de seguir'."

**Acción:** Selecciona el texto y dale **Run** (Play verde).
**Resultado esperado:** "Commands completed successfully".

---

## 3. Creación de la Tabla (La Diferencia Crítica) (7 min)

**Acción:** Pega el bloque 3 (Crear Tabla `Estudiantes`).

```sql
CREATE TABLE Estudiantes (
    ID INT IDENTITY(1,1) PRIMARY KEY, -- ¡Aquí detenerse!
    Nombre NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    FechaRegistro DATETIME DEFAULT GETDATE()
);
GO
```

**Narrativa (Pausa Dramática):**
> "¿Recuerdan `AUTO_INCREMENT` en MySQL? Aquí NO EXISTE. No lo busquen.
> En SQL Server se llama `IDENTITY(semilla, incremento)`.
> `IDENTITY(1,1)` significa: Empieza en 1, y suma de 1 en 1.
> Es lo mismo, solo cambia el nombre."

**Narrativa 2 (Tip Pro):**
> "Vean que uso `NVARCHAR` en vez de `VARCHAR`. La 'N' es de 'Nacional' (Unicode). Permite guardar tildes, ñ, emojis y caracteres chinos sin que salgan símbolos raros."

**Acción:** Ejecuta el bloque.

---

## 4. Inserción de Datos (3 min)

**Acción:** Pega y ejecuta los Inserts.
**Narrativa:**
> "El INSERT es estándar SQL. Aquí no cambia nada. Gracias al estándar, lo que aprendieron en MySQL les sirve aquí."

---

## 5. Verificación Visual (Cierre)

**Acción:**
1.  Ve al panel izquierdo (Connections).
2.  Refresca la carpeta **Databases**.
3.  Despliega `CursoFullStack` -> `Tables`.
4.  Muestra que ahí está `dbo.Estudiantes`.
5.  Haz click derecho en la tabla -> **Select Top 1000**.

**Narrativa:**
> "¡Listo! Ya tenemos dónde guardar los datos de nuestro formulario PHP. Ahora vamos al código."

---

## 6. Ejercicio de Código PHP (Comparativa)

**Preparación Docker (Solo Mac/Linux):**
Antes de empezar el código, asegúrate de que tus contenedores estén corriendo.
1.  **Terminal:** Abre la terminal en la carpeta `Clase6`.
2.  **Comando:** Ejecuta `docker-compose up -d`.
3.  **¿Dónde guardo los archivos PHP?**
    - ¡Aquí mismo! La carpeta `Clase6` **ES** tu `htdocs`.
    - Cualquier archivo que crees aquí (o subcarpetas), aparecerá automáticamente en el servidor.
    - Ejemplo: Si creas `hola.php` aquí -> Lo ves en `http://localhost:8080/hola.php`.

**Acción:** Abre el archivo `01_select_estudiantes.php` en VS Code y muéstralo.

**Narrativa (Paso a Paso):**

1.  **La Conexión (Dónde cambia):**
    > "Miren las líneas comentadas. Si usáramos MySQL, pondríamos `mysql:host=...`.
    > Como usamos SQL Server, solo cambiamos a `sqlsrv:Server=...`.
    > **¡Esa es la única línea que cambia en todo el archivo!** El resto es PHP estándar."

2.  **El Loop (Dónde NO cambia):**
    > "Bajen al `foreach`. ¿Ven algo raro? No. Es el mismo código que ya saben.
    > `$stmt->prepare()`, `$stmt->execute()`, `fetchAll()`. Todo es igual gracias a **PDO**."

3.  **Ejecución:**
    *   **Si usas Docker:** Abre la terminal y corre: `docker-compose up -d` (si no está corriendo). Entra a: `http://localhost:8080/01_select_estudiantes.php` (ajusta la ruta según donde guardaste el archivo en el volumen).
    *   **Si usas XAMPP:** Guarda el archivo en `htdocs` y ábrelo en `localhost/01_select_estudiantes.php`.

**Resultado esperado:**
Verás una lista HTML con:
- Ana García
- Carlos López
- Luis Rodríguez

**Tip de Cierre:**
> "Si lograron ver esto, felicidades. Ya son desarrolladores PHP capaces de conectarse a sistemas empresariales."
