# Guía de Instalación XAMPP para Mac
**Solución al error: "xampp-osx not opened"**

---

## ⚠️ Error Común en Mac

Si ves este mensaje:
> **"xampp-osx-8.2.4-0-installer" Not Opened**  
> Apple could not verify "xampp-osx..." is free of malware...

**NO TE PREOCUPES.** Es normal en Mac. Aquí está la solución:

---

## ✅ Solución Paso a Paso

### **Paso 1: Cerrar el mensaje de error**
- Click en **"Done"**

### **Paso 2: Abrir Preferencias del Sistema**
- Click en el ícono de **Apple** (esquina superior izquierda)
- Click en **"Preferencias del Sistema"** o **"System Settings"**

### **Paso 3: Ir a Privacidad y Seguridad**
- Busca **"Privacidad y Seguridad"** o **"Privacy & Security"**
- Click para abrir

### **Paso 4: Permitir la instalación**
- Baja hasta encontrar el mensaje:
  > *"xampp-osx-8.2.4-0-installer was blocked from use because it is not from an identified developer"*
- Verás un botón: **"Open Anyway"** o **"Abrir de todas formas"**
- **Click en ese botón**

### **Paso 5: Confirmar con contraseña**
- Te pedirá tu contraseña de Mac
- Escríbela y presiona Enter

### **Paso 6: Volver a abrir el instalador**
- Regresa a tu carpeta de Descargas
- **Doble click** en el instalador de XAMPP otra vez
- Ahora aparecerá un mensaje: **"Are you sure you want to open it?"**
- Click en **"Open"** o **"Abrir"**

### **Paso 7: Instalar XAMPP**
- Sigue el asistente de instalación
- Click en **"Next"** en todas las pantallas
- Espera a que termine (2-3 minutos)
- Click en **"Finish"**

---

## 🚀 Verificar que Funciona

### **Paso 1: Abrir XAMPP**
- Ve a **Aplicaciones**
- Busca la carpeta **"XAMPP"**
- Abre **"manager-osx"** (el ícono naranja)

### **Paso 2: Iniciar MySQL**
- En la ventana de XAMPP Manager
- Busca **"MySQL Database"**
- Click en **"Start"**
- Espera a que el estado cambie a **"Running"** (verde)

### **Paso 3: Abrir phpMyAdmin**
- Abre tu navegador (Chrome, Safari, Firefox)
- Escribe en la barra de direcciones: `http://localhost/phpmyadmin`
- Presiona Enter

### **✅ Si ves phpMyAdmin = ¡LISTO!**

---

## 🆘 Problemas Comunes

### **Problema 1: MySQL no inicia (botón Start no funciona)**

**Solución:**
1. Cierra XAMPP Manager
2. Abre **Terminal** (búscalo en Spotlight)
3. Escribe:
```bash
sudo /Applications/XAMPP/xamppfiles/bin/mysql.server start
```
4. Ingresa tu contraseña de Mac
5. Vuelve a abrir XAMPP Manager

---

### **Problema 2: "Port 3306 already in use"**

**Causa:** Ya tienes MySQL instalado en tu Mac

**Solución:**
1. Abre **Terminal**
2. Escribe:
```bash
sudo lsof -i :3306
```
3. Verás qué programa usa el puerto
4. Detén ese programa o cambia el puerto de XAMPP

---

### **Problema 3: No puedo abrir http://localhost/phpmyadmin**

**Solución:**
1. Verifica que **Apache** también esté corriendo
2. En XAMPP Manager, click en **"Start"** en **"Apache Web Server"**
3. Espera a que diga **"Running"**
4. Vuelve a intentar abrir http://localhost/phpmyadmin

---

## 📞 ¿Aún tienes problemas?

1. Toma **screenshot** del error
2. Mándalo al grupo de WhatsApp
3. Te ayudaré en vivo durante la clase

---

## 🎯 Resumen Rápido

1. ✅ Descarga XAMPP: https://www.apachefriends.org/
2. ✅ Si da error de seguridad → Preferencias del Sistema → Privacidad → "Open Anyway"
3. ✅ Instala XAMPP (Next, Next, Next)
4. ✅ Abre XAMPP Manager
5. ✅ Start en MySQL
6. ✅ Abre http://localhost/phpmyadmin
7. ✅ ¡Listo para la clase!

---

**¡Nos vemos en la clase! 🚀**
