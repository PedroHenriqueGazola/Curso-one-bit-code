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
    start() {
        return new Promise((resolve, reject) => {
            if (this.porcentageCapacity > 30) {
                resolve(`${this.name} is ready to launch! \n` + `${this.name} has ${this.porcentageCapacity}% of capacity`);
            } else { 
                reject(`${this.name} is not ready to launch! \n` + `${this.name} has ${this.porcentageCapacity}% of capacity`);
            }
        });
    };
    normalizeShield() {
        return new Promise((resolve, reject) => {
            if (this.shield * 2 < 100) {
                reject(`${this.name} has shield below the minimum!`);
            } else {
                this.shield = this.shield * 1.4
                if (this.shield > 120) {
                    reject(`Error: ${this.name} has a shield of ${this.shield}`);
                } else {
                    resolve(`${this.name} has ${this.shield} shield`);
                }
            }
        })
    }
}