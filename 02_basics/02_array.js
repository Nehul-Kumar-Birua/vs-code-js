const marvel_heros = ['Ironman','Thor','Hulk']
const dc = ['superman','flash','batman']

// marvel_heros.push(dc) // [ 'Ironman', 'Thor', 'Hulk', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros.push(dc)); // 4 --> returns the new length of the array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // flash

mc = marvel_heros.concat(dc) // [ 'Ironman', 'Thor', 'Hulk', 'superman', 'flash', 'batman' ]  // returns a new array without modifying the existing array
// console.log(mc);

const all_new_heros = [...marvel_heros, ...dc]  // spread operator
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

let real_another_arr = another_array.flat(Infinity) // flat method

console.log(real_another_arr);

console.log(Array.isArray('Hello'))  // is "Hello" an array? -> false
console.log(Array.from('Hello'))  // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(Array.from({name:'Hitesh'})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]

