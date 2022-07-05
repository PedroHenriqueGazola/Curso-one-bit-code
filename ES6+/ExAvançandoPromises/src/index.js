import { spaceship } from "./spaceship";

var sophia = new spaceship("Sophia", 10, 5, 70);
var amisterdã = new spaceship("Amisterdã", 14, 10, 40);
var estrelaAna = new spaceship("Estrela Ana", 20, 4, 80);


// sophia
sophia.porcentage()
sophia.start().then(function (message) {
    console.log(message);
}).catch(function (message) {
     console.log(message);
})
sophia.normalizeShield().then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
})

// amisterdã
amisterdã.porcentage()
amisterdã.start().then(function (message) {
    console.log(message);
}).catch(function (message) {
    console.log(message);
})
amisterdã.normalizeShield().then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
})

// estrelaAna
estrelaAna.porcentage()
estrelaAna.start().then(function (message) {
    console.log(message);
}).catch(function (message) {
    console.log(message);
})
estrelaAna.normalizeShield().then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
})


console.log(sophia);
console.log(amisterdã);
console.log(estrelaAna);


