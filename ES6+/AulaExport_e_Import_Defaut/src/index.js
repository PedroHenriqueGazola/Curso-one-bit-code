import Spaceship from "./spaceship";
import armamentKind from "./armament";
import defenseKind from "./defense";

const spaceship = new Spaceship("USS Enterprice", "James", armamentKind.laser, defenseKind.shield);

var message = `Nome da nave: ${spaceship.name}, Capitão: ${spaceship.captain}, Armamentos: ${spaceship.armaments}, Defesas: ${spaceship.defenses}`;

console.log(message);