# Reestructuración del Curso (Post-Clase 5)
**Estado Actual:**
- ✅ Clase 4: Intro SQL (MySQL)
- ✅ Clase 5: Select en PHP (MySQL) + Teoría Joins
- ⚠️ Atraso: Faltó práctica profunda de CRUD y Joins en código

**Objetivo:** Migrar a **SQL Server** y recuperar el ritmo práctico.

---

## 📅 Nueva Estructura (Clases 6 - 9)

### **Clase 6: "Hola SQL Server" (La Migración)**
**Objetivo:** Instalar el entorno profesional y lograr el primer registro (INSERT).
- **Teoría (10 min):**
  - ¿Qué es un Driver? (pdo_sqlsrv vs pdo_mysql).
  - Requisitos de conexión (Host, Info de conexión).
- **Setup (20 min):**
  - Guía de instalación de SQL Server + SSMS (Windows).
  - Guía de Docker/Azure Data Studio (Mac).
- **Práctica (20 min):**
  - Crear base de datos `curso_fullstack` en SQL Server.
  - **Reto:** Formulario de Registro (HTML) -> PHP -> SQL Server (INSERT).

### **Clase 7: "El Login y el Dashboard" (READ)**
**Objetivo:** Autenticación y visualización de datos.
- **Práctica:**
  - Crear Login simple (SELECT con WHERE).
  - Dashboard de administración (SELECT * en tabla HTML).
  - Introducir `sqlsrv_fetch_array` o `PDO::fetch`.

### **Clase 8: "Edición y Eliminación" (UPDATE/DELETE)**
**Objetivo:** Completar el CRUD.
- **Práctica:**
  - Botones de "Editar" y "Eliminar" en el dashboard.
  - Flujo: Click -> Cargar datos en form -> Guardar cambios.

### **Clase 9: "Relaciones en Acción" (JOINS)**
**Objetivo:** Implementar los Joins que vieron en teoría.
- **Práctica:**
  - Tabla `pedidos` en SQL Server.
  - Mostrar "Mis Pedidos" en el dashboard usando INNER JOIN.

---

## 🛠️ Materiales para Clase 6

1. **Guía de Instalación:**
   - Windows: SQL Server Express + SSMS.
   - Mac: Docker + Azure Data Studio (La única forma viable gratis y local).

2. **Presentación Teórica:**
   - Tema: "Conectando PHP a SQL Server".
   - Explicación de Drivers y extensiones `.dll`.

3. **Código Base:**
   - `01_conexion_sqlsrv.php`
   - `02_formulario_registro.php`
