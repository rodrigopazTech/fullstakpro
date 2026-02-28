# Índice de Archivos PHP Básicos
**Conexión PHP + MySQL con PDO**

---

## 📋 Orden de Archivos

### **1. Conexión Básica** (3 min)
📄 `01_conexion.php`
- Conectar PHP con MySQL usando PDO
- Configurar manejo de errores
- Verificar conexión exitosa

**Cómo ejecutar:**
```
http://localhost/Clase4/codigo_php_basico/01_conexion.php
```

---

### **2. SELECT - Todos los Usuarios** (5 min)
📄 `02_select_todos.php`
- Ejecutar SELECT desde PHP
- Usar fetchAll() para obtener resultados
- Mostrar datos en tabla HTML

**Cómo ejecutar:**
```
http://localhost/Clase4/codigo_php_basico/02_select_todos.php
```

---

### **3. SELECT con WHERE** (5 min)
📄 `03_select_where.php`
- Usar prepared statements
- Buscar usuario por ID
- Prevenir SQL Injection

**Cómo ejecutar:**
```
http://localhost/Clase4/codigo_php_basico/03_select_where.php
```

---

### **4. INSERT - Agregar Usuario** (5 min)
📄 `04_insert_usuario.php`
- Insertar nuevo registro
- Usar lastInsertId()
- Manejar errores (email duplicado)

**Cómo ejecutar:**
```
http://localhost/Clase4/codigo_php_basico/04_insert_usuario.php
```

---

### **5. UPDATE - Actualizar Usuario** (4 min)
📄 `05_update_usuario.php`
- Modificar datos existentes
- Mostrar antes/después
- Usar rowCount()

**Cómo ejecutar:**
```
http://localhost/Clase4/codigo_php_basico/05_update_usuario.php
```

---

### **6. DELETE - Eliminar Usuario** (4 min)
📄 `06_delete_usuario.php`
- Eliminar con verificación previa
- Advertencias de seguridad
- Mostrar usuarios restantes

**Cómo ejecutar:**
```
http://localhost/Clase4/codigo_php_basico/06_delete_usuario.php
```

---

### **7. Formulario Completo** (10 min)
📄 `07_formulario_completo.php`
- Formulario HTML + PHP
- Insertar desde formulario
- Validación de datos
- Listado dinámico

**Cómo ejecutar:**
```
http://localhost/Clase4/codigo_php_basico/07_formulario_completo.php
```

---

## 🚀 Cómo Usar Estos Archivos

### **Requisitos:**
1. ✅ XAMPP instalado y corriendo
2. ✅ MySQL iniciado
3. ✅ Base de datos `curso_fullstack` creada
4. ✅ Tabla `usuarios` con datos

### **Ubicación de los Archivos:**
Copia la carpeta `codigo_php_basico` a:
```
C:\xampp\htdocs\Clase4\codigo_php_basico\  (Windows)
/Applications/XAMPP/htdocs/Clase4/codigo_php_basico/  (Mac)
```

### **Acceder desde el Navegador:**
```
http://localhost/Clase4/codigo_php_basico/01_conexion.php
http://localhost/Clase4/codigo_php_basico/02_select_todos.php
...etc
```

---

## 💡 Conceptos Clave

### **PDO (PHP Data Objects)**
- Conexión moderna a bases de datos
- Funciona con MySQL, PostgreSQL, SQL Server, etc.
- Más seguro que mysqli

### **Prepared Statements**
- Previenen SQL Injection
- Usan placeholders (:nombre, :email)
- PDO escapa automáticamente los valores

### **Métodos Importantes**
- `query()` → Para queries sin parámetros
- `prepare()` → Para queries con parámetros
- `execute()` → Ejecuta el prepared statement
- `fetch()` → Obtiene UN resultado
- `fetchAll()` → Obtiene TODOS los resultados
- `lastInsertId()` → ID del último INSERT
- `rowCount()` → Filas afectadas

---

## ⚠️ Errores Comunes

### **Error: "Connection refused"**
**Causa:** MySQL no está corriendo  
**Solución:** Inicia MySQL en XAMPP Control Panel

### **Error: "Access denied for user 'root'"**
**Causa:** Contraseña incorrecta  
**Solución:** Verifica las credenciales en `01_conexion.php`

### **Error: "Unknown database 'curso_fullstack'"**
**Causa:** La base de datos no existe  
**Solución:** Crea la base de datos en phpMyAdmin

### **Error: "Duplicate entry for key 'email'"**
**Causa:** El email ya existe  
**Solución:** Usa otro email o elimina el duplicado

---

## 📊 Comparación SQL vs PHP

| SQL (phpMyAdmin) | PHP (con PDO) |
|------------------|---------------|
| `SELECT * FROM usuarios` | `$pdo->query("SELECT * FROM usuarios")` |
| `INSERT INTO usuarios ...` | `$stmt->execute([...])` |
| `UPDATE usuarios SET ...` | `$stmt->execute([...])` |
| `DELETE FROM usuarios ...` | `$stmt->execute([...])` |

**La query SQL es la MISMA**, solo cambia cómo la ejecutas.

---

## 🎯 Ejercicio Práctico

**Crea tu propio archivo:**
`08_mi_practica.php`

**Tareas:**
1. Conectar a la base de datos
2. Crear un formulario para buscar usuarios por edad
3. Mostrar solo usuarios mayores a X años
4. Usar prepared statements

---

## 📁 Estructura de Carpetas

```
Clase4/
├── Clase4_SQL_Fundamentos.md
├── guia_instalacion_xampp_mac.md
├── codigo_practica/ (SQL puro)
│   ├── 01_setup_inicial.sql
│   ├── 02_select_basico.sql
│   └── ...
└── codigo_php_basico/ (PHP + MySQL)
    ├── README.md (Este archivo)
    ├── 01_conexion.php
    ├── 02_select_todos.php
    ├── 03_select_where.php
    ├── 04_insert_usuario.php
    ├── 05_update_usuario.php
    ├── 06_delete_usuario.php
    └── 07_formulario_completo.php
```

---

**¡Listo para practicar PHP + MySQL! 🚀**
