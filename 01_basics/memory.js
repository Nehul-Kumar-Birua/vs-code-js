// Stack (Primitive),  Heap (Non-Primitive)

let name = 'Hello World'
console.log(name);

let anotherName = name
anotherName = 'Galaxy Voice'
console.log(anotherName);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let x = {
    name:'Hi',
    age:5

}
console.log(x);

let y = x
console.log(y);
y.name = 'Hello Mars'

console.log(y.name);
console.log(x.name);

