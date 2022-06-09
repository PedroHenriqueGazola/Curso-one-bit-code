//--------set-----------------// 

// os metodos get e set podem ser acessados como variaveis e nao como metodos comuns//

class TransportSpaceship {
    constructor(name) {
        this.name = name;
        this.currentVelocity = 0;
    }

    set velocity (newVelocity) { // o metodo set é usado para alterar o valor de uma variavel//
        if (newVelocity > 120) {
            this.currentVelocity = 120; // limita a velocidade a 120
        } else {
            this.currentVelocity = newVelocity;
        }
    }
}

var spaceship1 = new TransportSpaceship('SpaceX');

spaceship1.velocity = 140;
console.log(spaceship1);

//--------get-----------------//

class resourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name;
        this.monthlyProcessedLoad = monthlyProcessedLoad;
    }
    get weeklyProcessedLoad() { // o metodo get é usado para acessar o valor de uma variavel//
        return this.monthlyProcessedLoad / 4;
    }
}

var spaceship2 = new resourceProcessStation('SpaceX', 100);

ProcessamentoSemanal = spaceship2.weeklyProcessedLoad;

console.log(ProcessamentoSemanal);

console.log(spaceship2);


