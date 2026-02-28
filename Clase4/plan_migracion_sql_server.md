# Plan de Migración: MySQL → SQL Server
**Fecha:** 7 de Febrero 2026  
**Contexto:** Los alumnos solicitan usar SQL Server en lugar de MySQL

---

## 📊 Situación Actual

### ✅ Lo que ya lograron (Clase 4):
- XAMPP instalado (con MySQL)
- Conexión PHP con PDO
- CRUD básico en SQL (SELECT, INSERT, UPDATE, DELETE)
- Comprensión de phpMyAdmin

### 🎯 Lo que quieren:
- Usar **SQL Server** en lugar de MySQL
- Razones válidas:
  * Es parte del nombre del curso ("Full Stack con SQL Server")
  * Más usado en empresas/corporativos
  * Experiencia con herramientas Microsoft

---

## 🤔 Análisis: ¿Es Buena Idea?

### ✅ **VENTAJAS de SQL Server:**
1. **Alineado con el curso original** - El curso se llama "Full Stack con SQL Server"
2. **Más demandado en México** - Muchas empresas usan SQL Server
3. **Herramientas profesionales** - SQL Server Management Studio (SSMS)
4. **Mejor para portafolio** - Más atractivo para empleadores
5. **Aprendizaje completo** - Conocerán ambos (ya vieron MySQL)

### ⚠️ **DESVENTAJAS de SQL Server:**
1. **Instalación más compleja** - SQL Server Express + SSMS
2. **Solo Windows** - Los alumnos con Mac tendrán problemas
3. **Más pesado** - Requiere más recursos del sistema
4. **Curva de aprendizaje** - SSMS es más complejo que phpMyAdmin
5. **Conexión PHP diferente** - Necesitan extensión `sqlsrv` en lugar de PDO

---

## 💡 Recomendación

### **Opción A: Migración Gradual** ⭐ RECOMENDADA

**Estrategia:**
1. **Clase 4 (✅ Completada):** MySQL + phpMyAdmin (fundamentos)
2. **Clase 5:** SQL avanzado en MySQL (Joins, subconsultas)
3. **Clase 6:** Introducir SQL Server + SSMS
4. **Clase 7:** CRUD con PHP + SQL Server
5. **Clase 8:** Proyecto final con SQL Server

**Ventajas:**
- ✅ No pierden lo aprendido en Clase 4
- ✅ Aprenden ambas tecnologías (MySQL y SQL Server)
- ✅ Transición suave
- ✅ Más tiempo para instalar SQL Server correctamente

---

### **Opción B: Migración Inmediata** (Más arriesgada)

**Estrategia:**
1. Clase 5: Instalar SQL Server Express + SSMS
2. Repetir ejercicios de Clase 4 pero en SQL Server
3. Continuar con SQL avanzado

**Ventajas:**
- ✅ Más tiempo con SQL Server
- ✅ Alineado con nombre del curso

**Desventajas:**
- ❌ Pierdes 1 clase en instalación/configuración
- ❌ Alumnos con Mac tendrán problemas
- ❌ Riesgo de frustración por problemas técnicos

---

## 📅 Plan Detallado: Opción A (Recomendada)

### **Clase 5 (14 Febrero): SQL Avanzado en MySQL**
**Contenido:**
- Joins (INNER, LEFT, RIGHT)
- Subconsultas
- GROUP BY, HAVING
- Funciones agregadas

**Razón:** Aprenden SQL avanzado en entorno que ya conocen

---

### **Clase 6 (21 Febrero): Introducción a SQL Server**
**Contenido:**
- Instalar SQL Server Express (solo Windows)
- Instalar SSMS (SQL Server Management Studio)
- Alternativa para Mac: Azure Data Studio o Docker
- Migrar base de datos de MySQL a SQL Server
- Diferencias clave entre MySQL y SQL Server

**Duración:** 50 minutos
- 20 min: Instalación guiada
- 15 min: Tour de SSMS
- 15 min: Primeras queries en SQL Server

---

### **Clase 7 (28 Febrero): PHP + SQL Server**
**Contenido:**
- Instalar extensión `sqlsrv` para PHP
- Conectar PHP con SQL Server
- CRUD completo con SQL Server
- Diferencias con PDO/MySQL

