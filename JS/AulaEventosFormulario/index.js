function save() {
    event.preventDefault(); // impede o comportamento padrão do formulário, que é recarregar a página, pois quando a pagina é recarregada, o formulário é perdido.
    var name = document.querySelector("input[name='name']").value;
    var programmingLanguage = document.querySelector("select[name='programming-lang']").value;
    var name2 = name[0].toUpperCase() + name.slice(1); // transforma o primeiro caractere em maiúsculo
    alert(`nome: ${name2} \nlinguagem: ${programmingLanguage}`);
}

