import planet from './planet';
import operation from './operation';

var planets = [];

let earth = new planet('Earth', 1);
planets.push(earth);
planets.push(new planet('Mercury', 0.39));
planets.push(new planet('Venus', 0.72));
planets.push(new planet('Marte', 1.52));
planets.push(new planet('Jupiter', 5.2));
planets.push(new planet('Saturno', 9.58));
planets.push(new planet('Urano', 19.2));
planets.push(new planet('Neturno', 30.1));

planets.forEach(function(planet) {
    console.log(planet.name + ': ' + 'Distancia em AUs: ' + planet.distance + ' AU,' +' Distancia em Km: ' + operation(planet.distance));
});
