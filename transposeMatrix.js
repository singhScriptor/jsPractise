function transposeMatrix(rows,column,matrix){
    let arr=[]
    for(let i=0;i<rows;i++){
        let jrr=[]
        for(let j=0;j<column;j++){
            jrr.push(matrix[j][i])
        }
        arr.push(jrr)
        
    }
    return arr
}
let rows=3,column=3,matrix= [[1,2,3],[4,5,6],[7,8,9]]
console.log(transposeMatrix(rows,column,matrix))