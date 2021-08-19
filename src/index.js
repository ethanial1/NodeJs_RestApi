// Sirve para que puedamos arrancar la app

// http: permite crear un servidor, manejar las peticiones y respuesta que llegan
const http = require('http');

// Contsnate que funciona como base de datos
let database = [];

// Funcion que contiene la información de la base de datos y regresa la información al usuario
function getTaskHandler(request, response){
    response.writeHead(200, {'Content-Type': 'application/json'});
    // Respuesta a enviar
    response.write(
        // Convertimos Json a string 
        JSON.stringify(database)
    );
    response.end();
}

// Crear una tarea
function crearTaskHandler(){

}


// Creamos el servidor, en el hay una funcion que maneja las peticiones
// request: lo que envia el usuario
// response: lo que el servidor puede responder
const server = http.createServer((request, response) => {
    // Obtenemos las partes del objeto.
    // metodos: get, post, put, delete
    const {url, method} = request;
    // imprimimos la respuesta
    console.log(`URL: ${url} - Method: ${method}`);

    // Dependiendo del tipo de metodo hacemos algo
    switch(method){
        case "GET":
            if(url === '/'){
                // Cabeceras: información del tipo de archivo
                // En las rest-api enviamos archivos json
                response.writeHead(200, {'Content-Type': 'application/json'});
                // Respuesta a enviar
                response.write(
                    // Convertimos Json a string 
                    JSON.stringify(
                        {
                            mensage: "Hello world"
                        }
                    )
                );
                response.end();
            }
            if (url == '/tareas'){
                getTaskHandler(request, response);
            }
            break
        case "POST":
            break

    }
});

// Hacemos que el servidor empiece a escuchar
// Recibe como parámetro el puerto
server.listen(3000);