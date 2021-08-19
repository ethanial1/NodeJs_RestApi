// Sirve para que puedamos arrancar la app

// http: permite crear un servidor, manejar las peticiones y respuesta que llegan
const http = require('http');

// Creamos el servidor, en el hay una funcion que maneja las peticiones
// request: lo que envia el usuario
// response: lo que el servidor puede responder
http.createServer((request, response) => {
    // Obtenemos las partes del objeto.
    // metodos: get, post, put, delete
    const {url, method} = request;
    // imprimimos la respuesta
    console.log(`URL: ${url} - Method: ${method}`);

    response.write('Recibido');
})