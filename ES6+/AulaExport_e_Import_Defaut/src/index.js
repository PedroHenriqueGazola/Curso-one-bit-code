import Spaceship from "./spaceship";
import armamentKind from "./armament";
import {shieldDef as shieldD, armorDef} from "./defense"; // rename the import to shieldDef

const spaceship = new Spaceship("USS Enterprice", "James", armamentKind.laser, shieldD);

var message = `Nome da nave: ${spaceship.name}, Capitão: ${spaceship.captain}, Armamentos: ${spaceship.armaments}, Defesas: ${spaceship.defenses + ", " + armorDef}`;

console.log(message);