function show() {
    var element = document.getElementById("name"); // retorna o elemento com o id "name"
    console.log(element.value);
}

function show2() {
    var element = document.getElementsByName("phone"); // retorna todos os elementos com o nome "phone"
    console.log(element.value);
}

function show3() { 
    var element = document.querySelectorAll("#name"); // retorna todos os elementos com o id "name"
    console.log(element.value);
}

function show4() {
    var element = document.getElementsByTagName("input"); // retorna todos os elementos com a tag "input"//
    console.log(element.value);
}