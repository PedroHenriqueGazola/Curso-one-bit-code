import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
  shotsPerSecond: 30,
  currentPosition: [30, 45, 70],
  firing: false
}
/*function adjustPosition(x, y, z) {
  return new Promise(resolve => {
    laserGun.currentPosition = [x, y, z]
    resolve([x, y, z])
  })
}
function fire(x, y, z) {
  return new Promise(resolve => {
    laserGun.firing = true
    resolve([x, y, z])
  })
}
function moveAndFire(x, y, z) {
  adjustPosition(x, y, z).then(coord => {
    console.log(`Arma ajustada para as coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
    return fire(...coord)
  }).then(coord => {
    console.log(`Começando a atirar nas coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
  })
}
moveAndFire(20, 40, 10)*/

/* ------ Transformando promises em async functions ------ */

async function adjustPosition(x, y, z) { // A async function retorna uma Promise, logo n é necessário usar o resolve e sim o return
    if(z > 90) {
        return Promise.reject ('Não é possível ajustar a arma para uma posição com o Z maior que 90') // Tratando erro em funçao assincrona 
    }
    laserGun.currentPosition = [x, y, z]
    return([x, y, z])
}
async function fire(x, y, z) {
    laserGun.firing = true
    return([x, y, z])
}
function loadAmmo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Arma carregada')
        }, 5000)
    })
}
async function moveAndFire(x, y, z) {
    try {
        const newCoordinatesPromise = adjustPosition(x, y, z)
        const loadAmmoPromise = loadAmmo()
        let promiseResult = await Promise.all([newCoordinatesPromise, loadAmmoPromise]) // o await faz com que o codigo abaixo espera a execusao das promises para continuar, nesse caso a function loadAmmo tem o setTimeout de 5 segundos, atrasando a execuçao do codigo abaixo
        let newCoordinates = promiseResult[0]
        console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)
        let fireCoord = await fire(...newCoordinates)// o await faz com que o programa espere a Promise ser resolvida para continuar, ou seja, o programa espera que a Promise seja resolvida, se a Promise não for resolvida, o programa não continua. O resultado da Promise é retornado para uma variável, substituindo o then.
        console.log(`Começando a atirar nas coordenadas (${fireCoord[0]}, ${fireCoord[1]}, ${fireCoord[2]})`)
    } catch (error) {
        console.log(error)
    }
    
}
moveAndFire(20, 40, 10)
