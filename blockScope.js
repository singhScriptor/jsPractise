// variable inside the the block or function which can only accessible inside the block or function is called block scope.
function jcb(){
    let i=32
    console.log(i)
}
// but you can't access this outside the block 
console.log(i)// reference error cause i is not defined it's defined inside the block


// these are the block scope:

/*
let & const .

*/

//let and const both can't be declare twice in a same block with a same name 
function abc(){
    let i=32
    let i=42 // this will give syntax error due to duplicate 
}

// but in let you can reassign the value or even you can declare the value later even after initialization.
let i;
i='Hello World' // or

let j=42
j='Hello THere'

// where as const can be redecalred or assign the value later after the initalization.

const s;
s='Hey There' // this will also  a syntax error cause delaration is missing .

const j='Hey '
j='Bhism'// you can't redeclare the value in constant



