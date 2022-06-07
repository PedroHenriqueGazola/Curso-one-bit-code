class captain {
    constructor(name, age, flightHours) {
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class spaceship {
    constructor (name, tripulantes, captainName, captainAge, captainFlightHours) {
        this.name = name
        this.tripulantes = tripulantes
        this.captain = new captain(captainName, captainAge, captainFlightHours)
    }
}

var spaceship1 = new spaceship("SpaceX", "100", "John", "30", "200")

console.log(spaceship1)