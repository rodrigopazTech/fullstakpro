# Prompt para Presentación: Conectando PHP con SQL Server
**Para IA de Presentaciones (Gamma, Beautiful.ai)**

---

## 📊 PROMPT:

```
Actúa como un arquitecto de software y crea una presentación técnica pero accesible de 8 slides titulada: "PHP & SQL Server: La Alianza Empresarial".

Objetivo: Explicar qué necesitamos para que PHP (tecnología web) hable con SQL Server (tecnología corporativa), enfocándose en los "Drivers" y la seguridad.

ESTRUCTURA:

Slide 1: Título: "PHP + Microsoft SQL Server". Subtítulo: "Subiendo de nivel: De MySQL a entornos corporativos". Imagen: Logo de PHP dándole la mano al logo de SQL Server.

Slide 2: ¿Por qué cambiar? Comparativa visual:
- MySQL: Rápido, web, gratuito, startups.
- SQL Server: Robusto, empresarial, integraciones Microsoft, bancos/corporativos.
- Mensaje: "Ambos hablan SQL, pero viven en casas diferentes".

Slide 3: El Problema de Comunicación.
- Analogía: PHP habla "Inglés" (nativo web). SQL Server habla "Alemán" (protocolo TDS).
- Si intentas conectarte directo -> Error.
- Solución: Necesitamos un Traductor.

Slide 4: Los Drivers (El Traductor).
- Concepto: Un Driver es una librería que enseña a PHP cómo hablar con la base de datos.
- Para MySQL usábamos: `pdo_mysql` (Venía instalado).
- Para SQL Server necesitamos: `sqlsrv` y `pdo_sqlsrv`.
- Imagen: Una pieza de rompecabezas conectando PHP y la DB.

Slide 5: Requisitos de Instalación (Según tu Sistema).
1. **Windows (XAMPP):** Instalar drivers .dll + Configurar php.ini.
2. **Mac/Linux:** Usar Docker (Ruta recomendada y profesional).
3. **Herramienta Visual:** SSMS (Windows) o Azure Data Studio (Mac).
4. **Reinicio:** Apache/Contenedor siempre debe reiniciarse tras configurar.

Slide 6: La Cadena de Conexión (El Código).
- Código PHP comparado:
  
  MySQL:
  `new PDO("mysql:host=localhost;dbname=test", ...)`
  
  SQL Server:
  `new PDO("sqlsrv:Server=localhost;Database=test;TrustServerCertificate=1", ...)`
  
- Diferencia clave: El prefijo cambia y agregamos seguridad (SSL/TrustServerCertificate).

Slide 7: Práctica de Hoy: Registro de Estudiantes.
- Diagrama de flujo:
  1. HTML: Formulario (Nombre, Email).
  2. PHP: Recibe $_POST.
  3. PDO SQLSRV: Conecta con usuario 'sa'.
  4. SQL: `INSERT INTO Estudiantes...`
  5. DB: Datos guardados en SQL Server.

Slide 8: Resumen / Takeaways.
- SQL Server requiere drivers externos.
- La conexión cambia, el resto del código (PDO) se mantiene.
- En Mac usamos Docker para evitar dolor de cabeza.
- ¡Listo para el mundo corporativo!
```

---

**Tips para la Presentación:**
- Usa colores azul corporativo (Microsoft) y morado (PHP).
- Mantén el código grande y legible.
- Enfatiza que la lógica SQL (SELECT, INSERT) **NO cambia**, solo la conexión.
