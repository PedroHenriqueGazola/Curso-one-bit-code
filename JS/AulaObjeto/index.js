var produtos = {
    nome: "Notebook",
    preco: 1299.90,
    desconto: 0.15
}
produtos.quantidade = 10;  // adicionando um novo atributo//

console.log(produtos);


// Exercício 2

var spaceShip = {
    nome: "Space X",
    modelo: "Falcon 1",
    ano: 2018,
    turnOn: function () {
        console.log("Ligando...");
    }
}
 spaceShip.turnOn();

spaceShip.velocity = 0;

spaceShip.speedUp = function (acceleration) {
    this.velocity += acceleration; // this. é o objeto atual//
}

spaceShip.speedUp(10);

console.log(spaceShip); 