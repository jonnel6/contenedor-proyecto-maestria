# Proyecto Maestría

Este proyecto es una aplicación Node.js que se conecta a una base de datos MongoDB. Está configurado para ejecutarse con Docker y Docker Compose.

## Requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instrucciones

### 1. Clonar el repositorio

Primero, clona este repositorio a tu máquina local:

bash
>>> git clone https://github.com/jonnel6/contenedor-proyecto-maestria.git
>>> cd proyecto-maestria

## Este proyecto incluye un archivo docker-compose.yml que define dos contenedores:
## node-app: La aplicación Node.js.
## mongo: El contenedor de MongoDB.

### 2.Para construir y ejecutar ambos contenedores, usa el siguiente comando:

>>> docker-compose up --build


Este comando descargará las imágenes necesarias, construirá la aplicación y levantará ambos contenedores. 
La aplicación estará disponible en http://localhost:3000


### 3. Para la ejecución del CRUD debería usar POSTMAN (se adjunta el coleccionable en la ruta del proyecto en github)

### 3.1. Crear un nuevo elemento
### Método HTTP: POST
URL: http://localhost:3000/api/items
Descripción: Crea un nuevo elemento en la base de datos.

Cuerpo de la solicitud (JSON):

{
  "name": "Elemento 1" 
}

### 3.2. Obtener todos los elementos
### Método HTTP: GET

URL: [/api/items/](http://localhost:3000/api/items)

Descripción: Recupera todos los elementos de la base de datos.

### 3.3. Obtener un elemento por ID
### Método HTTP: GET

URL: [/api/items/:id](http://localhost:3000/api/items/68a6d80013dcad3e748e9a68)

Descripción: Recupera un solo elemento por su ID.

### 3.4. Actualizar un elemento
### Método HTTP: PUT

Método HTTP: PUT

URL: [/api/items/:id](http://localhost:3000/api/items/68a6d80013dcad3e748e9a68)

Descripción: Actualiza un elemento existente por su ID.
{
        "_id": "68a6d80013dcad3e748e9a68",
        "name": "Item CAMBIADO",
        "__v": 0
}

### 3.5. Actualizar un elemento
### Método HTTP: DELETE

URL: [/api/items/:id](http://localhost:3000/api/items/68a7fe9213dcad3e748e9a6d)

Descripción: Elimina un elemento de la base de datos por su ID.

Respuesta:

{
    "message": "Item eliminado"
}

## Resumen de los 5 endpoints:

>>> POST /api/items: Crear un nuevo elemento.
>>>GET /api/items: Obtener todos los elementos.
>>>GET /api/items/:id: Obtener un elemento por ID.
>>>PUT /api/items/:id: Actualizar un elemento por ID.
>>>DELETE /api/items/:id: Eliminar un elemento por ID.

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

























3. Construye y levanta los contenedores con el siguiente comando:

docker-compose up --build

Este comando descargará las imágenes necesarias, construirá las imágenes personalizadas y levantará los contenedores de la API y la base de datos.

## Nota: Si el proceso es exitoso, deberías ver en la consola mensajes que indican que los servicios están siendo ejecutados.

Una vez que los contenedores estén corriendo, la API estará disponible en el siguiente endpoint:

>>> URL de la API: http://localhost:3000

## Uso de la API

Con la API en funcionamiento, puedes realizar peticiones a los siguientes endpoints usando herramientas como Postman
 para interactuar con la API.

## Endpoints de la API

GET /api/elementos

Descripción: Recupera todos los elementos almacenados en la base de datos.

Ejemplo de solicitud:

GET http://localhost:3000/api/elementos


POST /api/elementos

Descripción: Crea un nuevo elemento en la base de datos.

Body (JSON):

{
  "nombre": "Elemento1",
  "descripcion": "Descripción del elemento"
}


Ejemplo de solicitud:

POST http://localhost:3000/api/elementos


PUT /api/elementos/{id}

Descripción: Actualiza un elemento existente en la base de datos, basado en su ID.

Body (JSON):

{
  "nombre": "Elemento actualizado",
  "descripcion": "Descripción actualizada"
}


Ejemplo de solicitud:

PUT http://localhost:3000/api/elementos/1


DELETE /api/elementos/{id}

Descripción: Elimina un elemento existente en la base de datos, basado en su ID.

Ejemplo de solicitud:

DELETE http://localhost:3000/api/elementos/1

Detalles Técnicos

La base de datos utilizada en este proyecto es MongoDB, gestionada a través de un contenedor Docker.

El servidor de la API está implementado en Node.js y se encuentra en otro contenedor Docker.

Docker Compose se usa para gestionar ambos servicios (API y base de datos) como una sola aplicación.

La configuración de red de Docker Compose permite que la API se comunique directamente con la base de datos MongoDB mediante el nombre del servicio (mongo).

Conclusiones

Uso de Docker Compose para la orquestación de servicios: Este proyecto demuestra cómo Docker Compose facilita la administración de aplicaciones que requieren varios contenedores, como una base de datos y una API, de manera sencilla y eficiente. Utilizando un archivo de configuración único (docker-compose.yml), podemos levantar y gestionar ambos servicios de forma coordinada.

Facilidad para la realización de pruebas: Gracias a la contenerización con Docker, es posible reproducir el entorno de ejecución del proyecto de manera consistente. Usando herramientas como Postman, se puede interactuar con los endpoints de la API de forma sencilla, permitiendo realizar pruebas de manera rápida y sin complicaciones.

Autores

Tu Nombre


Este archivo `README.md` incluye las instrucciones completas para que el proyecto