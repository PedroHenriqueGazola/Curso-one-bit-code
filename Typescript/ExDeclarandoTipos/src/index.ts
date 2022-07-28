let spaceships = []

function addSpaceship(name: string, pilot: string, limitCrew: number) {
    const spaceship = {
        name,
        pilot,
        limitCrew,
        crew: [],
        inMission: false,
    }
    alert(`The spaceship ${spaceship.name}, directed by ${spaceship.pilot} is ready to be sent to the mission!`)
    spaceships.push(spaceship)
}

function findSpaceship(name: string) {
    let spaceship: {
        name: string,
        pilot: string,
        limitCrew: number,
        crew: string[],
        inMission: boolean
    }
    spaceship = spaceships.find(spaceship => spaceship.name === name)
    return spaceship;
}

function addNewCrew(member: string, spaceship: { name: string, limitCrew: number, crew: string[] }) {
    if (spaceship.crew.length >= spaceship.limitCrew) {
        alert(`The spaceship ${spaceship.name} is full!`)
    } else {
        spaceship.crew.push(member);
        alert(`The new crew member ${member} has been added to the spaceship ${spaceship.name}!`);
    }
}

function sendSpaceshipToMission(spaceship: { name: string, limitCrew: number, crew: string[], inMission: boolean }) {
    if (spaceship.inMission) {
        alert(`The spaceship ${spaceship.name} is on a mission !`)
    } else if (spaceship.crew.length < (spaceship.limitCrew / 3)) {
        alert(`The spaceship ${spaceship.name} is not ready to be sent to the mission!`)
    } else {
        spaceship.inMission = true;
        alert(`The spaceship ${spaceship.name} is ready to be sent to the mission!`)
    }
}

function firstMenuOption() {
    const name = prompt('What is the name of your spaceship?');
    const pilot = prompt('What is the name of your spaceship pilot?');
    const limitCrew = Number(prompt('What is the limit of the crew of your spaceship?'));
    addSpaceship(name, pilot, limitCrew);
}

function secondMenuOption() {
    const member = prompt('What is the name of the new crew member?');
    const spaceshipName = prompt('which spaceship do you want to add the new crew member?');
    const spaceship = findSpaceship(spaceshipName);

    if (spaceship) {
        const confirmation = confirm(`Are you sure you want to add the new crew member ${member} to the spaceship ${spaceship.name}?`);
        if (confirmation) {
            addNewCrew(member, spaceship);
        }
    }
}

function thirdMenuOption() {
    const spaceshipName = prompt('which spaceship do you want to send to the mission?');

    const spaceship = findSpaceship(spaceshipName);

    if (spaceship) {
        const confirmation = confirm(`Are you sure you want to send the spaceship ${spaceship.name} to the mission?`);
        if (confirmation) {
            sendSpaceshipToMission(spaceship);
        }
    }
}

function fourthMenuOption() {
    let list = 'Naves Registradas:\n'

    spaceships.forEach((spaceship: {
        name: string,
        pilot: string,
        limitCrew: number,
        crew: string[],
        inMission: boolean
    }) => {
        list += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
      Tamanho Máximo da Triuplação: ${spaceship.limitCrew}
      Tripulantes: ${spaceship.crew.length}
    `

        spaceship.crew.forEach(member => {
            list += `    - ${member}\n`
        })

    })

    alert(list)
}

let userOption = 0;

while (userOption !== 5) {
    const menu = `
    1 - Add a new spaceship
    2 - Add a new crew member
    3 - Send a spaceship to the mission
    4 - List all spaceships
    5 - Exit
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
            alert('Bye bye!');
            break;
        default:
            alert('Invalid option!');
    }
}