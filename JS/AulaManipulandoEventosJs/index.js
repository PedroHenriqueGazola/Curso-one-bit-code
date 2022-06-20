function doChange() {
    alert(event.target.value); // event.target.value = valor selecionado
}

document.querySelector("input[name='sample-input'").addEventListener("change", doChange); // pega o valor do input e chama a função doChange

var changeEvent = new Event("change"); // cria um evento e atribui a uma variável

var input = document.querySelector("input[name='sample-input'"); // pega o input
input.dispatchEvent(changeEvent); // dispara o evento no input

input.removeEventListener("change", doChange); // remove o evento do input