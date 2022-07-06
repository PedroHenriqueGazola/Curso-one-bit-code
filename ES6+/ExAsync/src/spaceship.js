export class spaceship {
    constructor(name, maxCapacity, currentCapacity, shield) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.currentCapacity = currentCapacity;
        this.shield = shield;
        this.porcentageCapacity = 0
    }
    porcentage() {
        this.porcentageCapacity =  (this.currentCapacity * 100 / this.maxCapacity).toFixed(1);
    }
    async start() {
            if (this.porcentageCapacity < 30) {
               return Promise.reject(`${this.name} is not ready to launch! \n` + `${this.name} has ${this.porcentageCapacity}% of capacity`);
            } 
            return (`${this.name} is ready to launch! \n` + `${this.name} has ${this.porcentageCapacity}% of capacity`);
    };
    async normalizeShield() {
            if (this.shield * 2 < 100) {
                return Promise.resolve(`${this.name} has shield below the minimum!`);
            } else {
                this.shield = this.shield * 1.4
                if (this.shield > 120) {
                    return Promise.reject(`Error: ${this.name} has a shield of ${this.shield}`);
                } else {
                    return Promise.resolve (`${this.name} has ${this.shield} shield`);
                }
            }
    }
}