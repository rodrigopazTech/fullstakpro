# Guía del Instructor - Clase 6
**Tema: Migración a SQL Server y Entornos Empresariales**

---

## 🎯 Objetivos de la Clase
1.  **Entender el "Por qué":** Diferencia entre MySQL (Web ligera) y SQL Server (Corporativo).
2.  **Configurar el Entorno:** Reto de instalación ("El Traductor/Driver").
3.  **Código PHP:** Migrar de `mysqli` a `PDO` (Conexión universal).
4.  **Práctica Real:** Formulario de Registro de Estudiantes.

---

## 📂 Mapa de Archivos (Tu Kit de Supervivencia)

### 1. Para el Profesor (TÚ)
- **`ESTRATEGIA_DOCENTE.md`**: **LÉELO ANTES DE LA CLASE.** Contiene la analogía del "Traductor" y cómo manejar a los alumnos de Windows vs Mac.
- **`GUION_CLASE_BD.md`**: Tu libreto paso a paso para usar Azure Data Studio/SSMS en vivo.

### 2. Para los Alumnos (MATERIAL)
- **`guia_instalacion_sqlserver.md`**: Guía maestra de instalación (Windows y Mac).
- **`guia_drivers_dll.md`**: Anexo técnico solo para usuarios Windows que quieran descargar DLLs manualmente.
- **`INSTRUCCIONES_DOCKER.md`**: Guía rápida para usuarios Mac/Linux (La "salida fácil").

### 3. Código del Proyecto (`codigo_practica_sqlserver/`)
- `00_setup_sqlserver.sql`: Script para crear la BD `CursoFullStack`.
- `01_select_estudiantes.php`: Script de prueba de conexión con comparativa MySQL vs SQL Server.
- `02_formulario_registro.php`: El ejercicio final (Insertar datos).

---

## ⏱️ Agenda Minuto a Minuto (Alineada a Estrategia)

| Tiempo | FASE | Actividad |
|---|---|---|
| 0-10 min | **Fase 1: Contexto** | Presentación (Usa el `prompt_presentacion_sqlserver.md`). Analogía: PHP (Inglés) vs SQL Server (Alemán). Necesitamos un Traductor. |
| 10-35 min | **Fase 2: Instalación** | **Windows:** Instalan XAMPP + Drivers (DLL). <br> **Mac:** Instalan Docker (muéstrales `INSTRUCCIONES_DOCKER.md`). |
| 35-45 min | **Fase 3: Base de Datos** | Abres Azure Data Studio. Sigues el `GUION_CLASE_BD.md` para crear la tabla `Estudiantes` en vivo. |
| 45-60 min | **Fase 4: Código PHP** | Crean `01_select...` para probar conexión. Luego `02_formulario...` para el reto final. |

---

## 🆘 Troubleshooting Rápido

- **Error SSL / Certificate Verify Failed:**
  - Solución: Agregar `TrustServerCertificate=1` en la conexión PDO (Ya está en los archivos de ejemplo).
  
- **"Login Timeout" en Docker:**
  - Solución: Usaron `localhost`. Deben usar el nombre del servicio (`sqlserver`) o la IP interna. El script `01_select...` ya detecta esto automáticamente.

- **XAMPP "Driver not found":**
  - Solución: Revisar `php.ini` y REINICIAR Apache. Es el error #1.

¡Éxito en la clase! 🚀
