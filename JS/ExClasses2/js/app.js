class App {
    constructor() {
        this.spaceship = null
    }
    start() {
        this.enrollSpaceship();
        let chosenOption 
        do {
            chosenOption = this.showInitialMenu();
            this.redirectFeature(chosenOption);
        } while (chosenOption != "3");
        this.printAndExit();
    }
    enrollSpaceship() {
        let spaceshipName = prompt("Qual o nome da nave?");
        let crewQuantity = prompt("Quantos membros tem a nave?");
        let spaceshipKind = this.askForSpaceshipKind()
        if (spaceshipKind == "1") {
            let weaponsQuantity = prompt("Quantas armas tem a nave?");
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity);
        } else {
            let sitsQuantity = prompt("Quantos assentos tem a nave?");
            this.spaceship = new transportSpaceship(spaceshipName, crewQuantity, sitsQuantity);
        }
    }
    askForSpaceshipKind() {
        let chosenOption 
        while (!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt("Qual o tipo da nave?\n1 - Nave de Batalha\n2 - Nave de Transporte");
        }
        return chosenOption;
    }

    showInitialMenu() {
        const promptMessage = "Qual ação deseja realizar?\n1 - Acelerar a nave\n2 - Trocar a nave\n3 - Imprimir e sair";
        let chosenOption = prompt(promptMessage);
        while (!["1", "2","3"].includes(chosenOption)) {
            chosenOption = prompt(promptMessage);
        }
        return chosenOption;
    }
    redirectFeature(chosenOption) {
        switch (chosenOption) {
            case "1":
                this.accelerateSpaceship();
                break;
            case "2":
                this.enrollSpaceship();
                break;
        }
    }
    accelerateSpaceship() {
        let acceleration = Number(prompt("Qual aceleração?"));
        this.spaceship.speedUp(acceleration);
    }

    printAndExit() {
        let finalMessage = "nome: " + this.spaceship.name + "\n" +
            "quantidade de membros: " + this.spaceship.crewQuantity + "\n" +
            "velocidade atual: " + this.spaceship.currentVelocity + "\n";
        alert(finalMessage);
    }
}

