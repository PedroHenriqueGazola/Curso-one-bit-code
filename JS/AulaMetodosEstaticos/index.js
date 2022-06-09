class resourceProcessStation {
    constructor (name, monthlyProcessing) {
        this.name = name;
        this.monthlyProcessing = monthlyProcessing;
    }

    static calculateProcessingInHours(monthlyProcessing, Hours) {
        return monthlyProcessing / 720 * Hours;
    }
}
var spaceship1 = new resourceProcessStation('SpaceX', 500);

var totalPrecessing = resourceProcessStation.calculateProcessingInHours(spaceship1.monthlyProcessing, 100);

console.log(totalPrecessing);

//static é usado para criar metodos estaticos, ele é chamado atravez da classe e n do objeto//


