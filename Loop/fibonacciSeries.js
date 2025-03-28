function fibonacciSeries(n){
    if(n === 0)return 0
    if(n===1)return 1
    let num1=0,num2=1
    for(let i=2;i<n;i++){
        let temp=num1+num2
        num1=num2
        num2=temp
    }
    return num2

}
let n=9
console.log(fibonacciSeries(n))