function printPattern(n){
    let i=1
    while(i<=n){
        let j=n-i
        let str=''
        while(j>=0){
            str+='*'
            j--
        }
        console.log(str)
        i++
    }
}
let n=5
printPattern(n)