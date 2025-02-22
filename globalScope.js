// var , this & console are global scope and can access in node.js and browser

// window is also global scope but "global " will be use in node.js & window will access in browser.

// parseInt, parseFloat, isNaN & isFinite are global function

// Math, Date & JSON are global object 


// inifinity,undefined, and NaN is  global properties

/* 
window will not work in node.js so you have to use global
*/

//Example:
var a="Hello World"
function abc(){
    var a="Hey There"
    console.log(a) // this will not throw error global variable can replace the value cause it in a same space even one variable is under block scope but  their value will be save in global scope.
}
abc()
console.log(a)

//Example using block scope
var a='Hello Worls' 
function jbc(){
    let a='Hello World'
    console.log(a) // it will also not make any trouble  code cause both are in different space one is from block scope and other is from global scope
}
jbc()
console.log(a)

let n="hey Ram"
function bnc(){
    var n='Hey Site'
    console.log(n)
}
bnc()
console.log(n)

function outer(){
    let p="hey THere"
    function inner(){
        var p='Hey go'
        console.log(p)
    }
    return inner
}
let ans=outer()
ans()
