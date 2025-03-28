function factorial(n){
    let sum=1
    for(let i=1;i<=n;i++){
        sum*=i
    }
    return sum
}
let n=5
console.log(factorial(n))