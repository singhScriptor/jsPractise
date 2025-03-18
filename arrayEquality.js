function checkEquality(arr1,arr2){
    let arr=arr1.sort()
    let jrr=arr2.sort()
    if(arr.length !== jrr.length){
        return "False"
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== jrr[i]){
            return "False"
        }
    }
    return "True"
}
let arr1=[3,7,2,8,6],arr2=[3,7,2,8,6]
console.log(checkEquality(arr1,arr2))