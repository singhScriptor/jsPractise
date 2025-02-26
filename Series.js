function printSeries(n){
    for(let i=1;i*i*i<=n;i++){
        console.log(i*i*i)
    }
}
let n=125
console.log(printSeries(n))  