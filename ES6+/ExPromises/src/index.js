import { spaceship } from "./spaceship";

var sophia = new spaceship("Sophia", 10, 5);
var amisterdã = new spaceship("Amisterdã", 14, 10);
var estrelaAna = new spaceship("Estrela Ana", 20, 4);


// sophia
sophia.porcentage()
sophia.start().then(function (message) {
    console.log(message);
}).catch(function (message) {
    console.log(message);
})

// amisterdã
amisterdã.porcentage()
amisterdã.start().then(function (message) {
    console.log(message);
}).catch(function (message) {
    console.log(message);
})

// estrelaAna
estrelaAna.porcentage()
estrelaAna.start().then(function (message) {
    console.log(message);
}).catch(function (message) {
    console.log(message);
})

console.log(sophia);
console.log(amisterdã);
console.log(estrelaAna);


