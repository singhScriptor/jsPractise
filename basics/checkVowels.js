function checkVowels(ch){
    let result
    switch(true){
        case (ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"):
            result = true
            break
        default:
            result=false
            break    
    }
    return result
}
let ch="F"
console.log(checkVowels(ch))