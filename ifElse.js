function findTax(s){
    if(s>=5 && s<10){
        return 10
    }
    else if(s>=10 && s<15){
        return 20
    }
    else if(s>=15){
        return 30
    }
    else{
        return 0
    }
}
let s=20
console.log(findTax(s))