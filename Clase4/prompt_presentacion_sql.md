# Prompt para Generar Presentación de SQL
**Para IA de Presentaciones (Gamma, Beautiful.ai, Canva, etc.)**

---

## 📊 PROMPT COMPLETO:

```
Crea una presentación profesional y visualmente atractiva de 11 slides sobre "Introducción a SQL" para estudiantes principiantes de programación. La presentación debe ser práctica, con ejemplos visuales y código real.

ESTRUCTURA DE SLIDES:

Slide 1 - PORTADA:
- Título: "Introducción a SQL"
- Subtítulo: "Structured Query Language - El lenguaje de las bases de datos"
- Incluir ícono de base de datos
- Diseño moderno y profesional

Slide 2 - ¿QUÉ ES UNA BASE DE DATOS?:
- Analogía: "Una base de datos es como Excel con superpoderes"
- Conceptos clave:
  * Tablas = Hojas de Excel
  * Filas = Registros (usuarios, productos, pedidos)
  * Columnas = Campos (nombre, email, precio)
- Incluir imagen visual de una tabla con datos de ejemplo
- Ejemplos reales: Facebook, Instagram, Netflix

Slide 3 - ¿QUÉ ES SQL?:
- Definición: "SQL es el lenguaje para hablar con bases de datos"
- 4 operaciones principales (CRUD):
  * CREATE (Crear)
  * READ (Leer)
  * UPDATE (Actualizar)
  * DELETE (Eliminar)
- Estadística: "SQL es usado por el 80% de las aplicaciones web"
- Ícono de lenguaje de programación

Slide 4 - SELECT - CONSULTAR DATOS:
- Título: "SELECT - Leer Datos"
- Código de ejemplo con syntax highlighting:
  ```sql
  SELECT nombre, email FROM usuarios;
  SELECT * FROM usuarios;
  ```
- Explicación visual: "SELECT = 'Muéstrame estos datos'"
- Tabla de ejemplo mostrando el resultado
- Usar colores para resaltar sintaxis

Slide 5 - INSERT - AGREGAR DATOS:
- Título: "INSERT - Crear Nuevos Registros"
- Código de ejemplo:
  ```sql
  INSERT INTO usuarios (nombre, email, edad) 
  VALUES ('Juan Pérez', 'juan@example.com', 25);
  ```
- Explicación visual: "INSERT = 'Agrega un nuevo usuario'"
- Antes/Después: mostrar tabla sin el registro y luego con él
- Ícono de "+" o "agregar"

Slide 6 - UPDATE - MODIFICAR DATOS:
- Título: "UPDATE - Actualizar Registros"
- Código de ejemplo:
  ```sql
  UPDATE usuarios 
  SET edad = 26 
  WHERE id = 1;
  ```
- ⚠️ ADVERTENCIA destacada: "SIEMPRE usa WHERE o cambiarás TODO"
- Ejemplo visual de antes/después
- Ícono de lápiz o editar

Slide 7 - DELETE - ELIMINAR DATOS:
- Título: "DELETE - Eliminar Registros"
- Código de ejemplo:
  ```sql
  DELETE FROM usuarios WHERE id = 5;
  ```
- ⚠️ ADVERTENCIA en rojo: "NO HAY CTRL+Z - Verifica antes de eliminar"
- Comparación:
  * ❌ DELETE FROM usuarios; (sin WHERE = elimina TODO)
  * ✅ DELETE FROM usuarios WHERE id = 5; (con WHERE = seguro)
- Ícono de basura

Slide 8 - WHERE - FILTRAR RESULTADOS:
- Título: "WHERE - Filtros y Condiciones"
- Ejemplos múltiples:
  ```sql
  WHERE edad > 25
  WHERE email = 'juan@example.com'
  WHERE edad >= 18 AND edad <= 30
  ```
- Operadores visuales: =, >, <, >=, <=, !=
- Analogía: "WHERE es como un filtro de Instagram"

Slide 9 - ORDER BY y LIMIT:
- Título: "Ordenar y Limitar Resultados"
- Dos secciones:
  
  ORDER BY:
  ```sql
  ORDER BY edad ASC  -- Menor a mayor
  ORDER BY edad DESC -- Mayor a menor
  ```
  
  LIMIT:
  ```sql
  LIMIT 5  -- Solo los primeros 5
  ```
- Ejemplo combinado:
  ```sql
  SELECT * FROM usuarios 
  ORDER BY edad DESC 
  LIMIT 3;
  ```
- Explicación: "Los 3 usuarios mayores"

Slide 10 - EJEMPLO PRÁCTICO COMPLETO:
- Título: "Caso Real: Sistema de Productos"
- Mostrar tabla de productos con: id, nombre, precio, stock
- 3 queries útiles con sus resultados:
  1. "Productos más caros": ORDER BY precio DESC LIMIT 3
  2. "Productos con poco stock": WHERE stock < 10
  3. "Buscar producto": WHERE nombre = 'Laptop'
- Diseño tipo "dashboard"

Slide 11 - RESUMEN Y PRÓXIMOS PASOS:
- Título: "¡Felicidades! Ya sabes SQL básico 🎉"
- Resumen visual (íconos + texto):
  * ✅ SELECT - Consultar
  * ✅ INSERT - Agregar
  * ✅ UPDATE - Modificar
  * ✅ DELETE - Eliminar
  * ✅ WHERE - Filtrar
  * ✅ ORDER BY - Ordenar
  * ✅ LIMIT - Limitar
- Próximos pasos:
  * "Clase 5: Joins y Subconsultas"
  * "Clase 6: Conectar PHP con SQL"
- Call to action: "Practica con el reto semanal"

ESPECIFICACIONES DE DISEÑO:
- Paleta de colores: Azul profesional (#007bff) con acentos naranjas (#ff6b35)
- Tipografía: Sans-serif moderna (Inter, Roboto, o similar)
- Código: Usar bloques con syntax highlighting (fondo oscuro)
- Íconos: Modernos y minimalistas
- Espaciado: Amplio, no saturar los slides
- Animaciones: Sutiles (fade in para bullets)
- Cada slide debe tener máximo 5 bullets o elementos
- Usar emojis estratégicamente (✅, ❌, ⚠️, 🎉)

ESTILO:
- Profesional pero accesible
- Ejemplos del mundo real (Facebook, Instagram, etc.)
- Código limpio y legible
- Advertencias visuales destacadas
- Comparaciones antes/después donde aplique
```

