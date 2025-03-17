function checkEquality(arr1,arr2){
    let arr=arr1.sort((a,b)=>a-b)
    let jrr=arr2.sort((a,b)=>a-b)
    if(arr.length !== jrr.length )return false
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== jrr[i]){
            return false
        }
    }
    return true
}
let arr1=[3,7,2,9,6],arr2=[3,7,2,9,6]
console.log(checkEquality(arr1,arr2))