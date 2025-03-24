function selectionSOrt(arr,length){
    for(let i=0;i<length;i++){
        let temp=i
        for(let j=i;j<length;j++){
            if(arr[j]>arr[temp]){
                temp=j

            }
        }
        let ans=arr[i]
        arr[i]=arr[temp]
        arr[temp]=ans


    }
    return arr
}
let arr=[4,1,5,3,2],length=5

console.log(selectionSOrt(arr,5))