function printSeries(n,m){
    for(let i=1;i<=n;i++){
        if(i === m){
            break
        }
        console.log(i)
    }

}
let n=10,m=4
console.log(printSeries(n,m))