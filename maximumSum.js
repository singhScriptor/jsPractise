function maximumSumOfSubArray(arr){
    let maxi=arr[0]
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sum=0
            for(let k=i;k<j+1;k++){
                sum+=arr[k]
                if(sum>maxi){
                    maxi=sum
                }
            }
        }
    }
    return maxi
}
let arr=[5,2,-4,-5,3,-1,2,3,1]
console.log(maximumSumOfSubArray(arr))