function findPalindrome(str){
    str=str.toLowerCase()
    for(let i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-i-1]){
            return false
        }
    }
    return true
}
let str="Madam"
console.log(findPalindrome(str))