#  Práctica Clase 2: PHP Fundamentos

**Duración:** 1 hora  
**Archivo a crear:** `practica.php`  
**Objetivo:** Aplicar variables, tipos de datos y estructuras de control

---

## 📋 Instrucciones Generales

1. Crea un archivo llamado `practica.php` en tu carpeta del servidor
2. Cada ejercicio se agrega al mismo archivo
3. Ejecuta el archivo en el navegador después de cada ejercicio
4. Usa `echo` para mostrar los resultados

---

## Ejercicio 1: Variables y Tipos (10 minutos)

Crea las siguientes variables y muéstralas con `echo`:

```php
<?php
// EJERCICIO 1: Declara estas variables

// 1.1 Tu nombre (string)
$nombre = ""; // <- Escribe tu nombre

// 1.2 Tu edad (integer)
$edad = 0; // <- Escribe tu edad

// 1.3 Precio de un producto (float)
$precio = 0.0; // <- Inventa un precio

// 1.4 ¿Eres estudiante? (boolean)
$esEstudiante = true;

// 1.5 Muestra todo con echo
echo "Hola, me llamo " . $nombre . "<br>";
echo "Tengo " . $edad . " años<br>";
echo "El precio es: $" . $precio . "<br>";

// 1.6 RETO: ¿Cómo mostrarías si eres estudiante o no?
// Pista: Los booleanos no se muestran directamente con echo
// SOLUCIÓN:
// if ($esEstudiante) {
//     echo "Sí soy estudiante<br>";
// } else {
//     echo "No soy estudiante<br>";
// }
// O con ternario:
// echo "Estudiante: " . ($esEstudiante ? "Sí" : "No") . "<br>";

?>
```

**✅ Resultado esperado:** Ver tus datos en el navegador

---

## Ejercicio 2: Operadores (10 minutos)

Agrega esto después del ejercicio 1:

```php
<?php
// EJERCICIO 2: Operadores

echo "<h2>Ejercicio 2: Operadores</h2>";

// 2.1 Calcula el precio con IVA (16%)
$precioBase = 100;
$iva = 0.16;
$precioFinal = $precioBase + ($precioBase * $iva);

echo "Precio base: $" . $precioBase . "<br>";
echo "Precio con IVA: $" . $precioFinal . "<br>";

// 2.2 TU TURNO: Calcula el descuento
// Si el precio base es 500 y hay 20% de descuento
// ¿Cuál es el precio final?

$precioOriginal = 500;
$descuento = 0.20; // 20%

// Escribe tu código aquí:
// $precioConDescuento = ???

// echo "Precio con descuento: $" . $precioConDescuento;

// SOLUCIÓN:
// $precioConDescuento = $precioOriginal - ($precioOriginal * $descuento);
// echo "Precio con descuento: $" . $precioConDescuento . "<br>";

// 2.3 RETO: Calcula precio con descuento Y luego con IVA
// SOLUCIÓN:
// $precioConDescuento = $precioOriginal - ($precioOriginal * $descuento); // 400
// $precioFinalConIva = $precioConDescuento + ($precioConDescuento * $iva); // 464
// echo "Precio final (descuento + IVA): $" . $precioFinalConIva . "<br>";
?>
```

**✅ Resultado esperado:** Mostrar precio con descuento = $400

---

## Ejercicio 3: Condicionales (15 minutos)

