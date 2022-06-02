// Splice

var spaceship = ["Elemental", "darvin", "artemis", "supernova"]

var removedItem = spaceship.splice(1, 2, "demeter", "puler", "golias") // remoçao dos elementos 1 e 2, e adiçao de 3 elementos, variavel armazenando os elementos removidos//

console.log(spaceship)
console.log(removedItem)

// Slice

var ExtratedItem = spaceship.slice(1, 3) // pega os elementos do indice 1 ate o indice 3, e armazena em uma variavel sem alterar a array original//

console.log(spaceship)
console.log(ExtratedItem)