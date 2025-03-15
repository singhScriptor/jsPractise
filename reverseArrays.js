function reverseArray(arr,length){
    let rev=[]
    if(length === 0)return -1
    for(let i=length-1;i>=0;i--){
        rev.push(arr[i])
    }
    return rev
}
let arr=[4,5,1,7,9,3],length=6
console.log(reverseArray(arr,length)) 