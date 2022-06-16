function verifyEnablement() {
    var verifyEneblement = document.querySelector("select").value;
    if (verifyEneblement == "disabled") {
        document.querySelector("input[name='some-text']").disabled = true;
        var pElement = document.getElementById("message");
        pElement.innerHTML = "O campo está desabilitado";
        pElement.style.color = "white";
        pElement.style.backgroundColor = "red";
    } else {
        document.querySelector("input[name='some-text']").disabled = false;
        var pElement = document.getElementById("message");
        pElement.innerHTML = "O campo está habilitado";
        pElement.style.color = "white";
        pElement.style.backgroundColor = "green";
    }
    
}