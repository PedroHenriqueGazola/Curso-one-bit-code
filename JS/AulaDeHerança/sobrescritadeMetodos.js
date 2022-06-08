class spaceship {
    constructor (name, maxCrew, maxVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxVelocity = maxVelocity
        this.correntVelocity = 0
    }
    speedUp(acceleration) {
        this.correntVelocity += acceleration;
        if (this.correntVelocity > this.maxVelocity) {
            console.log ("Velocidade máxima atingida!\nAbaixe a velocidade!");
        }
    }
}

class transportSpaceship extends spaceship {
    speedUp(acceleration) {
        this.correntVelocity += acceleration*acceleration; // Esse metodo ira sobrescrever o metodo da classe pai//
    }
}

var nave1 = new spaceship("Pedro", 10, 100);
var nave2 = new transportSpaceship("Gazola", 10, 100);

nave1.speedUp(11);
nave2.speedUp(11);


console.log(nave1);
console.log(nave2);
