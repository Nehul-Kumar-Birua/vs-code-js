//let score = '33'
let score = '33abc'

console.log(typeof score); // string
console.log(typeof(score));// string

// Type conversion from string to number
let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) // number
console.log(valueInNumber) // Nan  -> not a number

/*
'33'    -> 33
'33abc' -> NaN
true    -> 1  , false -> 0
null     -> 0
undefined -> NaN
*/

//let isLoggedIn = 1
let isLoggedIn = 'Hello'
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/*
1 -> true, 0 -> false
'' -> false
'Hello' -> true
*/

let sum = 10
let string = String(sum)
console.log(string)
console.log(typeof string)