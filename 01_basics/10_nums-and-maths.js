const number = 500
console.log(number, typeof number); // 500 number

const balance = new Number(500)
console.log(balance,typeof balance); // [Number: 500] object

console.log(balance.toString().length, typeof balance); // 3 object
console.log(balance.toFixed(2), typeof balance); // 500.00 object

let num = 123.8951
console.log(num.toPrecision(5), typeof num);  // 123.90 number
// be careful using this method or be precisis about the numbers.


let hundreds= 1000000
console.log(hundreds.toLocaleString());  // 1,000,000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000

/******************************************** Maths ********************************************/

console.log(Math); // Object [Math] {}

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.5));  // 5
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.min(1,2,3,4,5,));  // 1
console.log(Math.max(1,2,3,4,5,));  // 5

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1) + min));
// Always remember this formula and write it down somewhere
