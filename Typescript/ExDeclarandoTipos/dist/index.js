var spaceships = [];
function addSpaceship(name, pilot, limitCrew) {
    var spaceship = {
        name: name,
        pilot: pilot,
        limitCrew: limitCrew,
        crew: [],
        inMission: false,
    };
    alert("The spaceship ".concat(spaceship.name, ", directed by ").concat(spaceship.pilot, " is ready to be sent to the mission!"));
    spaceships.push(spaceship);
}
function findSpaceship(name) {
    var spaceship;
    spaceship = spaceships.find(function (spaceship) { return spaceship.name === name; });
    return spaceship;
}
function addNewCrew(member, spaceship) {
    if (spaceship.crew.length >= spaceship.limitCrew) {
        alert("The spaceship ".concat(spaceship.name, " is full!"));
    }
    else {
        spaceship.crew.push(member);
        alert("The new crew member ".concat(member, " has been added to the spaceship ").concat(spaceship.name, "!"));
    }
}
function sendSpaceshipToMission(spaceship) {
    if (spaceship.inMission) {
        alert("The spaceship ".concat(spaceship.name, " is on a mission !"));
    }
    else if (spaceship.crew.length < (spaceship.limitCrew / 3)) {
        alert("The spaceship ".concat(spaceship.name, " is not ready to be sent to the mission!"));
    }
    else {
        spaceship.inMission = true;
        alert("The spaceship ".concat(spaceship.name, " is ready to be sent to the mission!"));
    }
}
function firstMenuOption() {
    var name = prompt('What is the name of your spaceship?');
    var pilot = prompt('What is the name of your spaceship pilot?');
    var limitCrew = Number(prompt('What is the limit of the crew of your spaceship?'));
    addSpaceship(name, pilot, limitCrew);
}
function secondMenuOption() {
    var member = prompt('What is the name of the new crew member?');
    var spaceshipName = prompt('which spaceship do you want to add the new crew member?');
    var spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        var confirmation = confirm("Are you sure you want to add the new crew member ".concat(member, " to the spaceship ").concat(spaceship.name, "?"));
        if (confirmation) {
            addNewCrew(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    var spaceshipName = prompt('which spaceship do you want to send to the mission?');
    var spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        var confirmation = confirm("Are you sure you want to send the spaceship ".concat(spaceship.name, " to the mission?"));
        if (confirmation) {
            sendSpaceshipToMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    var list = 'Naves Registradas:\n';
    spaceships.forEach(function (spaceship) {
        list += "\n      Nave: ".concat(spaceship.name, "\n      Piloto: ").concat(spaceship.pilot, "\n      Em miss\u00E3o? ").concat(spaceship.inMission ? 'Sim' : 'Não', "\n      Tamanho M\u00E1ximo da Triupla\u00E7\u00E3o: ").concat(spaceship.limitCrew, "\n      Tripulantes: ").concat(spaceship.crew.length, "\n    ");
        spaceship.crew.forEach(function (member) {
            list += "    - ".concat(member, "\n");
        });
    });
    alert(list);
}
var userOption = 0;
while (userOption !== 5) {
    var menu = "\n    1 - Add a new spaceship\n    2 - Add a new crew member\n    3 - Send a spaceship to the mission\n    4 - List all spaceships\n    5 - Exit\n    ";
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
