var nameSpaceship = prompt("Qual o nome da sua nave?");

var invertedName = "";

for(let i = nameSpaceship.length - 1; i >= 0 ; i--) {
    if (nameSpaceship[i] == 'e') {
        break;
    }
    invertedName += nameSpaceship[i];
}

alert("O nome da sua nava era: " + nameSpaceship + "\n\nAgora o nome da sua nave é: " + invertedName);