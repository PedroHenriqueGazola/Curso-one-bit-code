/*array.FuncaodeIterar(function(elemento atual, indice, array){
    corpo da funçao
})*/
var hitchedSpaceships = ["demeter", "Darwin", "Supernova", "fenix", "puler"]

hitchedSpaceships.forEach(function(AtualSpaceship, index){
    console.log("Nave: " + AtualSpaceship + " - " + "Indice: " + index)
}) 

//forEach percorre cada elemento do array, e passa como parametro a funçao

var upcaseSpaceships = hitchedSpaceships.map(function(AtualSpaceship){
    var upcased = AtualSpaceship.toUpperCase()
    return upcased
})

//console.log(upcaseSpaceships)
//console.log(hitchedSpaceships)

//map modifica cada elemento do array, sem alterar o array original

var with7chars = hitchedSpaceships.filter(element => { return element.length >= 7})

console.log(with7chars)

//filter filtra os elementos do array, retornando um novo array com os elementos que passaram no teste//

var with7char = hitchedSpaceships.find(element => { return element.length >= 7})

console.log(with7char)

//find retorna o primeiro elemento do array que passou no teste//