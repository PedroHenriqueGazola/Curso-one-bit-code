const process = require('process');

//process.stdout.write('Hello World!'); // escreve no node

process.stdin.on('data', (data) => { // escuta o que o usuario digitar  
    process.stdout.write(`Você digitou: ${data}`);
    process.exit();
})