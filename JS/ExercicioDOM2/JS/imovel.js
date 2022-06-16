class imovelCadastro {
    constructor(name, type, area, condition) {
        this.name = name;
        this.type = type;
        this.area = area;
        this.condition = condition;
    }
    toString() {
        return `Nome: ${this.name}, Tipo: ${this.type}, Area: ${this.area} m², Alugado: ${this.condition}`;
    }
}


