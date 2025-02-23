function findLargest(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>a && b>c){
        return b
    }
    else{
        return c
    }
}
let a=3,b=5,c=1
console.log(findLargest(a,b,c))