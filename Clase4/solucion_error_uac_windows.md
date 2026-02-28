# Solución: Error UAC en XAMPP (Windows)
**"Important! Because an activated User Account Control (UAC)..."**

---

## ⚠️ El Problema

Windows está bloqueando XAMPP porque el **Control de Cuentas de Usuario (UAC)** está activado. Este es un error MUY común en Windows.

---

## ✅ SOLUCIÓN RÁPIDA (Recomendada)

### **Opción 1: Instalar en Otra Ubicación** ⭐ MÁS FÁCIL

**Problema:** XAMPP no puede instalarse en `C:\Program Files` por permisos de UAC

**Solución:** Instalar en una carpeta diferente

**Pasos:**

1. **Cierra el instalador** de XAMPP (click en la X)

2. **Vuelve a abrir el instalador** de XAMPP (doble click)

3. Cuando llegues a la pantalla de **"Select a folder"** o **"Seleccionar carpeta"**:
   - ❌ NO uses: `C:\Program Files\XAMPP`
   - ✅ SÍ usa: `C:\xampp` (directamente en C:)

4. **Continúa con la instalación** normalmente

5. **Listo** - XAMPP se instalará sin problemas

---

## ✅ SOLUCIÓN ALTERNATIVA

### **Opción 2: Desactivar UAC Temporalmente** (Más complejo)

**Solo si la Opción 1 no funcionó**

**Pasos:**

1. **Presiona** `Windows + R`

2. **Escribe:** `msconfig`

3. **Presiona** Enter

4. Ve a la pestaña **"Tools"** o **"Herramientas"**

5. Busca **"Change UAC Settings"** o **"Cambiar configuración de UAC"**

6. Click en **"Launch"** o **"Iniciar"**

7. **Baja el control deslizante** hasta abajo (Never notify)

8. Click en **"OK"**

9. **Reinicia tu computadora**

10. **Instala XAMPP** ahora

11. **IMPORTANTE:** Después de instalar, **vuelve a activar UAC** repitiendo los pasos 1-8 pero subiendo el control deslizante

---

## 🎯 RECOMENDACIÓN FINAL

**Usa la Opción 1** (instalar en `C:\xampp`)

**Razones:**
- ✅ Más rápido (no necesitas reiniciar)
- ✅ Más seguro (no desactivas UAC)
- ✅ Es la ubicación estándar de XAMPP
- ✅ Funciona en el 99% de los casos

---

## 📝 Mensaje para el Alumno

```
🔧 SOLUCIÓN AL ERROR UAC:

1. Cierra el instalador de XAMPP
2. Vuelve a abrirlo
3. Cuando te pregunte DÓNDE instalar:
   - Cambia de: C:\Program Files\XAMPP
   - A: C:\xampp
4. Continúa la instalación normal

¡Listo! Debería instalarse sin problemas.

Si aún da error, avísame.
```

---

## ❓ Si Sigue Sin Funcionar

**Verifica:**
1. ¿Estás ejecutando el instalador como **Administrador**?
   - Click derecho en el instalador → "Ejecutar como administrador"

2. ¿Tu antivirus está bloqueando?
   - Desactiva temporalmente el antivirus
   - Instala XAMPP
   - Vuelve a activar el antivirus

3. ¿Tienes otro XAMPP instalado?
   - Desinstala la versión anterior primero
   - Luego instala la nueva

---

**En resumen: Instala en `C:\xampp` en lugar de `C:\Program Files\XAMPP`** ✅
