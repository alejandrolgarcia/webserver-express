const http = require('http');

// crear el servidor
// configurar el puerto
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Alejandro',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');