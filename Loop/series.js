function printSeries(n){
    for(let i=1;i<=n;i++){
        if(i*i*i<=n){
            console.log(i*i*i)
        }
    }
}
let n=125
printSeries(n)