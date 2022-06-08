class spaceship {
    constructor (name, maxCrew, maxVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxVelocity = maxVelocity
        this.correntVelocity = 0
    }
    speedUp(acceleration) {
        this.correntVelocity += acceleration;
        if(this.correntVelocity > this.maxVelocity) {
            console.log("Velocidade máxima atingida!\nAbaixe a velocidade para poder acelerar mais!");
        }
    }
}

class battleship extends spaceship { // extends herda as propriedades da classe pai, que no caso é spaceship//
    stop() {
        this.correntVelocity = 0;
        console.log("Nave de batalha parada!");
    }
}

class discoverySpaceship extends spaceship { 
    stop() {
        this.correntVelocity = 0;
        console.log("Nave de descobrimento parada!");
    }
}

var discoverySpaceship1 = new discoverySpaceship("PEDRO", 25, 200);

var battleship1 = new battleship("Gazola", 10, 100);

/*console.log(discoverySpaceship1);
console.log(battleship1);*/

discoverySpaceship1.speedUp(210);
battleship1.stop();

