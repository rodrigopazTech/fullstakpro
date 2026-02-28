# Instrucciones para usar Docker (Alternativa Recomendada)

Si tienes problemas configurando SQL Server o PHP en tu Mac localmente, esta opción te permite levantar todo el entorno con un solo comando.

## Archivos Incluidos
- `Dockerfile`: Configuración de la imagen de PHP con drivers de SQL Server listos.
- `docker-compose.yml`: Define los servicios (Base de datos y Web PHP) y los conecta automáticamente.

## Pasos para iniciar

1. **Detener contenedores previos** (Importante):
   Si ya tenías un SQL Server corriendo manualmente, debes detenerlo para liberar el puerto 1433.
   ```bash
   docker stop sql_server
   docker rm sql_server
   ```

2. **Levantar el entorno**:
   Asegúrate de estar en la carpeta `Clase6/` y ejecuta:
   ```bash
   docker-compose up -d --build
   ```
   *Nota: La primera vez tomará unos minutos mientras descarga y construye las imágenes.*

3. **Probar la conexión**:
   Una vez que termine, puedes probar de dos formas:

   **Opción A: Desde el navegador**
   Abre [http://localhost:8080/prueba_conexion.php](http://localhost:8080/prueba_conexion.php)

   **Opción B: Desde la terminal**
   ```bash
   docker-compose exec web php prueba_conexion.php
   ```

## Notas Adicionales
- Los archivos en tu carpeta `Clase6` se sincronizan automáticamente con el contenedor. Si editas `prueba_conexion.php`, los cambios se reflejan al instante.
- Para apagar todo: `docker-compose down`
