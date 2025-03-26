function leapYear(year){
    let result;
    switch(true){
        case (year % 400 === 0):
            result=true;
            break;
        case (year % 100 === 0):
            result=false;
            break;
        case (year % 4 === 0):
            result=true;
            break;
        default:
            result=false;
            break            
    }
    return result;
}
let yr=1900
console.log(leapYear(yr));