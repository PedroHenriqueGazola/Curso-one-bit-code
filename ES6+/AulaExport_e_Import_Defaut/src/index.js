import Spaceship from "./spaceship";
import armamentKind from "./armament";
import {shieldDefenses} from "./defense";

const spaceship = new Spaceship("USS Enterprice", "James", armamentKind.laser, shieldDefenses);

var message = `Nome da nave: ${spaceship.name}, Capitão: ${spaceship.captain}, Armamentos: ${spaceship.armaments}, Defesas: ${spaceship.defenses}`;

console.log(message);