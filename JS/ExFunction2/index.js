function slowDown(velocity, printer) {
    let deceleartion = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleartion
    }

    alert("Nave is stopped")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function (velocity) {  
    alert(velocity)
})