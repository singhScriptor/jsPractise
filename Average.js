function findAvg(obj){
    let count=0,total=0
    for(let i in obj){
        total+=obj[i]
        count++
    }
    return total/count
}
let obj={
    "JV":32,
    "MV":42,
    "VC":41
}
console.log(findAvg(obj))