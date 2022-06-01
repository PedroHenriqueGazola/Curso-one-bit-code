/*for(variavel; expressao; açao_de_controle){
    Codigo a ser executado
}*/ 

var spaceship = "helmet"
var newSpaceship = "";

for(let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == "e") {
        newSpaceship += "i";
    } else {
        newSpaceship += spaceship[i];
    }
}