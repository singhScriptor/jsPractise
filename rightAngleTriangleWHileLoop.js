function printPattern(n){
    let i=0
    while(i<=n){
        let j=0
        let str=''
        while(j<=n-i-1){
            str+='*'
            j++
            
        }
        
        console.log(str)
        i++

    }
}
let n=5
printPattern(n)