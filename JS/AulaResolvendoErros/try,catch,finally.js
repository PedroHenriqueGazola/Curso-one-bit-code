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
    reload() {
        this.shotLeft = 5
    }
}

let arma = new spaceship("fds");

try { // O try tenta executar o bloco de codigo, se der erro, o catch é executado.//
    arma.shoot();
    arma.shoot();
    arma.shoot();
    arma.shoot();
    arma.shoot();
    arma.shoot();
} catch(e) { // O catch é executado se o try der erro. O parametro é o throw q foi criado no bloco acima //
    console.log(e);
    arma.reload();
} finally { // O finally é executado independentemente de se der erro ou não//
    console.log(arma + " deu 5 tiros");
}
 

console.log(arma);