var nameSpaceship = prompt("Qual o nome de sua nave?");
var dobra = prompt("Voce deseja entrar em dobra espacial? \n1-Sim \n2-Nao");
var quantDobras = prompt("Voce deseja realizar outra dobra? \n1-Sim \n2-Nao");
var res = 0;

if(dobra == 1){
    res = 1;
}

while(quantDobras == 1) {
    quantDobras = prompt("Voce deseja realizar outra dobra? \n1-Sim \n2-Nao");
    res++;
}

alert("O nome da nave eh: " + nameSpaceship + "\nVoce realizou " + res + " dobras espaciais");