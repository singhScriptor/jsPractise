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
    let k=1
    while(k<=n){
        let l=k
        let str=''
        while(l){
            str+='*'
            l--
        }
        console.log(str)
        k++
    }
}
let n=5
printPattern(n)