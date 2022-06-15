function adicionar() {
    var number = document.getElementById("numberHouse").value;
    var neighborhood = document.getElementById("neighborhood").value;
    var city = document.getElementById("city").value;

    /*var list = document.getElementById("list");
    list.innerText = `Numero: ${number} - Bairro: ${neighborhood} - Cidade: ${city}`;*/

    let newListValue = document.createElement("li"); // cria um elemento li
    newListValue.innerText = `Numero: ${number},  Bairro: ${neighborhood}, Cidade: ${city}`;

    let removeButton = document.createElement("button"); // cria um elemento button
    removeButton.type = "button"; // seta o tipo do elemento button
    removeButton.innerText = "Remover";
    removeButton.setAttribute("onclick", "remover(this)"); // seta o evento onclick do button, e passa a funcao remover() como parametro

    newListValue.appendChild(removeButton); // adiciona o button ao li

    document.getElementById("house-list").appendChild(newListValue); // adiciona o li a lista ja criada no HTML
}

function remover(button) {
    var liToRemove = button.parentNode; // selecionar o Elemento pai do button, que é o li
    document.getElementById("house-list").removeChild(liToRemove); // remove o li da lista de casas 
}