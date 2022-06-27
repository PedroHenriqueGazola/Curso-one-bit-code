let planet_json = `{
    "name": "terra",
    "physicalCharacteriscts": {
    "surfaceArea": 510071000,
    "equatorialDiameter": 12756.2
    },
    "colors": ["azul", "Branco", "Marrom"],
    "startRotation": "00:00",
    "finishRotation": "23:59"
    }`; 
let planet = JSON.parse(planet_json);
console.log(planet);
console.log(planet.name);