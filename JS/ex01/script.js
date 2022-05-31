var velocity = 0
var name = prompt("Qual o seu nome?")
var velescolhida = prompt("Qual velocidade voce deseja?")

velocity = velescolhida

if (velocity <= 0) {
    alert("Você está parado")
} else if (velocity > 0 && velocity <= 50) {
    alert("Você está devagar")
} else if (velocity > 50 && velocity <= 80) {
    alert("Você está na velocidade normal")
} else if (velocity > 80 && velocity <= 120) {
    alert("Você está rápido")
} else if (velocity > 120) {
    alert("Você está em excesso")
} else {
    alert("Você digitou algo errado")
}

alert("Piloto: " + name + "\n\n Sua velocidade é: " + velocity + " Km/h")