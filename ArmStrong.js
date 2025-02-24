function armStrong(n){
    let sum=0
    let temp=n
    while(temp){
        let res=temp%10
        sum+=res**3
        temp=Math.floor(temp/10)
    }
    return n === sum
}
let n=123
console.log(armStrong(n))