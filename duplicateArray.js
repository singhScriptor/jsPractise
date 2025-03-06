function duplicateArray(arr){
    let ans=[]
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[i+1]){
            ans.push(arr[i])
        }
    }
    return ans
}
let arr=[4,3,2,7,8,2,3,1]
console.log(duplicateArray(arr))