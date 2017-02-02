# Cliente  (Aplicación SPA en mithril.js con sintaxis JSX usando ES6)

Este es un modelo esquelo, gestionado por [Brunch](http://brunch.io).

## Pasos iniciales

* Instale (Si no lo tiene instalado):
    * [Node.js](http://nodejs.org): `brew install node` en OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * plugins de brunch y dependencias de la app: `npm install`
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## ES7

To use proposed JS features not included into ES6, do this:

* `npm install --save-dev babel-preset-stage-0`
* in `brunch-config.js`, add the preset: `presets: ['es2015', 'stage-0']`


# Api 

A continuación descripción de las tecnologías y procesos para el desarrollo del API

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
