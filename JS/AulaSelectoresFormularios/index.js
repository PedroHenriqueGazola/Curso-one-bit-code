function showinfo() {
    var name = document.getElementsByName("name")[0].value;
    var color = document.querySelector("select[name='color'] option:checked").text;  // quando o checkbox é selecionado, o .text retorna o texto do option selecionado
    var likeProgramming = document.querySelector("input[name='like-programming']:checked").value; // quando o checkbox é selecionado, o .value retorna o valor do selecionado
    var developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    var optionValues = [];
    developerOptions.forEach(function(element) {
        optionValues.push(element.value);
    })
    var optionsChecked = optionValues.join(", ");
    alert(`Name: ${name} \nColor: ${color} \nLike Programming: ${likeProgramming} \nDeveloper Options: ${optionsChecked}`);	
}