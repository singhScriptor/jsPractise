function rotatedArray(arr,k){
    k=k%arr.length;
    let rotated=arr.slice(-k).concat(arr.slice(0,arr.length-k))
    for(let i=0;i<arr.length;i++){
        arr[i]=rotated[i]
    }
    return rotated
}
let arr=[1,2,3,4,5,6,7],k=2
console.log(rotatedArray(arr,k))