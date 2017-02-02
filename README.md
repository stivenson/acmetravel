# Api (Ruby on Rails 5)
(Folder acmetravel-client)
A continuación descripción de las tecnologías y procesos para el desarrollo del API


* Requerimientos del sistema
    * [Mysql](https://www.mysql.com/)
* Instalación
    * Descargar el repositorio y ubicarse en el folder acmetravel
* Creación de la base de datos
    * Crear la base de datos llamada `acmetravel` en mysql
* Inicialización de la base de datos
    * Correr el comando `rake db:migrate` para crear las tablas 
    * Correr el comando `rake db:seed` para crear unos registros iniciales para poder ingresar al sistema  
* Para desarrollo
    * Correr el comando `rails server` y un servidor quedará escuchando por el puerto 3000



# Cliente  (Aplicación SPA en mithril.js con sintaxis JSX usando ES6)
(Folder acmetravel-client) A continuación descripción de las tecnologías y procesos para el desarrollo del cliente web (opté por que la app No fuese monolítica)
Este es un esqueleto, gestionado por [Brunch](http://brunch.io).

## Pasos iniciales

* Instalación:
    * Descargar el repositorio y ubicarse en el folder acmetravel-client
    * [Node.js](http://nodejs.org): `brew install node` en OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * plugins de brunch y dependencias de la app: `npm install`
* Para correr:
    * `brunch build --production` — Construye proyecto minificado para producción.
    * `brunch watch --server` — Observa el proyecto con la reconstrucción continua (Desarrollo).
    * Despues correr el proyecto para desarrollo, cada vez que el código cambie, todas las tareas automatizadas, incluyendo recargar el navegador (Si es necesario) se ejecutarán, todo es para tratar e tener productividad 

    La aplicación se puede apreciar en las urls [Login](http://localhost:3333/) (http://localhost:3333/)

* Sobres las carpetas:
    * `public/`este directorio es totalmente auto-generado y servido por el servidor HTTP.  Se escribe el código en el directorio `app/`.
    * Acá van los archivos estaticos `app/assets/` que finalmente quedan en `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)




## Vídeo de como debería lucir la navegación
* pendiente


Mejoras pendientes (Que tuvieron en cuenta)

* Encriptar las contraseñas. 
* Autenticación con token (Al no ser monolítica).
* Validacion de permisos de roles a nivel de rutas (middlewares).
* Que el email no se repita.