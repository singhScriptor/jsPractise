function equalArray(arr1,arr2){
    arr1.sort((a,b) => a-b)
    arr2.sort((a,b)=>a-b)    
    if(arr1.length !== arr2.length){
        return "False"
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return "False"
        }
    }
    return "True"
}
let arr1=[2 ,4, 6, 8, 10, 12, 14, 16]
let arr2=[2 ,4, 6, 8, 10, 12, 14]
console.log(equalArray(arr1,arr2))