function printPattern(){
    for(let i=1;i<=5;i++){
        let str=''
        for(let j=1;j<=i*2-1;j++){
            str+=i
        }
        console.log(str)
    }
}
printPattern()