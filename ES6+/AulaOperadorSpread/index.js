let spaceships = ["Colossos", "Artemis", "fenix"];

console.log(...spaceships); // '...' é o operador spread, ele pega todos os elementos de um array e coloca em uma unica string

let newSpaceships = [...spaceships, "Apollo"]; // o operador spread também pode ser usado para concatenar arrays, todos os elementos serao adicionados em um unico array, caso o operador spread nao seja usado, os elementos serao adicionados em um array separado resultando em dois arrays: [ [ 'Colossos', 'Artemis', 'fenix' ], 'Apollo' ]
console.log(newSpaceships);

function speedUp (velocity, acceleration) {
    return velocity + acceleration;
}

let spaceshipAcceleration = [10, 5];

let newVelocity = speedUp(spaceshipAcceleration);
console.log(newVelocity);
// caso o operador spread nao seja usado, o resultado seria: 10,5undefined e nao 15