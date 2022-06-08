class spaceship {
    constructor(name, maxCrew, maxVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxVelocity = maxVelocity
        this.velocity = 0
    }
    speedUp(acceleration) {
        this.velocity += acceleration
        if (this.velocity > this.maxVelocity) {
            console.log("Velocidade máxima atingida!\nAbaixe a velocidade!")
        }
    }
}

class transportSpaceship extends spaceship {
    constructor(name, maxCrew, maxVelocity, maxLoadWeight) {
        super(name, maxCrew, maxVelocity); // o metodo super herda o construtor da classe pai//
        this.maxLoadWeight = maxLoadWeight
    }
    speedUp(acceleration) {
        acceleration /= 2
        console.log("incrementando a velocidade em " + acceleration + " km/h")
        super.speedUp(acceleration)
    }
}

var nave1 = new transportSpaceship ("Pedro", 10, 100, 1000)

console.log(nave1)

nave1.speedUp(210)

