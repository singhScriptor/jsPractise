function divisibleBy2(n){
    for(let i=1;i<=n;i++){
        if(i% 4===0){
            continue
        }
        else if(i% 2===0){
            console.log(i)
        }
    }
}
let n=10
divisibleBy2(n)