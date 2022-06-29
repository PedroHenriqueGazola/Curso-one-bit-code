const planet = require('./planet');
const solarSystem = require('./solar_system');
const moment = require('moment');

const earth = new planet('Terra', 5100000);
earth.rotate();

solarSystem.planets.push(earth);
solarSystem.planets.push(new planet('Marte', 6500000));
solarSystem.planets.push(new planet('Jupiter', 70000000));
solarSystem.planets.push(new planet('Saturno', 60000000));

console.log(solarSystem);
console.log(moment().format('YYYY-MM-DD'));

document.getElementById("data").innerHTML = moment().format('YYYY-MM-DD');