---

## 📝 VERSIÓN CORTA (Para IAs con límite de caracteres):

```
Crea presentación de 11 slides sobre "Introducción a SQL" para principiantes:

1. Portada: Título + ícono base de datos
2. ¿Qué es BD?: Analogía Excel, tablas/filas/columnas, ejemplos reales
3. ¿Qué es SQL?: CRUD, 4 operaciones principales
4. SELECT: Código + ejemplo visual de consulta
5. INSERT: Código + tabla antes/después
6. UPDATE: Código + advertencia WHERE
7. DELETE: Código + advertencia crítica sin WHERE
8. WHERE: Filtros, operadores, ejemplos múltiples
9. ORDER BY + LIMIT: Ordenar y limitar, ejemplo combinado
10. Ejemplo práctico: Sistema productos, 3 queries útiles
11. Resumen: Checklist visual + próximos pasos

Diseño: Azul #007bff, código con syntax highlighting, íconos modernos, máximo 5 bullets por slide, advertencias destacadas en rojo.
```

---

## 🎨 HERRAMIENTAS RECOMENDADAS:

1. **Gamma.app** (Recomendada)
   - URL: https://gamma.app
   - Genera con IA automáticamente
   - Pega el prompt completo

2. **Beautiful.ai**
   - URL: https://www.beautiful.ai
   - Diseños profesionales automáticos

3. **Canva + Magic Design**
   - URL: https://www.canva.com
   - Usa "Magic Design" con el prompt

4. **Tome.app**
   - URL: https://tome.app
   - Presentaciones narrativas con IA

---

## ✅ CHECKLIST POST-GENERACIÓN:

Después de generar, verifica que tenga:
- [ ] Exactamente 11 slides
- [ ] Código SQL con syntax highlighting
- [ ] Advertencias visuales en UPDATE y DELETE
- [ ] Ejemplos visuales (tablas, antes/después)
- [ ] Paleta de colores consistente
- [ ] Texto legible (no muy pequeño)
- [ ] Íconos en cada slide
- [ ] Máximo 5 bullets por slide

---

**Copia el PROMPT COMPLETO y pégalo en la IA de presentaciones de tu elección.**
