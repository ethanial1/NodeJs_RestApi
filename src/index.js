// Sirve para que puedamos arrancar la app

// http: permite crear un servidor, manejar las peticiones y respuesta que llegan
const http = require('http');

// Creamos el servidor, en el hay una funcion que maneja las peticiones
// request: lo que envia el usuario
// response: lo que el servidor puede responder
const server = http.createServer((request, response) => {
    // Obtenemos las partes del objeto.
    // metodos: get, post, put, delete
    const {url, method} = request;
    // imprimimos la respuesta
    console.log(`URL: ${url} - Method: ${method}`);

    // Cabeceras: información del tipo de archivo
    response.writeHead(200, {'Content-Type': 'text/plan'})
    response.write('Recibido');
    response.end();
});

// Hacemos que el servidor empiece a escuchar
// Recibe como parámetro el puerto
server.listen(3000);