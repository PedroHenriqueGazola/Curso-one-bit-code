var nameSpaceship = prompt("Qual o nome da nave?");
var caracter = prompt("Qual o caracter deseja substituir?");
var newCaracter = prompt("Qual por caracter deseja substituir?");
var newSpaceship = "";

for(let i = 0; i<nameSpaceship.length; i++) {
    if(nameSpaceship[i] == caracter) {
        newSpaceship += newCaracter; 
    }else {
        newSpaceship += nameSpaceship[i];
    }
}

alert("O novo nome da nave é: " + newSpaceship);