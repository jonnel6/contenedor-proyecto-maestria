# Proyecto Maestría - ASIGNATURA: CONTENEDORES

Este proyecto es una aplicación Node.js que se conecta a una base de datos MongoDB. Está configurado para ejecutarse con Docker y Docker Compose.

## Requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instrucciones

1. Clonar el repositorio

Primero, clona este repositorio a tu máquina local:

> git clone https://github.com/jonnel6/contenedor-proyecto-maestria.git
> cd proyecto-maestria


Este proyecto incluye un archivo docker-compose.yml que define dos contenedores:
> node-app: La aplicación Node.js.
> mongo: El contenedor de MongoDB.

2. Para construir y ejecutar ambos contenedores, usa el siguiente comando:

> docker-compose up --build

Este comando descargará las imágenes necesarias, construirá la aplicación y levantará ambos contenedores. 
La aplicación estará disponible en http://localhost:3000

3. Para la ejecución del CRUD debería usar POSTMAN (se adjunta el coleccionable en la ruta del proyecto en github)

> (DESCARGAR E IMPORTAR EN POSTMAN) ENDPOINTS -PROYECTO-NEWMAN-CONTENEDORES.postman_collection.json

### 3.1. Crear un nuevo elemento
### Método HTTP: POST
URL: [/Insertar aquí/](http://localhost:3000/api/items)
Descripción: Crea un nuevo elemento en la base de datos.

Cuerpo de la solicitud (JSON):

{
  "name": "Elemento 1" 
}

### 3.2. Obtener todos los elementos
### Método HTTP: GET

URL: [/Obtener todos/](http://localhost:3000/api/items)

Descripción: Recupera todos los elementos de la base de datos.

### 3.3. Obtener un elemento por ID
### Método HTTP: GET

URL: [/Obtener por ID/](http://localhost:3000/api/items/68a6d80013dcad3e748e9a68)

Descripción: Recupera un solo elemento por su ID.

### 3.4. Actualizar un elemento
### Método HTTP: PUT

URL: [/Actualizar elemento/](http://localhost:3000/api/items/68a6d80013dcad3e748e9a68)

Descripción: Actualiza un elemento existente por su ID.
{
        "_id": "68a6d80013dcad3e748e9a68",
        "name": "Item CAMBIADO",
        "__v": 0
}

### 3.5. Actualizar un elemento
### Método HTTP: DELETE

URL: [/Borrar Elemento/](http://localhost:3000/api/items/68a7fe9213dcad3e748e9a6d)

Descripción: Elimina un elemento de la base de datos por su ID.

Respuesta:

{
    "message": "Item eliminado"
}

## Resumen de los 5 endpoints:

> POST /api/items: Crear un nuevo elemento.
> GET /api/items: Obtener todos los elementos.
> GET /api/items/:id: Obtener un elemento por ID.
> PUT /api/items/:id: Actualizar un elemento por ID.
> DELETE /api/items/:id: Eliminar un elemento por ID.

Estos son los endpoints que puedes utilizar para manejar la información de los elementos en tu base de datos.


###  OTRAS FUNCIONALIDADES

## Detener los contenedores

Para detener los contenedores, puedes usar el siguiente comando:

docker-compose down


Este comando detendrá y eliminará los contenedores, pero conservará los volúmenes de datos de MongoDB.

## Conectividad

Los contenedores están configurados para comunicarse entre sí a través de una red personalizada llamada app-network. MongoDB está disponible en el contenedor de la aplicación mediante la URL de conexión:

mongodb://mongo:27017/mydb

## Ver los logs de los contenedores

Para ver los logs de la aplicación o de MongoDB, usa los siguientes comandos:

#### Para ver los logs de la aplicación:
>>> docker-compose logs node-app 

#### Para ver los logs de MongoDB:
>>> docker-compose logs mongo

##  Solución de problemas

Si encuentras problemas al conectar a MongoDB, asegúrate de que ambos contenedores estén en la misma red. Esto está garantizado por Docker Compose.

Si la aplicación no puede conectarse a MongoDB, verifica los logs de MongoDB para asegurarte de que el servicio está corriendo correctamente.

## Estructura del Proyecto
.
├── Dockerfile             # Dockerfile para la aplicación Node.js

├── docker-compose.yml     # Archivo de configuración para Docker Compose

├── package.json           # Dependencias de la aplicación Node.js

└── src                    # Código fuente de la aplicación

    └── routes

        └── itemRoutes.js  # Rutas CRUD para manejar los elementos
        

## Licencia

EP NEWMAN - Maestrante: DARIO VASQUEZ SILVA

## CARPETA CON LOS LOGS SOLICITADA

Se ubica en la carpeta carpeta_logs en atención a lo solicitado.
