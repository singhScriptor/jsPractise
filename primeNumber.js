function findPrime(n){
    let count=0,i=2,arr=[]
    while(count<n){
        let flag=true
        for(let j=2;j<i;j++){
            if(i%j===0){
                flag=false
                break
            }
        }
        if(flag){
            arr.push(i)
            count++
        }
        i++
    }
    return arr
    
}
let n=5
console.log(findPrime(n))