function printTable(){
    for(let i=2;i<=4;i++){
        let str=''
        for(let j=1;j<=10;j++){
            str+=(i*j)+' '
        }
        console.log(str)
    }
}
printTable(4)