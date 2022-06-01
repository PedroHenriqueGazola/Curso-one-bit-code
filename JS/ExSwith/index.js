var distanceLy = prompt("Informe a distancia em Anos-luz: ");

var options = prompt("Informe a opção: \n 1 - Para converter em: Parsec \n 2 - Para converter em: Unidade Astronomica \n 3 - Para converter em: Quilometro");

var distanceChosen = ";"
var res = "";
switch (options) {
    case "1":
        distanceChosen = "parsec";
        res = distanceLy * 0.306601;
        break;
    case "2": 
        distanceChosen = "unidade Astronomica";
        res = distanceLy * 63241.1;
        break;
    case "3":
        distanceChosen = "quilometro";
        res = distanceLy * 9.5 * 10**12;
        break;
    default:
        alert("Opção inválida");
        break;
}

alert("A distância em " + distanceChosen + " é: " + Math.round(res) + " " + distanceChosen + "s");
