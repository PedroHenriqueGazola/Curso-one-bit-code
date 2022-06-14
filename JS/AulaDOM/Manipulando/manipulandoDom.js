function addNewPhone() {
    var phoneForm = document.querySelector("form#phones");
    var newPhone = phoneForm.children[0].cloneNode(true); // clona o primeiro elemento do grupo de telefones
    var phonePosition = phoneForm.children.length + 1; // pega a quantidade de elementos do grupo de telefones
    newPhone.querySelector("label").innerHTML = "Telefone " + phonePosition + ": "; // altera o label do telefone
    phoneForm.appendChild(newPhone); // adiciona o novo telefone ao grupo de telefones
    console.log(phoneForm.children); // imprime os elementos do grupo de telefones
}

function printPhones() {
    var message = "";
    const phones = document.querySelectorAll("input[name='phone']"); // pega todos os inputs com o nome "phone"
    phones.forEach(function(phones, index) {
        message += "Telefone " + (index + 1) + ": " + phones.value + "\n";
    });
    alert(message);
}