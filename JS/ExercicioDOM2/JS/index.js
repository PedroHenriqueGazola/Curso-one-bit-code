function formulario() {
    event.preventDefault()
    var nome = document.querySelector("input[name='name']").value;
    var type = document.querySelector("select[name= 'typeImovel']").value;
    var area = document.querySelector("input[name= 'areaImovel']").value;
    var condition = document.querySelector("input[name='conditionImovel']:checked").value
    var imovel = new imovelCadastro(nome, type, area, condition);

    newListValue = document.createElement("li"); // cria um elemento li
    newListValue.innerText = imovel.toString(); // seta o valor do li com o valor da funcao toString() da classe imovelCadastro

    let removeButton = document.createElement("button"); // cria um elemento button
    removeButton.type = "button"; // seta o tipo do elemento button
    removeButton.innerText = "Remover";
    removeButton.setAttribute("onclick", "remover(this)"); // seta o evento onclick do button, e passa a funcao remover() como parametro
    newListValue.appendChild(removeButton); // adiciona o button ao li

    var res = document.getElementById("res");
    res.appendChild(newListValue); // adiciona o li a lista ja criada no HTML

    if (condition == "Sim") {
        newListValue.style.backgroundColor = "red";
        newListValue.style.color = "white";
    } else {
        newListValue.style.backgroundColor = "green";
        newListValue.style.color = "white";
    }
}

function remover(button) {
    var liToRemove = button.parentNode; // selecionar o Elemento pai do button, que é o li
    document.getElementById("res").removeChild(liToRemove); // remove o li da lista de casas  
}