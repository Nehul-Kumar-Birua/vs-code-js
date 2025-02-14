const name = 'hello'
const repoCount = 50

// console.log(name + repoCount + ' Value');// Don't use this line 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4)
console.log(newString);  // hite

const anotherString = gameName.slice(-8, 8)
console.log(anotherString);  // h-h

const newStringOne = "   hitesh    "
console.log(newStringOne);  // with spaces
console.log(newStringOne.trim()); // no spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))  // %20 is replaces by -

console.log(url.includes('hitesh')) // true
console.log(url.includes('sundar')) // false

console.log(gameName.split('-')); //  [ 'hitesh', 'hc', 'com' ]