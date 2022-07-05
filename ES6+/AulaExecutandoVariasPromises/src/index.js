const increaseVelocity = function (velocityToIncrease) {
    return new Promise((resolve, reject) => {
        if (velocityToIncrease <= 0) {
            reject("Frenagem acionada")
        } else {
            resolve(velocityToIncrease * .9)
        }
    })
}
const newBatteryConsumption = function (currentVelocity, velocityToIncrease) {
    return new Promise((resolve, reject) => {
        let newBatteryConsumption = (currentVelocity + velocityToIncrease) / 10000
        if (newBatteryConsumption > 0) {
            resolve(newBatteryConsumption)
        } else {
            reject("Consumo zerado!")
        }
    })
}
let velocity = 70

let velocityIncrease = increaseVelocity(velocity)
let BatteryConsumption = newBatteryConsumption(80, velocity)

Promise.all([velocityIncrease, BatteryConsumption]).then(result => { // Promise.all() é uma função que recebe um array de promises e retorna uma promise que será resolvida quando todas as promises do array forem resolvidas, caso alguma das promises do array falhe, nao ira retornar o resultado da promise que nao falhou, somente o erro da promise que falhou
    console.log(result)
}).catch(error => {
    console.log(error)
})