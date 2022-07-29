const planets =  []

type PlanetSituation = 'habitable' | 'uninhabitable' | 'habitated' | 'unknown'

type PlanetCoord = [number, number, number, number]

function addPlanet(name: string, coord: PlanetCoord, situation: PlanetSituation) {
    const Planet = ({
        name,
        coord,
        situation,
        sattelites: []
    })
    alert(`The planet ${name} has been added to the database!`)
    planets.push(Planet)
}

function findPlanet(name: string) {
    let planet: {
        name: string,
        coord: [number, number, number, number],
        situation: 'habitable' | 'uninhabitable' | 'habitated' | 'unknown',
        sattelites: string[]
    }
    planet = planets.find(planet => planet.name === name)
    return planet;
}

function attPlanetSituation(name: string, newSituation: 'habitable' | 'uninhabitable' | 'habitated' | 'unknown') {
    const choosenPlanet = findPlanet(name)
    choosenPlanet.situation = newSituation
    alert(`The situation of the planet ${name} has been updated!`)
}

function findSattelite(name: string, sattelites: string) {
    const choosenPlanet = findPlanet(name)
    const choosenSattelite = choosenPlanet.sattelites.find(sattelite => sattelite === sattelites)
    return choosenSattelite
}

function addSattelite(name: string, sattelites: string) {
    findPlanet(name).sattelites.push(sattelites)
    alert(`The sattelite ${sattelites} has been added to the planet ${name}!`)
}

function removeSattelite(name: string,  sattelites: string) {
    const choosenSattelite = findSattelite(name, sattelites)
    const choosenPlanet = findPlanet(name)
    choosenPlanet.sattelites.splice(choosenPlanet.sattelites.indexOf(choosenSattelite), 1)
}

function firstMenuOption() {
    const name = prompt('What is the name of the planet?');
    const coord1 = Number(prompt('What is the first coordinates of the planet?'));
    const coord2 = Number(prompt('What is the second coordinates of the planet?'));
    const coord3 = Number(prompt('What is the third coordinates of the planet?'));
    const coord4 = Number(prompt('What is the fourth coordinates of the planet?'));
    const situation = prompt('What is the situation of the planet? 1- habitable 2- uninhabitable 3- habitated 4- unknown');
    if (situation === '1') {
        addPlanet(name, [coord1, coord2, coord3, coord4], 'habitable')
    } else if (situation === '2') {
        addPlanet(name, [coord1, coord2, coord3, coord4], 'uninhabitable')
    } else if (situation === '3') {
        addPlanet(name, [coord1, coord2, coord3, coord4], 'habitated')
    } else if (situation === '4') {
        addPlanet(name, [coord1, coord2, coord3, coord4], 'unknown')
    }
}

function secondMenuOption() {
    const name = prompt('What is the name of the planet?');
    const newSituation = prompt('What is the new situation of the planet? \n1- habitable \n2- uninhabitable \n3- habitated \n4- unknown');
    if (newSituation === '1') {
        attPlanetSituation(name, 'habitable')
    } else if (newSituation === '2') {
        attPlanetSituation(name, 'uninhabitable')
    } else if (newSituation === '3') {
        attPlanetSituation(name, 'habitated')
    } else if (newSituation === '4') {
        attPlanetSituation(name, 'unknown')
    } else {
        alert('Invalid option!')
    }
}

function thirdMenuOption() {
    const name = prompt('What is the name of the planet?');
    const sattelites = prompt('What is the sattelite of the planet?');
    addSattelite(name, sattelites);
}

function fourthMenuOption() {
    const name = prompt('What is the name of the planet?');
    const sattelites = prompt('What is the sattelite of the planet?');
    removeSattelite(name, sattelites);
}

function fifthMenuOption() {
    let list = 'Planets:\n'

    planets.forEach((planet: {
        name: string,
        coord: string,
        situation: string,
        sattelites: string[]
    }) => {
        list += `
      Planet: ${planet.name}
      Coordinates: ${planet.coord}
      Situation: ${planet.situation}
    `

        planet.sattelites.forEach(sattelite => {
            list += `  Sattelites- ${sattelite}\n`
        })

    })

    alert(list)
}

let userOption = 0;

while (userOption !== 6) {
    const menu = `
    1 - Add a new planet
    2 - Update a planet situation
    3 - Add a sattelite to a planet
    4 - Remove a sattelite from a planet
    5 - Show all planets
    6 - Exit
    `;
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
            alert('bye bye')
            break;
        default:
            alert('Invalid option!');
    }
}