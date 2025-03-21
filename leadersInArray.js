function leadersInArray(arr){
    let jrr=[],maxi=-Infinity
    for(let i=arr.length;i>=0;i--){
        if(arr[i] > maxi){
            maxi=arr[i]
            jrr.push(arr[i])
        }
    }
    return jrr.reverse()

}
let arr=[16,17,4,3,5,2]
console.log(leadersInArray(arr))

