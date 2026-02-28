# Guía del Instructor - Clase 5
**Tema: Repaso CRUD y Fundamentos de Relaciones (JOINs)**

---

## 🎯 Objetivos de la Clase
1. **Reforzar CRUD:** Que los alumnos escriban EL CÓDIGO PHP que solo vieron en teoría la clase pasada.
2. **Entender Relaciones:** Comprender cómo unir tablas con SQL (INNER JOIN, LEFT JOIN).
3. **Aplicar en PHP:** Mostrar datos combinados en una página web.

---

## 📂 Carpeta 1: `codigo_practica_sql` (En phpMyAdmin)

**Tiempo estimado: 20-30 min**

1. **`01_crud_repaso.sql`**
   - Ejecuta esto primero en la pestaña SQL de phpMyAdmin.
   - Sirve para refrescar la memoria: INSERT, UPDATE, DELETE básicos.

2. **`02_setup_joins.sql`**
   - **IMPORTANTE:** Este script crea la tabla `pedidos` y la relaciona con `usuarios`.
   - Sin esto, no funcionarán los ejemplos de JOIN.

3. **`03_inner_join.sql`**
   - Explicación visual de la INTERSECCIÓN.
   - Muestra solo usuarios que compraron algo.

4. **`04_left_join.sql`**
   - Muestra TODOS los usuarios (incluso los que no compraron).
   - Ideal para explicar la diferencia con INNER.

---

## 📂 Carpeta 2: `codigo_php_crud_joins` (En VS Code / XAMPP)

**Tiempo estimado: 1 hora**

1. **`01_conexion.php`**
   - Copia/Pega el de la clase anterior o usa este.
   - Verifica credenciales.

2. **El CRUD (Mini-Práctica)**
   - **`02_crear_usuario.php`**: Formulario simple.
   - **`03_leer_usuarios.php`**: La tabla principal. (Punto de partida del sistema).
   - **`04_editar_usuario.php`**: Muestra cómo pre-llenar datos en los inputs.
   - **`05_eliminar_usuario.php`**: Archivo de solo lógica (sin vista).

3. **El Grand Finale (JOINs en PHP)**
   - **`06_ver_pedidos_join.php`**:
   - Muestra una tabla combinada donde se ve "Juan Pérez" y "Laptop Gamer" en la misma fila.
   - Es el "Ahá moment" de la clase.

---

## 💡 Tips para la Clase

- **No corras con el CRUD:** Es la primera vez que escriben esto completo. Dales tiempo en el `02_crear` y `03_leer`.
- **Dibuja los JOINs:** Usa la pizarra (o Paint) para dibujar conjuntos (Círculos de Venn) al explicar INNER vs LEFT.
- **Error Común:** Si alguien borró todos sus usuarios en la práctica SQL, el JOIN saldrá vacío. Asegúrate que corran el `02_setup_joins.sql` correctamente.

¡Éxito en la clase! 🚀
