# Cliente  (Aplicación SPA en mithril.js con sintaxis JSX usando ES6)
(Folder acmetravel-client)
Este es un esqueleto, gestionado por [Brunch](http://brunch.io).

## Pasos iniciales
(Preparar la API primero, guía en la parte de abajo)

* Instalación (Si no lo tiene instalado):
    * Descargar el repositorio y ubicarse en el folder acmetravel-client
    * [Node.js](http://nodejs.org): `brew install node` en OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * plugins de brunch y dependencias de la app: `npm install`
* Para correr:
    * `brunch watch --server` — Observa el proyecto con la reconstrucción continua.
    * `brunch build --production` — Construye proyecto minificado para producción.
    * Despues de elejir alguna de las dos opcione anteriores la aplicación se puede apreciar en las urls [Login](http://localhost:3333/) y [Dashboard](http://localhost:3333/#/dashboard) Temporalmente no están sujetas a JWT, ni roles para facilitar visuaización.
* Sobres las carpetas:
    * `public/`este directorio es totalmente auto-generado y servido por el servidor HTTP.  Se escribe el código en el directorio `app/`.
    * Acá van los archivos estaticos `app/assets/` que finalmente quedan en `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)



# Api (Ruby on Rails 5)
(Folder acmetravel-client)
A continuación descripción de las tecnologías y procesos para el desarrollo del API


* Requerimientos del sistema
    * [Mysql](https://www.mysql.com/)
* Instalación
    * Descargar el repositorio y ubicarse en el folder acmetravel
* Creacin de la base de datos
    * Crear la base de datos llamada `acmetravel` en mysql
* Inicialización de la base de datos
    * Correr el comando `rake db:migrate` para crear las tablas 
* How to run the test suite
    * Correr el comando `rails server` y un servidor quedará escuchando por el puerto 3000
* ...
