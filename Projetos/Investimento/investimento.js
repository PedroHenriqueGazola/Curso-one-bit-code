var dinheiroInicial = 2000;
var dinheiroInvestidoMensal = 200;
var taxaDeRendimento = 1.01
var tempoInvestido = 12
var tempoInicial = 0



while (tempoInicial < tempoInvestido) {
    calcularInvestimento();
    tempoInicial++;
}


function calcularInvestimento() {
    if (tempoInicial == 0) {
        console.log(dinheiroInicial)
    }
    var rendimento = (dinheiroInicial * taxaDeRendimento ) + dinheiroInvestidoMensal ;
    dinheiroInicial = rendimento
    console.log(dinheiroInicial.toFixed(2));
}


