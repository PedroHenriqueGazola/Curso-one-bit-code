function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration;
    return newVelocity; // retorna a nova velocidade para fora da função
}

velocity = Number(prompt("Informe a velocidade atual"));
acceleration = Number(prompt("Informe a aceleração"));

console.log(velocity)

velocity = speedUp(velocity, acceleration);

console.log(velocity);