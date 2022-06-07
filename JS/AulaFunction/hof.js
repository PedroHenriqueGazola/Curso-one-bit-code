/*function doubleVelocity(velocity, printer) {
    var newVelocity = velocity * 2;
    printer(newVelocity);
    return newVelocity;
}
var printVelocity = (newVelocity, velocity) => {
    console.log("Nova velocidade: " + newVelocity + " km/h");
}

doubleVelocity(40, printVelocity);*/

var velocity = prompt("Digite a velocidade atual: ");

function doubleSpeed(velocity, printer) {
    var newVelocity = velocity * 2;
    printer(newVelocity);
    return newVelocity;
}

var printVelocity = (newVelocity, velocity) => {
    alert("Nova velocidade: " + newVelocity + " km/h");
}
doubleSpeed(velocity, printVelocity);