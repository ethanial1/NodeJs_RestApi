// Recibe el dato que envia el cliente 
function bodyParser(request){
    let totalData = '';

    request
        .on('data', chunk => {
            // almacenamos los datos que llegan
            totalData += chunk;
        })
        // Se termino de enviar los datos
        .on('end', () => {
            // convertimos los datos a json y lo guardamos en el body del request
            request.body = JSON.parse(totalData);
        })
        // Si existe un error
        .on('error', err => {
            console.log(err);
        })
}