function leadersArray(nums){
    let arr=[],maxi=-Infinity
    for(let i=nums.length;i>=0;i--){
        if(nums[i]>maxi){
            maxi=nums[i]
            arr.push(maxi)
        }
    }
    return arr.reverse()

}
let arr=[16,17,4,3,5,2]
console.log(leadersArray(arr))