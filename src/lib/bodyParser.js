// Recibe el dato que envia el cliente 
function bodyParser(request){
    
    // Para evitar usar un callback usamos las promesas
    // la promesa puede ser erronea o satisfactoria
    new Promise((resolve, reject) => {

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
            resolve(); // termina la promesa de forma exitosa
        })
        // Si existe un error
        .on('error', err => {
            console.log(err);
            reject(); // termina con un error
        })
    });
}