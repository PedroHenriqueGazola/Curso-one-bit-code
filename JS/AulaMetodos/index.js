class spaceship {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.velocity = 0;
    }
    speedUp(acceleration) {
        this.velocity += acceleration;
    }
}   

var mySpaceship = new spaceship("Pedro", "batalha")

console.log(mySpaceship);

mySpaceship.speedUp(15);

console.log(mySpaceship);

mySpaceship.speedUp(15);

console.log(mySpaceship);

var otherSpaceship = new spaceship("Maria");

console.log(otherSpaceship);