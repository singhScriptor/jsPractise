function maximumInTHree(n1,n2,n3){
    return (n1 > n2) ? (n1>n3 ? n1 : n3)
    : (n2>n3 ? n2 : n3)
}
let n1=10,n2=40,n3=30
console.log(maximumInTHree(n1,n2,n3))