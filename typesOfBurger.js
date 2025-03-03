function typesOfBerger(X,Y,N,R){
    let premium=Math.min(Math.floor(R/Y),N)
    while(premium >= 0){
        let remain= R-premium*Y
        let normal=N-premium
        if(normal * X <= remain){
            return [normal,premium]
        }
        premium --
    }
    return [-1]
}
let x=2,y=10,n=4,r=12
console.log(typesOfBerger(x,y,n,r))