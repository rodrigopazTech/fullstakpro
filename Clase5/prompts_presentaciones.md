# Prompts para Generar Presentaciones - Clase 5
**Para IA de Presentaciones (Gamma, Beautiful.ai, etc.)**

---

## 📊 Opción 1: El CRUD Completo en PHP (10 slides)

**Objetivo:** Explicar cómo funciona el código que van a escribir. Pasar de "comandos SQL" a "aplicación web" con formularios y botones.

**COPIA ESTE PROMPT:**

```
Actúa como un profesor experto en desarrollo web y crea una presentación visual de 10 slides titulada "De la Consola a la Web: Tu Primer CRUD en PHP". El estilo debe ser moderno, limpio y con diagramas de flujo simples.

STRUCTURE:

Slide 1: Título: "Tu Primer CRUD Real". Subtítulo: "De comandos aburridos a una App funcional". Imagen: Un formulario web moderno conectándose a una base de datos.

Slide 2: El Mapa del Tesoro. Diagrama de flujo: Usuario llena formulario -> PHP recibe datos ($_POST) -> PHP habla con MySQL (INSERT) -> MySQL guarda.

Slide 3: CREATE (La Creación). Izquierda: Formulario HTML (<input name="nombre">). Derecha: Código PHP ($nombre = $_POST['nombre']). Flecha conectando ambos.

Slide 4: READ (La Lista). Izquierda: Tabla HTML vacía. Derecha: Bucle foreach en PHP recorriendo datos. Resultado: Tabla llena. Concepto clave: "PHP escribe el HTML por ti".

Slide 5: UPDATE - Parte 1 (El Enlace). Mostrar una tabla con botón "Editar". Flecha saliendo del botón hacia: "editar.php?id=5". Explicación: "El ID viaja en la URL".

Slide 6: UPDATE - Parte 2 (El Formulario Mágico). Formulario que ya tiene los datos escritos (value="<?php echo $nombre ?>"). Concepto: "Primero leemos el dato actual, luego lo mostramos".

Slide 7: UPDATE - Parte 3 (Guardar). Diagrama: Usuario cambia "Juan" por "Juan P.". Botón Guardar -> UPDATE usuarios SET nombre... WHERE id=5.

Slide 8: DELETE (El Adiós). Botón rojo "Eliminar". Alerta JS: "¿Seguro?". Si dice SÍ -> delete.php?id=5 -> DELETE FROM usuarios WHERE id=5. Recordatorio: "Sin ID, borras todo el mundo".

Slide 9: Seguridad Básica. Comparación visual:
❌ Mal: INSERT INTO ... VALUES ('$nombre') (Inyección SQL).
✅ Bien: prepare() + execute() (Escudo protector).

Slide 10: Resumen. Lista de chequeo:
1. Conexión (PDO)
2. Recibir datos ($_POST/$_GET)
3. Preparar sentencia SQL
4. Ejecutar
5. ¡Felicidades, eres Full Stack!
```

---

## 📊 Opción 2: Entendiendo JOINs (8 slides)

**Objetivo:** Visualizar cómo se unen las tablas. Es un tema abstracto que necesita dibujos.

**COPIA ESTE PROMPT:**

```
Crea una presentación visual y educativa de 8 slides titulada "El Poder de las Relaciones: SQL JOINS". El enfoque debe ser visual, usando conjuntos (diagramas de Venn) para explicar la lógica.

STRUCTURE:

Slide 1: Título: "SQL JOINS: Uniendo Piezas". Subtítulo: "¿Cómo conectamos Usuarios con sus Pedidos?". Imagen: Piezas de rompecabezas uniéndose.

Slide 2: El Problema. Tabla A (Usuarios) con nombres. Tabla B (Pedidos) con productos. Pregunta: "¿Quién compró la Laptop?". Respuesta: "Necesitamos un puente".

Slide 3: La Llave (Key). Flecha conectando 'id' de Usuario (1) con 'usuario_id' de Pedido (1). Concepto: "El ID es el pegamento". FOREIGN KEY explicada simple.

Slide 4: INNER JOIN (La Intersección). Diagrama de Venn: Dos círculos superpuestos. La parte central coloreada. Texto: "Solo lo que coincide". Ejemplo: Usuarios QUE compraron algo. Si no compraste, no sales.

Slide 5: Código INNER JOIN.
SELECT nombre, producto
FROM usuarios
INNER JOIN pedidos ON usuarios.id = pedidos.usuario_id;
(Resaltar en colores las partes que conectan).

Slide 6: LEFT JOIN (El Inclusivo). Diagrama de Venn: Todo el círculo izquierdo coloreado + la intersección. Texto: "Todos los Usuarios, tengan pedido o no".

Slide 7: Ejemplo Visual LEFT JOIN. Tabla resultado mostrando a "Juan" (con Laptop) y a "Pedro" (con NULL/Nada). Explicación: "Pedro no compró, pero queremos verlo en la lista".

Slide 8: Resumen Visual.
INNER = Solo amigos con coincidencia.
LEFT = Todos mis amigos, coincidan o no.
RIGHT = (Casi no se usa, ignóralo por ahora).
Conclusión: "90% del tiempo usarás INNER JOIN".
```

---
**Tips:** Usa **Gamma.app** o **Beautiful.ai** para mejores resultados con estos prompts.