```php
<?php
// EJERCICIO 3: Condicionales

echo "<h2>Ejercicio 3: Condicionales</h2>";

// 3.1 Sistema de calificaciones
$calificacion = 85; // Cambia este valor para probar

if ($calificacion >= 90) {
    echo "Calificación: A - Excelente<br>";
} elseif ($calificacion >= 80) {
    echo "Calificación: B - Muy bien<br>";
} elseif ($calificacion >= 70) {
    echo "Calificación: C - Bien<br>";
} elseif ($calificacion >= 60) {
    echo "Calificación: D - Suficiente<br>";
} else {
    echo "Calificación: F - Reprobado<br>";
}

// 3.2 TU TURNO: Verifica si puede comprar
// Una persona puede comprar si:
// - Tiene 18 años o más
// - Tiene saldo suficiente

$edadComprador = 20;
$saldoDisponible = 150;
$precioProducto = 200;

// Escribe tu código aquí:
// if (???) {
//     echo "Puede comprar";
// } else {
//     echo "No puede comprar";
// }

// SOLUCIÓN:
// if ($edadComprador >= 18 && $saldoDisponible >= $precioProducto) {
//     echo "✅ Puede comprar<br>";
// } else {
//     echo "❌ No puede comprar<br>";
//     if ($edadComprador < 18) {
//         echo "Motivo: Es menor de edad<br>";
//     }
//     if ($saldoDisponible < $precioProducto) {
//         echo "Motivo: Saldo insuficiente<br>";
//     }
// }

// 3.3 RETO: Usa operador ternario
// Muestra "Mayor de edad" o "Menor de edad" en una sola línea
// $mensaje = (condicion) ? "valor si true" : "valor si false";

// SOLUCIÓN:
// $mensaje = ($edadComprador >= 18) ? "Mayor de edad" : "Menor de edad";
// echo $mensaje . "<br>";

?>
```

**✅ Resultado esperado:** Verificar edad + saldo y mostrar si puede comprar

---

## Ejercicio 4: Bucles (15 minutos)

```php
<?php
// EJERCICIO 4: Bucles

echo "<h2>Ejercicio 4: Bucles</h2>";

// 4.1 Tabla del 5 con FOR
echo "<h3>Tabla del 5:</h3>";

for ($i = 1; $i <= 10; $i++) {
    $resultado = 5 * $i;
    echo "5 x " . $i . " = " . $resultado . "<br>";
}

// 4.2 TU TURNO: Tabla de multiplicar dinámica
// Crea una variable $numero y genera su tabla del 1 al 10

$numero = 7; // Cambia este número

echo "<h3>Tabla del " . $numero . ":</h3>";

// Escribe tu bucle for aquí:

// SOLUCIÓN:
// for ($i = 1; $i <= 10; $i++) {
//     $resultado = $numero * $i;
//     echo $numero . " x " . $i . " = " . $resultado . "<br>";
// }

// 4.3 Cuenta regresiva con WHILE
echo "<h3>Cuenta regresiva:</h3>";

$contador = 10;

while ($contador >= 0) {
    echo $contador . "... ";
    $contador--; // Resta 1
}
echo "¡Despegue! 🚀<br>";

// 4.4 RETO: Lista de productos con FOREACH
$productos = ["Laptop", "Mouse", "Teclado", "Monitor"];

echo "<h3>Lista de productos:</h3>";
echo "<ul>";

foreach ($productos as $producto) {
    echo "<li>" . $producto . "</li>";
}

echo "</ul>";

// TU TURNO: Agrega precios a cada producto
// Pista: Puedes usar un array asociativo
// $productos = ["Laptop" => 15000, "Mouse" => 500];

// SOLUCIÓN:
// $productosConPrecio = [
//     "Laptop" => 15000,
//     "Mouse" => 350,
//     "Teclado" => 800,
//     "Monitor" => 4500
// ];
// 
// echo "<h3>Lista de productos con precios:</h3>";
// echo "<ul>";
// foreach ($productosConPrecio as $nombre => $precio) {
//     echo "<li>" . $nombre . " - $" . $precio . "</li>";
// }
// echo "</ul>";
// 
// // Calcular total
// $total = 0;
// foreach ($productosConPrecio as $precio) {
//     $total = $total + $precio;
// }
// echo "<strong>Total: $" . $total . "</strong>";

?>
```

**✅ Resultado esperado:** Ver tablas de multiplicar y lista de productos

---

## 🏆 Ejercicio Final: Mini Sistema (10 minutos)

Combina todo lo aprendido:

