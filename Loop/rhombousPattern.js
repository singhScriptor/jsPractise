function rohombousPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i-1;j++){
            str+=' '
        }
        for(let k=0;k<n;k++){
            str+='*'
        }
        console.log(str)
    }
}
let n=4
rohombousPattern(n)