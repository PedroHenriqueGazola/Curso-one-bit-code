function sendSpaceship(spaceship: {pilot: string, copilot?: string}) { // para que o nao seja obrigado a usar um dos argumnetos, podemos usar o "?"

}

sendSpaceship({pilot: 'Pedro'})


// unknown type

let input: unknown; // A variavel declarada nao possui um tipo especifico

input = 5;
input = 'Pedro';
input = false; 