```php
<?php
// EJERCICIO FINAL: Mini Sistema de Ventas

echo "<h1>🛒 Mini Sistema de Ventas</h1>";

// Datos del cliente
$nombreCliente = "Juan Pérez";
$edadCliente = 25;
$saldoCliente = 1000;

// Datos del producto
$nombreProducto = "Audífonos Bluetooth";
$precioProducto = 450;
$stockDisponible = 5;

// Configuración
$iva = 0.16;
$edadMinima = 18;

// === TU CÓDIGO AQUÍ ===

// 1. Muestra información del cliente
echo "<h3>👤 Cliente: " . $nombreCliente . "</h3>";
// Agrega edad y saldo...
// SOLUCIÓN:
// echo "Edad: " . $edadCliente . " años<br>";
// echo "Saldo disponible: $" . $saldoCliente . "<br>";

// 2. Muestra información del producto
echo "<h3>📦 Producto: " . $nombreProducto . "</h3>";
// Agrega precio y stock...
// SOLUCIÓN:
// echo "Precio: $" . $precioProducto . "<br>";
// echo "Stock disponible: " . $stockDisponible . " unidades<br>";

// 3. Calcula precio final con IVA
// $precioFinal = ???
// SOLUCIÓN:
// $precioFinal = $precioProducto + ($precioProducto * $iva);
// echo "<br>Precio con IVA (16%): $" . $precioFinal . "<br>";

// 4. Verifica si puede comprar (edad, saldo, stock)
// if (???) {
//     echo "✅ Compra exitosa!";
//     // Actualiza el saldo del cliente
//     // Actualiza el stock
// } else {
//     echo "❌ No se puede realizar la compra";
//     // Muestra el motivo
// }

// SOLUCIÓN COMPLETA:
// echo "<h3>🧾 Procesando compra...</h3>";
// 
// if ($edadCliente >= $edadMinima && $saldoCliente >= $precioFinal && $stockDisponible > 0) {
//     echo "✅ <strong>¡Compra exitosa!</strong><br><br>";
//     
//     // Actualiza el saldo del cliente
//     $saldoCliente = $saldoCliente - $precioFinal;
//     
//     // Actualiza el stock
//     $stockDisponible = $stockDisponible - 1;
//     
//     // 5. BONUS: Muestra un resumen de la compra
//     echo "<h3>📋 Resumen de compra:</h3>";
//     echo "<table border='1' cellpadding='10'>";
//     echo "<tr><td>Cliente:</td><td>" . $nombreCliente . "</td></tr>";
//     echo "<tr><td>Producto:</td><td>" . $nombreProducto . "</td></tr>";
//     echo "<tr><td>Precio base:</td><td>$" . $precioProducto . "</td></tr>";
//     echo "<tr><td>IVA (16%):</td><td>$" . ($precioProducto * $iva) . "</td></tr>";
//     echo "<tr><td><strong>Total pagado:</strong></td><td><strong>$" . $precioFinal . "</strong></td></tr>";
//     echo "<tr><td>Saldo restante:</td><td>$" . $saldoCliente . "</td></tr>";
//     echo "<tr><td>Stock restante:</td><td>" . $stockDisponible . " unidades</td></tr>";
//     echo "</table>";
//     
// } else {
//     echo "❌ <strong>No se puede realizar la compra</strong><br><br>";
//     echo "Motivo(s):<br>";
//     
//     if ($edadCliente < $edadMinima) {
//         echo "• Debe ser mayor de " . $edadMinima . " años<br>";
//     }
//     if ($saldoCliente < $precioFinal) {
//         echo "• Saldo insuficiente. Necesita: $" . $precioFinal . ", tiene: $" . $saldoCliente . "<br>";
//     }
//     if ($stockDisponible <= 0) {
//         echo "• Producto sin stock<br>";
//     }
// }

?>
```

---

## 📝 Soluciones

Las soluciones se revisarán juntos al final de la clase. 

**Puntos a evaluar:**
- ✅ Sintaxis correcta de PHP
- ✅ Uso de variables con nombres descriptivos
- ✅ Condicionales que cubren todos los casos
- ✅ Bucles que no sean infinitos
- ✅ Código que muestra resultados claros

---

## 🎯 Resumen de lo Aprendido

| Concepto | Ejemplo |
|----------|---------|
| Variable | `$nombre = "Juan";` |
| Echo | `echo "Hola " . $nombre;` |
| If-else | `if ($edad >= 18) { ... }` |
| For | `for ($i = 0; $i < 10; $i++)` |
| While | `while ($x > 0) { ... }` |
| Foreach | `foreach ($arr as $item)` |

**¡Felicidades por completar la práctica!** 🎉
