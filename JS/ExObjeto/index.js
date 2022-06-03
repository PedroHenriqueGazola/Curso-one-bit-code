var spaceship = {
  velocity: 0,
  speedUp: function (acceleration) {
    this.velocity += acceleration;
  },
};

function registerSpaceship() {
  spaceship.name = prompt("qual o nome da nave?");
  spaceship.type = prompt("qual o tipo da nave?");
  spaceship.maxVelocity = Number(prompt("qual a velocidade maxima?"));
}

function acelerate() {
  let acceleration = Number(prompt("qual a aceleração?"));
  spaceship.speedUp(acceleration);
  if (spaceship.velocity > spaceship.maxVelocity) {
    alert("Velocidade maxima ultrapassada!");
  }
}

function stop() {
  alert(
    "nome: " +
      spaceship.name +
      "\ntipo: " +
      spaceship.type +
      "\nvelocidade: " +
      spaceship.velocity
  );
  spaceship.velocity = 0;
}

function showMenu() {
  do {
    var chosenOption = prompt("1 - acelerar\n2 - parar");
    switch (chosenOption) {
      case "1":
        acelerate();
        break;
      case "2":
        stop();
        break;
      default:
        alert("opção inválida");
        break;
    }
  } while (chosenOption != "2");
}

registerSpaceship();
showMenu();
