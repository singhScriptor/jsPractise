function dupsInArray(arr){
    arr.sort()
    let jrr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[i-1]){
            if(jrr.length === 0 || jrr[jrr.length-1] !== arr[i]){
                jrr.push(arr[i])
            }
        }
    }
    return jrr
}
let arr=[4,3,2,7,8,2,3,1]
console.log(dupsInArray(arr))