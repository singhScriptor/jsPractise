function maximumIn2DArray(arr){
    let maxi=0
    for(let i=0;i<arr.length;i++){
        let total=arr[i].reduce((a,b)=>a+b, 0)
        maxi=Math.max(maxi,total)

    }
    return maxi
}
let arr=[[1,2,3],[3,2,5]]
console.log(maximumIn2DArray(arr))