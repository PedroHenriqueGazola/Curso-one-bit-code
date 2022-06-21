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
function menosmais() {
    var resultado = document.getElementById("resultado").innerHTML
    if (resultado) {
        document.getElementById("resultado").innerHTML = "-" + resultado
    }
}
function raiz() {
    var resultado = document.getElementById("resultado").innerHTML
    if (resultado) {
        document.getElementById("resultado").innerHTML = Math.sqrt(resultado)
    }
}
function porcentagem() {
    var resultado = document.getElementById("resultado").innerHTML
    if (resultado) {
        document.getElementById("resultado").innerHTML = resultado + "/100" + "*"
    }
}