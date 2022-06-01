var velocity = 100

var acceleration = 5

while(velocity < 200){
    velocity += acceleration  // velocity = velocity + acceleration
    console.log(velocity)
}


var constellation = "Andromeda"
var pos = 0
var constellationLength = constellation.length

while(pos<constellationLength){
    if (constellation[pos] == "a" || constellation[pos]== "A"){
    console.log(pos)
    }
    pos += 1
}