function convertIntoMinutes(hours){
    let Minutes=hours*60;
    return Minutes
}

function convertIntoSeconds(hours){
    let Seconds = hours * 3600;
    return Seconds

}
let hours = 5
console.log("Minutes =",convertIntoMinutes( hours));
console.log("Seconds =",convertIntoSeconds( hours));