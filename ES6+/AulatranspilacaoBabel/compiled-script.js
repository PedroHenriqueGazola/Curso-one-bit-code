"use strict";

function testingES6(test1, test2) {
  // nessa funçao ha uma virgula depois do ultimo argumento, portanto outras versões do ES6 não funcionam, para isso, é necessário usar o babel.
  alert("".concat(test1, " ").concat(test2)); // como o es5 não aceita o uso de template strings, o babel converteu em concatenação de string
}
