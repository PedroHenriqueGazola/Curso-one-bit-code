function greetCrew(message,  ...names) {
    names.forEach( names => console.log(`${message}, ${names}`));
}
greetCrew('Hello', 'John', 'Jane', 'Mary'); // rest param é ultilizado para passar mais de um parametro para uma função sem a necessidade de criar um array, é necessario q seja o ultimo parametro da função