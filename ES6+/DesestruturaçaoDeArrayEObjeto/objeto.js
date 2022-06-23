let spaceship = {
    name: "Colossos",
    crewQuantity: 10,
    isHitched: false
}

let { name: spaceshipName , crewQuantity /*quando a variavel possuir o mesmo nome, é possivel n passar outro parametro*/} = spaceship;
console.log(spaceshipName, crewQuantity);