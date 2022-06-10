class BattleSpaceship extends spaceship {
    constructor(name, crewQuantity, weaponsQuantity) {
        super(name, crewQuantity);
        this.sitsquantity = weaponsQuantity;
    }
}