class spaceship {
    static get desacelerate() {
        return 0.15
    }
    constructor (name, velocity) {
        this.name = name;
        this.velocity = velocity;
    }
    speedUp(acceleration) {
        this.velocity += (acceleration * (1-spaceship.desacelerate));
    }
}

var spaceship1 = new spaceship('SpaceX', 100);
spaceship1.speedUp(10); 
console.log(spaceship1)

// Criando uma variavel estatica para o desacelerador//


