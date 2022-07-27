function sendSpaceship(name:string, captain:string){
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }
    alert(`A nave ${spaceship.name}, comandada pelo capitao ${spaceship.captain}, esta em uma missão!`)
    return spaceship
}

function accelerate(targetSpeed:number, spaceship: {name:string, speed:number}){
    if (spaceship.speed > targetSpeed){
        alert(`Reduzindo a velocidade da nave ${spaceship.name} para ${targetSpeed}!`)
    } else if (spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade da nave ${spaceship.name} para ${targetSpeed}!`)
    } else {
        alert(`A nave ${spaceship.name} esta na velocidade desejada!`)
    }
}

const spaceshipName = prompt('Insira o name da nave a ser enviada')
const spaceshipCaptain = prompt('Insira o nome do capitão da nave')
const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const spaceshipSpeed = prompt('Insira a velocidade desejada')

const Speed = Number(prompt('Insira a velocidade desejada'))
accelerate(Speed, currentShip)