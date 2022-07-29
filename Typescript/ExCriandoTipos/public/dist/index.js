var planets = [];
function addPlanet(name, coord, situation) {
    var Planet = ({
        name: name,
        coord: coord,
        situation: situation,
        sattelites: []
    });
    alert("The planet ".concat(name, " has been added to the database!"));
    planets.push(Planet);
}
function findPlanet(name) {
    var planet;
    planet = planets.find(function (planet) { return planet.name === name; });
    return planet;
}
function attPlanetSituation(name, newSituation) {
    var choosenPlanet = findPlanet(name);
    choosenPlanet.situation = newSituation;
    alert("The situation of the planet ".concat(name, " has been updated!"));
}
function findSattelite(name, sattelites) {
    var choosenPlanet = findPlanet(name);
    var choosenSattelite = choosenPlanet.sattelites.find(function (sattelite) { return sattelite === sattelites; });
    return choosenSattelite;
}
function addSattelite(name, sattelites) {
    findPlanet(name).sattelites.push(sattelites);
    alert("The sattelite ".concat(sattelites, " has been added to the planet ").concat(name, "!"));
}
function removeSattelite(name, sattelites) {
    var choosenSattelite = findSattelite(name, sattelites);
    var choosenPlanet = findPlanet(name);
    choosenPlanet.sattelites.splice(choosenPlanet.sattelites.indexOf(choosenSattelite), 1);
}
function firstMenuOption() {
    var name = prompt('What is the name of the planet?');
    var coord1 = Number(prompt('What is the first coordinates of the planet?'));
    var coord2 = Number(prompt('What is the second coordinates of the planet?'));
    var coord3 = Number(prompt('What is the third coordinates of the planet?'));
    var coord4 = Number(prompt('What is the fourth coordinates of the planet?'));
    var situation = prompt('What is the situation of the planet? 1- habitable 2- uninhabitable 3- habitated 4- unknown');
    if (situation === '1') {
        addPlanet(name, [coord1, coord2, coord3, coord4], 'habitable');
    }
    else if (situation === '2') {
        addPlanet(name, [coord1, coord2, coord3, coord4], 'uninhabitable');
    }
    else if (situation === '3') {
        addPlanet(name, [coord1, coord2, coord3, coord4], 'habitated');
    }
    else if (situation === '4') {
        addPlanet(name, [coord1, coord2, coord3, coord4], 'unknown');
    }
}
function secondMenuOption() {
    var name = prompt('What is the name of the planet?');
    var newSituation = prompt('What is the new situation of the planet? \n1- habitable \n2- uninhabitable \n3- habitated \n4- unknown');
    if (newSituation === '1') {
        attPlanetSituation(name, 'habitable');
    }
    else if (newSituation === '2') {
        attPlanetSituation(name, 'uninhabitable');
    }
    else if (newSituation === '3') {
        attPlanetSituation(name, 'habitated');
    }
    else if (newSituation === '4') {
        attPlanetSituation(name, 'unknown');
    }
    else {
        alert('Invalid option!');
    }
}
function thirdMenuOption() {
    var name = prompt('What is the name of the planet?');
    var sattelites = prompt('What is the sattelite of the planet?');
    addSattelite(name, sattelites);
}
function fourthMenuOption() {
    var name = prompt('What is the name of the planet?');
    var sattelites = prompt('What is the sattelite of the planet?');
    removeSattelite(name, sattelites);
}
function fifthMenuOption() {
    var list = 'Planets:\n';
    planets.forEach(function (planet) {
        list += "\n      Planet: ".concat(planet.name, "\n      Coordinates: ").concat(planet.coord, "\n      Situation: ").concat(planet.situation, "\n    ");
        planet.sattelites.forEach(function (sattelite) {
            list += "  Sattelites- ".concat(sattelite, "\n");
        });
    });
    alert(list);
}
var userOption = 0;
while (userOption !== 6) {
    var menu = "\n    1 - Add a new planet\n    2 - Update a planet situation\n    3 - Add a sattelite to a planet\n    4 - Remove a sattelite from a planet\n    5 - Show all planets\n    6 - Exit\n    ";
    userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert('bye bye');
            break;
        default:
            alert('Invalid option!');
    }
}
