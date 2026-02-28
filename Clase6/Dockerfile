FROM php:8.2-apache

# Actualizar e instalar dependencias del sistema necesarias
RUN apt-get update && apt-get install -y \
    gnupg2 \
    unixodbc-dev \
    curl \
    apt-transport-https

# Agregar la llave y repositorio de Microsoft para los drivers ODBC
# Agregar la llave y repositorio de Microsoft para los drivers ODBC (Compatible con Debian 12+)
RUN curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /usr/share/keyrings/microsoft-prod.gpg \
    && curl https://packages.microsoft.com/config/debian/12/prod.list > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update

# Instalar los drivers ODBC de Microsoft (Aceptar licencia automáticamente)
RUN ACCEPT_EULA=Y apt-get install -y msodbcsql18 mssql-tools18

# Instalar extensiones de PHP para SQL Server
RUN pecl install sqlsrv pdo_sqlsrv \
    && docker-php-ext-enable sqlsrv pdo_sqlsrv

# Habilitar mod_rewrite de Apache (útil para proyectos futuros)
RUN a2enmod rewrite

# Copiar archivos del proyecto al contenedor
COPY . /var/www/html/
