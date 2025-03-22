function longestSubarray(nums){
    let maxi=0;left=0,arr=new Array(10).fill(0)
    for(let right=0;right<nums.length;right++){
        arr[nums[right]]++
        while(arr[nums[right]]>1){
            arr[nums[left]]--
            left++
        }
        maxi=Math.max(maxi,right-left+1)
    }
    return maxi
}
let arr=[1,2,3,1,2,3,4,5]
console.log(longestSubarray(arr))