function bubbleSort(arr,length){
    for(let i=0;i<length-1;i++){
        for(let j=0;j<length-i-1;j++){
            if(arr[j] >arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
        
    }
    return arr
}
let arr=[5,1,3,2,4],length=5
console.log(bubbleSort(arr,length))

