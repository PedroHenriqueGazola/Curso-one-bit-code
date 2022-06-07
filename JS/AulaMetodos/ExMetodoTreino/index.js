class championsValo {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
var Sentinels = {
    sage: new championsValo("Sage", "Sentinels"),
    cypher: new championsValo("Cypher", "Sentinels") 
}
var duelists = {
    jett: new championsValo("Jett", "Duelists"),
    yoru:  new championsValo("Yoru", "Duelists")
}

console.log(Sentinels)  
console.log(duelists)