const fs = require('fs');

fs.writeFile('teste.txt', 'Hello World!', err => { // cria o arquivo teste.txt com o conteudo Hello World!
    console.log(err);
});
fs.appendFile('teste.txt', '\nHello World!', err => { // adiciona no arquivo teste.txt o conteudo Hello World!
    console.log(err);
});
fs.rename('teste.txt', 'teste2.txt', err => { // renomeia o arquivo teste.txt para teste2.txt
    console.log(err);
});
fs.unlink('teste2.txt', err => { // deleta o arquivo teste2.txt
    console.log(err);
});
console.log(__dirname); // mostra aonde esta o diretorio atual