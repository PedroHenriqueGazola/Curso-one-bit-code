export class spaceship {
    constructor(name, maxCapacity, currentCapacity) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.currentCapacity = currentCapacity;
        this.porcentageCapacity = 0
    }
    porcentage() {
        this.porcentageCapacity =  this.currentCapacity * 100 / this.maxCapacity;
    }
    start() {
        return new Promise((resolve, reject) => {
            if (this.porcentageCapacity > 30) {
                resolve(`${this.name} is ready to launch! \n` + `${this.name} has ${this.porcentageCapacity}% of capacity`);
            } else { 
                reject(`${this.name} is not ready to launch! \n` + `${this.name} has ${this.porcentageCapacity}% of capacity`);
            }
        });
    };
}