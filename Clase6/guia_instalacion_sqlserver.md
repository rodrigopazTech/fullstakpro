# Guía de Instalación: SQL Server para el Curso
**Requisito indispensable para la Clase 6**

Esta guía está diseñada para que cualquier estudiante, incluso empezando de cero, pueda dejar su entorno listo para conectar PHP con SQL Server.

---

## 🖥️ Opción A: WINDOWS (XAMPP Nativo)
Sigue estos pasos en el orden exacto. **No saltes ninguno.**

### **Paso 0: Preparación**
- Asegúrate de tener **XAMPP** instalado.
- Ten a la mano la ubicación de tu carpeta de proyectos (ej: `C:\xampp\htdocs`).

### **Paso 1: Instalar el Motor (SQL Server Express)**
1. Descarga **SQL Server 2022 Express**: [Link de descarga](https://go.microsoft.com/fwlink/p/?linkid=2215158&clcid=0x409&culture=en-us&country=us)
2. Selecciona la instalación **"Básica"**.
3. **IMPORTANTE:** Al final de la instalación, anota el **Nombre de la instancia**. 
   - Casi siempre es `SQLEXPRESS`. Si es así, tu servidor será `localhost\SQLEXPRESS`.

### **Paso 2: Instalar la Herramienta de Gestión (SSMS)**
1. Descarga **SQL Server Management Studio (SSMS)**: [Link de descarga](https://aka.ms/ssmsfullsetup)
2. Instala y reinicia tu computadora.

### **Paso 3: Habilitar el Acceso (Mixed Mode)**
SQL Server viene "bloqueado" para aplicaciones externas por seguridad.
1. Abre **SSMS** y dale a "Connect" (usando Windows Authentication).
2. Click derecho en el nombre del servidor (arriba a la izq) -> **Properties**.
3. En la sección **Security**, selecciona: **"SQL Server and Windows Authentication mode"**.
4. Haz clic en OK.

### **Paso 4: El Usuario para PHP (Usuario 'sa')**
1. En SSMS, expande la carpeta **Security** -> **Logins**.
2. Click derecho en el usuario **sa** -> **Properties**.
3. En **General**: Ponle una contraseña fácil de recordar (ej: `TuPasswordFuerte123!`).
4. En **Status**: Cambia a **Enabled** (Habilitado) y asegúrate de que diga **Grant** (Conceder).
5. **CRÍTICO:** Haz click derecho de nuevo en el servidor (arriba) y dale a **Restart** (Reiniciar).

### **Paso 5: Abrir los Canales (TCP/IP)**
1. Busca en Windows: **SQL Server 2022 Configuration Manager**.
2. Ve a **SQL Server Network Configuration** -> **Protocols for SQLEXPRESS**.
3. Si **TCP/IP** dice "Disabled", dale click derecho y ponlo en **Enabled**.
4. Ve a **SQL Server Services** (en la misma app) y Reinicia el servicio de SQL Server.

### **Paso 6: Instalar los Drivers de PHP**
1. Mira tu versión de PHP en `http://localhost/dashboard/phpinfo.php`.
2. Descarga los drivers oficiales: [Microsoft PHP Drivers](https://github.com/microsoft/msphpsql/releases).
3. Busca los archivos `.dll` (ej: `php_pdo_sqlsrv_82_ts_x64.dll`) y pégalos en `C:\xampp\php\ext`.
4. En tu `php.ini` agrega: 
   ```ini
   extension=php_sqlsrv
   extension=php_pdo_sqlsrv
   ```
5. Reinicia Apache en el panel de XAMPP.

---

## 🍎 Opción B: MAC (Vía Docker)
Sigue estos pasos si estás en macOS:

### **Paso 1: Levantar el Entorno**
1. Abre Docker Desktop.
2. En tu terminal, entra a la carpeta `Clase6` y ejecuta:
   ```bash
   docker-compose up -d
   ```

### **Paso 2: Herramienta de Gestión**
1. Descarga e instala **Azure Data Studio**.
2. Conéctate a `localhost` con el usuario `sa` y la contraseña que configuraste.

---

## ✅ La PRUEBA DE ORO (Verificación Final)
Si hiciste todo bien, deberías poder marcar estas 4 casillas:

1. [ ] Puedo entrar a SSMS/Azure Data Studio con el usuario `sa`.
2. [ ] En `phpinfo()`, al buscar "sqlsrv", aparecen las tablas de la extensión.
3. [ ] El archivo `conexion.php` no me muestra errores al cargarlo.
4. [ ] Puedo ver la lista de estudiantes en el navegador.

**¡Felicidades! Tienes un entorno profesional configurado. 🚀**
