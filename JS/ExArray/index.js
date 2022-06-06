var hitchedSpaceships = [["Fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]]

var moreThan9 = hitchedSpaceships.filter(element => { return element[1] > 9})

var moreThan9Name = moreThan9.map(element => { return element[0]})

var FirstSpaceshipFalse = hitchedSpaceships.findIndex(element => { return element[2] == false})

var nameSpaceship = hitchedSpaceships.map(element => { return element[0].toUpperCase()})


alert("Naves com mais de 9 passageiros: " + moreThan9Name.join(", ")
    + "\nA platafor da primeira nave que esta com o engate pendente: " + (FirstSpaceshipFalse + 1)
    + "\nNomes das naves: " + nameSpaceship.join(", ")
)



