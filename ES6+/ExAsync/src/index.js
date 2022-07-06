import "core-js"
import "regenerator-runtime"
import { spaceship } from "./spaceship";

var sophia = new spaceship("Sophia", 10, 5, 70);
var amisterdã = new spaceship("Amisterdã", 14, 10, 40);
var estrelaAna = new spaceship("Estrela Ana", 20, 4, 80);


// sophia


sophia.porcentage()
try {
    let messageStart = await sophia.start();
    console.log(messageStart);
    let normalizeShieldVar = await sophia.normalizeShield();
    console.log(normalizeShieldVar);
} catch (error) {
    console.log(error);
}



// amisterdã

amisterdã.porcentage()
try {
    let messageStart = await amisterdã.start()
    console.log(messageStart);
    let normalizeShieldVar = await amisterdã.normalizeShield();
    console.log(normalizeShieldVar);
} catch (error) {
    console.log(error);
}


// estrelaAna

estrelaAna.porcentage()
try {
    let messageStart = await estrelaAna.start()
    console.log(messageStart);
    let normalizeShieldVar = await estrelaAna.normalizeShield();
    console.log(normalizeShieldVar);
} catch (error) {
    console.log(error);
}


