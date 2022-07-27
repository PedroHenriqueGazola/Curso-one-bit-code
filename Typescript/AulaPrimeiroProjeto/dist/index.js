function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, ", comandada pelo capitao ").concat(spaceship.captain, ", esta em uma miss\u00E3o!"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da nave ".concat(spaceship.name, " para ").concat(targetSpeed, "!"));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da nave ".concat(spaceship.name, " para ").concat(targetSpeed, "!"));
    }
    else {
        alert("A nave ".concat(spaceship.name, " esta na velocidade desejada!"));
    }
}
var spaceshipName = prompt('Insira o name da nave a ser enviada');
var spaceshipCaptain = prompt('Insira o nome do capitão da nave');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var spaceshipSpeed = prompt('Insira a velocidade desejada');
var Speed = Number(prompt('Insira a velocidade desejada'));
accelerate(Speed, currentShip);
