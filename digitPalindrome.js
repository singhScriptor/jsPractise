function findPalindrome(dig){
    dig=dig.toString()
    for(let i=0;i<dig.length/2;i++){
        if(dig[i]!==dig[dig.length-i-1]){
            return false
        }
    }
    return true
}
let dig=909
console.log(findPalindrome(dig))