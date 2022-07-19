const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method); // mostra o metodo da requisicao
    console.log(req.url); // mostra o url da requisicao
    res.statusCode = 200; // define o status da resposta, 200 = OK
    res.end('<h1>Hello World!</h1>'); // envia a resposta
}) // cria o servidor, passando req e res como parametros
server.listen(3000, () => {
    console.log('Servidor ativo');
});