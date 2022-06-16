var element = document.getElementById("style-text")

function setbluebackground() {
    element.style.backgroundColor = "blue" // mapeia o elemento por uma variavel
}
function settransparentbackground() {
    document.getElementById("style-text").style.backgroundColor = "transparent" // Altera o background do elemento diretamente
}
function setredcolor() {
    element.classList.add("red-color") // Adiciona uma classe ao elemento
}
function removeredcolor() {
    element.classList.remove("red-color") // Remove uma classe do elemento
}