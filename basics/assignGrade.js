function assignGrade(score){
    if(score > 75){
        return "A"
    }
    else if(score >= 60 && score <= 75){
        return "B"
    }
    else if(score > 50 && score < 60){
        return "C"
    }
    return "D"
}
let score= 58
console.log(assignGrade(score))