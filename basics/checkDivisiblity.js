function checkDivisiblity(num){
    if(num % 3 === 0 && num % 5 === 0){
        console.log('Divisible')
    }
    else{
        console.log('Not Divisible')
    }
}
let num=15
checkDivisiblity(num)