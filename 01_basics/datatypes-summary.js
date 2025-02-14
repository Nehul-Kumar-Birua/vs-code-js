/*
(value type)
Primitive datatypes: 7 types
            String, Number, Boolean, null, undefined, Symbol, BigInt
*/
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail   //undefined

const id  = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// false
console.log(id == anotherId); // false
console.log(id) // Symbol(123)
console.log(anotherId) // Symbol(123)

const bignum = 2345234524542345234523453454324n   // Bigint


/*
Reference type (Non - premitive datatype):
        Array, Objects, Functions
*/

const heros = ['hulk','ironman','falcon']
let myobj = {
    name:'hello',
    age:34,
}
const myFunc = function(){
    console.log('Hello World');
    
}

console.log(heros, typeof heros); // object
console.log(myobj, typeof myobj); // object
console.log(myFunc, typeof myFunc);// function

//Link : https://262.ecma-international.org/5.1/#sec-11.4.3
