function findLargest(a,b){
    while(a && b){
        if(a>b){
            return a
        }
        return b
    }
}
let a=4,b=6
console.log(findLargest(a,b))