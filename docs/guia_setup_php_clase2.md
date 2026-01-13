# 🛠️ Guía de Setup - Clase 2: PHP

**Objetivo:** Configurar tu entorno para ejecutar archivos PHP  
**Tiempo estimado:** 10-15 minutos  
**Nivel:** Principiante

---

## ❓ ¿Necesito Nginx para correr PHP?

**NO.** Para aprender PHP, no necesitas Nginx, Apache ni ningún servidor web externo.

PHP incluye un **servidor de desarrollo integrado** desde la versión 5.4. Es perfecto para:
- ✅ Aprender y practicar
- ✅ Desarrollo local
- ✅ Probar código rápidamente

**¿Cuándo SÍ necesitas Nginx?**
- Cuando publiques tu aplicación en internet (producción)
- Cuando necesites manejar muchas conexiones simultáneas
- Lo veremos en clases posteriores

---

## 📋 Paso 0: Verificar que tienes PHP instalado

Abre tu terminal y ejecuta:

```bash
php -v
```

**Si ves algo así, ya tienes PHP:**
```
PHP 8.2.0 (cli) (built: Dec  6 2022 15:31:23)
Copyright (c) The PHP Group
```

**Si dice "command not found", instala PHP primero:**

### macOS:
```bash
brew install php
```

### Windows:
1. Descarga PHP de https://windows.php.net/download/
2. Extrae en `C:\php`
3. Agrega `C:\php` a tu PATH del sistema
4. O más fácil: Instala XAMPP (https://www.apachefriends.org/)

### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install php
```

---

## 📁 Paso 1: Crear tu carpeta de trabajo

Crea una carpeta para la clase:

```bash
# Navega a tu carpeta de documentos (o donde prefieras)
cd ~/Documents

# Crea la carpeta del curso
mkdir curso-fullstack

# Entra a la carpeta
cd curso-fullstack

# Crea la carpeta para esta clase
mkdir clase2

# Entra a la carpeta de la clase
cd clase2
```

**Tu estructura quedará así:**
```
Documents/
└── curso-fullstack/
    └── clase2/
        └── (aquí irán tus archivos .php)
```

---

## 📝 Paso 2: Crear tu primer archivo PHP

Crea un archivo llamado `practica.php`:

### Opción A: Desde la terminal
```bash
# Asegúrate de estar en la carpeta clase2
touch practica.php
```

### Opción B: Desde VS Code
1. Abre VS Code
2. File > Open Folder > Selecciona `clase2`
3. Click derecho > New File > `practica.php`

---

## 🚀 Paso 3: Levantar el servidor PHP

**Este es el comando mágico:**

```bash
php -S localhost:8000
```

**Explicación:**
- `php` - Ejecuta PHP
- `-S` - Inicia el servidor integrado (S de Server)
- `localhost` - Tu computadora local
- `8000` - Puerto donde escuchará (puedes usar 8080, 3000, etc.)

**Verás algo así:**
```
[Fri Jan 10 09:00:00 2026] PHP 8.2.0 Development Server (http://localhost:8000) started
```

⚠️ **IMPORTANTE:** La terminal quedará "ocupada" mientras el servidor esté corriendo. Eso es normal.

---

## 🌐 Paso 4: Abrir en el navegador

1. Abre tu navegador (Chrome, Firefox, Safari, etc.)
2. Ve a: **http://localhost:8000/practica.php**
3. ¡Verás el resultado de tu código PHP!

---

## 🔄 Flujo de trabajo durante la clase

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   1. Escribe código en VS Code (practica.php)           │
│                        ↓                                │
│   2. Guarda el archivo (Cmd+S / Ctrl+S)                 │
│                        ↓                                │
│   3. Refresca el navegador (Cmd+R / Ctrl+R / F5)        │
│                        ↓                                │
│   4. Ve los resultados                                  │
│                        ↓                                │
│   5. Repite                                             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**NO necesitas reiniciar el servidor cada vez que cambias el código.** Solo guarda y refresca.

---

## 🧪 Paso 5: Probar que todo funciona

Escribe esto en tu archivo `practica.php`:

```php
<?php
echo "<h1>¡Hola Mundo!</h1>";
echo "<p>PHP está funcionando correctamente.</p>";
echo "<p>Fecha y hora del servidor: " . date("Y-m-d H:i:s") . "</p>";
?>
```

Guarda, refresca el navegador, y deberías ver:

> # ¡Hola Mundo!
> PHP está funcionando correctamente.
> Fecha y hora del servidor: 2026-01-10 09:15:30

---

## ⏹️ Cómo detener el servidor

En la terminal donde está corriendo el servidor:

**Mac/Linux:** `Ctrl + C`  
**Windows:** `Ctrl + C`

---

## 🔧 Comandos útiles

| Acción | Comando |
|--------|---------|
| Iniciar servidor | `php -S localhost:8000` |
| Iniciar en otro puerto | `php -S localhost:3000` |
| Ver versión de PHP | `php -v` |
| Detener servidor | `Ctrl + C` |

---

## 🐛 Solución de problemas comunes

### "php: command not found"
PHP no está instalado o no está en el PATH. Instálalo siguiendo el Paso 0.

### "Address already in use"
El puerto 8000 ya está ocupado. Usa otro puerto:
```bash
php -S localhost:8080
```

### No veo cambios después de guardar
1. Asegúrate de guardar el archivo (Ctrl+S / Cmd+S)
2. Refresca el navegador con Ctrl+R / Cmd+R
3. Si sigue sin funcionar, prueba Ctrl+Shift+R (hard refresh)

### Página en blanco
Probablemente hay un error de sintaxis. Revisa la terminal donde corre el servidor, ahí aparecen los errores.

### "Cannot find practica.php"
Asegúrate de:
1. Estar en la carpeta correcta cuando levantaste el servidor
2. El archivo se llama exactamente `practica.php`
3. La URL es correcta: `http://localhost:8000/practica.php`

---

## 📱 Resumen: Los 4 comandos que necesitas

```bash
# 1. Ir a tu carpeta
cd ~/Documents/curso-fullstack/clase2

# 2. Levantar el servidor
php -S localhost:8000

# 3. Abrir en navegador
# http://localhost:8000/practica.php

# 4. Detener servidor (cuando termines)
# Ctrl + C
```

---

## ✅ Checklist antes de empezar la práctica

- [ ] PHP instalado (`php -v` funciona)
- [ ] Carpeta `clase2` creada
- [ ] Archivo `practica.php` creado
- [ ] Servidor corriendo (`php -S localhost:8000`)
- [ ] Navegador abierto en `http://localhost:8000/practica.php`
- [ ] "¡Hola Mundo!" se muestra correctamente

**¡Listo! Ya puedes empezar con los ejercicios de la práctica.** 🎉

---

## 📚 Nota sobre Nginx (para después)

En clases posteriores aprenderás a usar **Nginx + PHP-FPM**, que es lo que se usa en producción porque:

- Maneja miles de conexiones simultáneas
- Es más seguro
- Permite configurar dominios, SSL, etc.

Por ahora, el servidor integrado de PHP es perfecto para aprender. Un paso a la vez. 👍
