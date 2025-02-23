function findDistance(distance){
    if(distance > 0 && distance  <= 100){
        return 5 
    }
    else if(distance > 100 && distance <= 500){
        return 8
    }
    else if(distance > 500 && distance < 1000){
        return 10
    }
    else if(distance >= 1000){
        return 12
    }
}
let d=700
console.log(findDistance(d))