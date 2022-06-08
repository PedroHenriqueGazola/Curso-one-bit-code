class captain {
    constructor(name, age, flightHours) {
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class spaceship  {
    constructor (Spaceshipname, SpaceshipType, captainName, captainAge, captainFlightHours) {
        this.Spaceshipname = Spaceshipname
        this.SpaceshipType = SpaceshipType
        this.captain = new captain(captainName, captainAge, captainFlightHours)
    }
}

var spaceship1 = new spaceship("Elemental", "SpaceX", "John", 30, 200);

console.log(spaceship1);
