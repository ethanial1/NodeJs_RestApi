// Sirve para que puedamos arrancar la app

// http: permite crear un servidor, manejar las peticiones y respuesta que llegan
const http = require('http');

// reuerimos el bodyParser
const {bodyParser} = require('./lib/bodyParser')

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
async function crearTaskHandler(request, response){
    // Usamos el bodyParser
    await bodyParser(request);
    // imprimimos 
    //console.log(request.body);
    // Guardamos en la base de datos
    database.push(request.body);
    response.writeHead(200, {'Content-Type': 'application/json'});
    // Respondemos el objeto guardato
    response.write(JSON.stringify(database));
    response.end();
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
            // URL inicial 
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
            if(url == '/tareas'){
                crearTaskHandler(request, response);
            }
            break

    }
});

// Hacemos que el servidor empiece a escuchar
// Recibe como parámetro el puerto
server.listen(3000);