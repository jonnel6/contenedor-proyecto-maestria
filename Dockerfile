# Usamos una imagen base de Node.js
FROM node:16

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos los archivos del proyecto al contenedor
COPY package*.json ./

# Instalamos las dependencias de la aplicación
RUN npm install

# Copiamos el resto de los archivos de la aplicación
COPY . .

# Exponemos el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]