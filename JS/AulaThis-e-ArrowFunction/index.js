testingArrow = {
    name: 'Escola de Javascript',
    normalFunction: function() {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
}

testingArrow.normalFunction(); // Escola de Javascript
testingArrow.arrowFunction(); // undefined, na arrow function o this não aponta para o objeto e sim para o global