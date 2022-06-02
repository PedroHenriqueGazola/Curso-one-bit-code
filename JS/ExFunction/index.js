var nameSpaceship = prompt("Qual o nome da nave?");
var velocity = 0;
var menu = prompt("Escolha uma opção: \n 1 - Acelerar 5 km/s \n 2 - Desacelerar 5 km/s \n 3 - Imprimir velocidade atual \n 4 - Sair do programa");

function showmenu(){
    menu = prompt("Escolha uma opção: \n 1 - Acelerar 5 km/s \n 2 - Desacelerar 5 km/s \n 3 - Imprimir velocidade atual \n 4 - Sair do programa");
}

while (menu != 4) {
    if (menu == 1) {
        velocity += 5;
        showmenu();
    } else if (menu == 2) {
        if(velocity == 0) {
            alert("Não é possível desacelerar");
            showmenu();
        } else {
        velocity -= 5;
        showmenu();
        }
    } else if (menu == 3) {
        alert("A velocidade da nave " + nameSpaceship + " é " + velocity + " km/s");
        showmenu();
    } else {
        alert("Opção inválida");
        showmenu();
    }
}

if (menu == 4) {
    alert("Saindo do programa");
    velocity = 0;
    nameSpaceship = "";
}

