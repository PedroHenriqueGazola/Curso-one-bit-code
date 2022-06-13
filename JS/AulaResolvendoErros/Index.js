class spaceship {
    constructor (identifier) {
        this.identifier = identifier;
        this.shotLeft = 5
    }
    shoot() {
        if (this.shotLeft > 0) {
            this.shotLeft --;
        } else {
            throw new Error ("Arma " + this.identifier + " sem munição");  // A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.
        }
    }
}

let arma = new spaceship("fds");
 
arma.shoot();
arma.shoot();
arma.shoot();
arma.shoot();
arma.shoot();
arma.shoot();

console.log(arma);