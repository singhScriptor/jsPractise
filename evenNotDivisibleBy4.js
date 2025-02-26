function EvenNumber(n){
    for(let i=1;i<=n;i++){
        if(i%4 === 0){
            continue
        }
        if(i%2 === 0){
            console.log(i)
        }
        
    }
}
let n=10
EvenNumber(n)