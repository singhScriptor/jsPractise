function insertionSort(arr,length){
    for(let i=0;i<length;i++){
        let temp=arr[i];
        let j=i-1
        while(j>=0 && arr[j]<temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
let arr=[4,1,3,5,2]
console.log(insertionSort(arr,5))