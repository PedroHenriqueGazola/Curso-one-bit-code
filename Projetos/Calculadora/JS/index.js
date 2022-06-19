function calcular(num) {
    var numero = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = numero + num
}
function apagar() {
    document.getElementById("resultado").innerHTML = ""
}
function resultado() {
    var resultado = document.getElementById("resultado").innerHTML
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado)
    }
}