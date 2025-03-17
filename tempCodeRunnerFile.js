function findUnique(arr,length){
    arr.sort((a,b)=>a-b)
    for(let i=0;i<length;i++){
        if((i === 0 || arr[i] !== arr[i-1]) && (i === length-1 || arr[i] !== arr[i+1]) ){
            return arr[i]
        }
    }
    return -1
}
let length=10,arr=[7,12,4,9,3,7,13,9,4,12,3]
console.log(findUnique(arr,length))