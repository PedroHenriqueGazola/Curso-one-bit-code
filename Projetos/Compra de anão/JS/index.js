function cadastro() {
    event.preventDefault(); // corta as funcoes padroes do formulario(recarregar a pagina, submeter o formulario)
    var name = document.querySelector("input[name='name']").value; // seleciona o input com o name name
    var idade = document.querySelector("input[name='age']").value; // seleciona o input com o name age
    var size = document.querySelector("input[name='size']").value; // seleciona o input com o name size
    var price = document.querySelector("input[name='price']").value; // seleciona o input com o name price 

    var text = `Nome: ${name} - Idade: ${idade} anos - Tamanho: ${size} cm - Preço: ${price} R$` ; // cria uma string com os valores do input
    var newList = document.createElement("li"); // cria um elemento li
    
    newList.innerText = text; // seta o valor do li com o valor da string criada acima
    
    var res = document.querySelector("#res"); // seleciona o elemento com id res
    res.appendChild(newList); // adiciona o li a lista ja criada no HTML

    var removeButton = document.createElement("button"); // cria um elemento button
    removeButton.innerText = "Remover"; // seta o texto do button com o valor Remover
    removeButton.type = "button"; // seta o tipo do button como button
    removeButton.setAttribute("onclick", "remover(this)"); // seta o evento onclick do button, e passa a funcao remover() como parametro
    newList.appendChild(removeButton); // adiciona o button ao li
    
    var buyButton = document.createElement("button"); // cria um elemento button
    buyButton.innerText = "Comprar"; // seta o texto do button com o valor comprar
    buyButton.type = "button"; // seta o tipo do button como button
    buyButton.setAttribute("onclick", "buyButtonFunction(this)"); // seta o evento onclick do button, e passa a funcao buyButtonFunction() como parametro
    newList.appendChild(buyButton); // adiciona o button ao li*/

    document.getElementById("res").appendChild(newList); // adiciona o elemento li na div com id res

}
function remover(button) {
    var liToRemove = button.parentNode; // selecionar o Elemento pai do button, que é o li
    document.getElementById("res").removeChild(liToRemove); // remove o li da lista de a venda  
}
function buyButtonFunction(button) {
    var liTobuy = button.parentNode; // selecionar o Elemento pai do button, que é o li
    var buylist = document.getElementById("buyList") // seleciona o elemento com id buyList
    buylist.appendChild(liTobuy); // adiciona o li a lista de comprado
    liTobuy.removeChild(button); // remove o button comprar do li
    liTobuy.removeChild(liTobuy.lastChild); // remove o button remover do li
}   