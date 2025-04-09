function runningSum(nums){
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    return nums
}
let nums=[1,3,4,5,9,8]
console.log(runningSum(nums))

