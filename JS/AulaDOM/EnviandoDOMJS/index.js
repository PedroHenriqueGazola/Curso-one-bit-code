function sayMyFirstName(element) { // element é o parâmetro que recebe o valor do elemento que foi clicado
    alert("Meu primeiro nome é: " + element.value);
}

function sayMyLastName() {
    console.log(event); // event é um objeto que contém todos os dados do evento que ocorreu
    alert("Meu último nome é: " + event.target.value); // A propriedade target armazena o elemento que foi clicado, e o value armazena o valor do elemento que foi clicado
}