**Código ejemplo:**
```php
<?php
$serverName = "localhost";
$connectionInfo = array("Database"=>"curso_fullstack");
$conn = sqlsrv_connect($serverName, $connectionInfo);

$sql = "SELECT * FROM usuarios";
$stmt = sqlsrv_query($conn, $sql);
?>
```

---

### **Clase 8 (7 Marzo): Proyecto con SQL Server**
**Contenido:**
- Procedimientos almacenados
- Triggers
- Transacciones
- Proyecto integrador

---

## 🛠️ Requisitos Técnicos

### **Para Windows:**
1. **SQL Server Express 2022** (Gratis)
   - Descarga: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
   - Tamaño: ~1.5 GB
   - Requisitos: Windows 10/11, 4GB RAM mínimo

2. **SQL Server Management Studio (SSMS)**
   - Descarga: https://aka.ms/ssmsfullsetup
   - Tamaño: ~600 MB

3. **Extensión PHP sqlsrv**
   - Drivers: https://docs.microsoft.com/en-us/sql/connect/php/download-drivers-php-sql-server

---

### **Para Mac:**
**Problema:** SQL Server NO corre nativamente en Mac

**Soluciones:**
1. **Azure Data Studio** (Recomendado)
   - Cliente multiplataforma
   - Descarga: https://aka.ms/azuredatastudio
   - Conecta a SQL Server remoto

2. **Docker + SQL Server**
   - Más complejo pero funcional
   - Requiere Docker Desktop

3. **Máquina Virtual con Windows**
   - Usar Parallels o VMware
   - Más pesado

4. **Seguir con MySQL**
   - Opción válida para alumnos con Mac

---

## 📊 Encuesta para Alumnos

**Antes de decidir, pregúntales:**

```
📢 ENCUESTA RÁPIDA:

1. ¿Qué sistema operativo usas?
   [ ] Windows
   [ ] Mac
   [ ] Linux

2. ¿Prefieres?
   [ ] Seguir con MySQL (más fácil, funciona en todo)
   [ ] Migrar a SQL Server (más profesional, solo Windows)
   [ ] Aprender ambos (MySQL ahora, SQL Server después)

3. ¿Cuánta RAM tiene tu computadora?
   [ ] Menos de 4GB
   [ ] 4-8GB
   [ ] Más de 8GB

Responde en el grupo de WhatsApp antes del lunes.
```

---

## 🎯 Decisión Recomendada

### **Si mayoría tiene Windows (>70%):**
→ **Opción A: Migración Gradual**
- Clase 5: SQL avanzado en MySQL
- Clase 6: Instalar SQL Server
- Clase 7-8: Trabajar con SQL Server

### **Si hay muchos Mac (>30%):**
→ **Opción Híbrida:**
- Enseñar SQL Server como "bonus"
- Mantener MySQL como principal
- Alumnos con Windows pueden usar SQL Server
- Alumnos con Mac siguen con MySQL
- El SQL es 95% igual en ambos

---

## 📝 Mensaje para los Alumnos

```
🎉 ¡Excelente clase de hoy!

Sobre su solicitud de SQL Server:

✅ Me parece genial que quieran usar SQL Server
✅ Es más profesional y está en el nombre del curso
✅ Vamos a hacerlo, pero de forma inteligente

📅 PLAN:
- Clase 5 (próximo sábado): SQL avanzado en MySQL
  (Joins, subconsultas - lo necesitan para cualquier BD)

- Clase 6: Instalamos SQL Server + SSMS
  (Solo Windows, Mac tiene alternativas)

- Clase 7-8: Trabajamos con SQL Server

🤔 NECESITO SABER:
1. ¿Tienes Windows o Mac?
2. ¿Cuánta RAM tiene tu PC?

Responde en el grupo antes del lunes para preparar todo.

💪 Ventaja: Van a conocer AMBOS (MySQL y SQL Server)
Eso los hace más valiosos para empresas.
```

---

## ✅ Próximos Pasos

1. **Hoy (Viernes):** Enviar encuesta al grupo
2. **Lunes:** Analizar resultados
3. **Martes:** Preparar materiales según decisión
4. **Miércoles:** Enviar instrucciones de instalación (si aplica)
5. **Sábado:** Clase 5 (SQL avanzado en MySQL o migración)

---

**¿Qué opción prefieres? Te ayudo a implementarla.** 🚀
