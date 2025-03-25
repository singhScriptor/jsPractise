function selectionSort(arr,length){
    for(let i=0;i<length;i++){
        let temp=i
        for(let j=i;j<length;j++){
            if(arr[j] < arr[temp]){
                temp=j
            }
        }
        let ans=arr[i]
        arr[i]=arr[temp]
        arr[temp]=ans
    }
    return arr
}
let arr=[3,1,5,2,4],length=5
console.log(selectionSort(arr,length))