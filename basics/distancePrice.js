function distancePrice(d){
    if(d >= 1000){
        return 12
    }
    else if(d > 500 && d <= 1000){
        return 10
    }
    else if(d > 100 && d <= 500 ){
        return 8
    }
    else{
        return 5
    }
}
let d=700
console.log(distancePrice(d))