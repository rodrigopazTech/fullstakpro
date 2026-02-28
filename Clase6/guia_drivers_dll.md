# Guía de Descarga: Drivers SQL Server para PHP (Windows)
**Archivos: `php_sqlsrv.dll` y `php_pdo_sqlsrv.dll`**

---

## 📥 Dónde Descargar

La fuente oficial es el GitHub de Microsoft. Debes descargar la versión que coincida con tu versión de PHP.

**🔗 Link Directo de Descargas:**
[https://github.com/microsoft/msphpsql/releases](https://github.com/microsoft/msphpsql/releases)

---

## 🕵️‍♂️ ¿Cuál archivo elijo? (IMPORTANTE)

Al descargar y descomprimir, verás MUCHOS archivos. Debes elegir EXACTAMENTE los que coincidan con tu XAMPP.

### **Paso 1: Verificar tu versión de PHP**
1. Abre el Panel de Control de XAMPP.
2. Inicia Apache.
3. Click en el botón **"Admin"** de Apache (o ve a `http://localhost/dashboard/phpinfo.php`).
4. Busca estos datos:
   - **PHP Version:** (Ej: 8.2.12) → Necesitas drivers para **8.2**
   - **Architecture:** (x64 o x86) → Generalmente es **x64**
   - **Thread Safety:** (enabled o disabled)
     - Enabled = **Thread Safe (TS)** ✅ (Casi siempre en XAMPP)
     - Disabled = Non-Thread Safe (NTS)

### **Paso 2: Seleccionar los archivos**
Basado en lo anterior (ejemplo: PHP 8.2, x64, Thread Safe), busca estos dos archivos en la carpeta descargada:

1. **`php_sqlsrv_82_ts_x64.dll`**
2. **`php_pdo_sqlsrv_82_ts_x64.dll`**

*(Si tu PHP es 8.3, busca los que dicen `_83_`)*

---

## ⚙️ Instalación

1. **Copiar:** Pega esos 2 archivos en `C:\xampp\php\ext\`
2. **Renombrar (Opcional pero recomendado):**
   - Quítales la versión para que sea más fácil.
   - `php_sqlsrv_82_ts_x64.dll`  →  `php_sqlsrv.dll`
   - `php_pdo_sqlsrv_82_ts_x64.dll`  →  `php_pdo_sqlsrv.dll`
3. **Configurar:** Abre `php.ini` y agrega:
   ```ini
   extension=php_sqlsrv
   extension=php_pdo_sqlsrv
   ```
4. **Reiniciar:** Reinicia Apache en XAMPP.

---

## 🆘 Tabla de Compatibilidad

| Versión PHP | Versión Drivers Recomendada |
|---|---|
| PHP 8.3 | Versión 5.12+ |
| PHP 8.2 | Versión 5.11+ |
| PHP 8.1 | Versión 5.10+ |

**Nota:** Si descargas la última versión (ej. 5.12) usualmente trae carpetas para PHP 8.1, 8.2 y 8.3.
