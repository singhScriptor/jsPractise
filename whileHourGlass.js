function printPattern(n){
    let i=0;
    while(i<n){
        let str=''
        let j=0
        while(j<n-i){
            str+='*'
            j++
        }
        i++
        console.log(str)
    }
    let k=0
    while(k<n){
        let str=''
        let l=0
        while(l<k+1){
            str+='*'
            l++
        }
        k++
        console.log(str)
    }
}
let n=5
printPattern(n)