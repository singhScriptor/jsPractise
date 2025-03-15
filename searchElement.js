function searchElement(arr,length,target){
    for(let i=0;i<=length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
let length=8,arr=[3,17,9,25,12,5,14,21],target=12
console.log(searchElement(arr,length,target));