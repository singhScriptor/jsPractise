function rhombusPattern(n){
    for(let i=1;i<=n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+=' '

        }
        for(let k=0;k<n;k++){
            str+='*'
        }
        console.log(str)
    }
}
let n=4
rhombusPattern(n)