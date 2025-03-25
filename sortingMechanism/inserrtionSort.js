function InsertionSOrt(arr,length){
    for(let i=0;i<length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
let arr=[2,5,1,3,4],length=5
console.log(InsertionSOrt(arr,length))