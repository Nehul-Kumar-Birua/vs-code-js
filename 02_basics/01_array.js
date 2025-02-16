// Javascript arrays are resizeable and can contain a mix of different datatypes.

// Javascript copy operation creates - shallow copies

// Shallow copy -> it is a copy of an object whose properties share the same reference [heap]
// Deap copy -> it is a copy of the object whose properties do not share the same reference point [stack]

const arr = [0,1,2,3,4,5]
const arr1 = ['Hulk','Ironman']
const arr2 = new Array(1,2,3,4,5)

console.log(typeof arr, typeof arr1, typeof arr2); // object

console.log(arr[3]);

// Array Methods

arr.push(6) // [0, 1, 2, 3, 4, 5, 6]
arr.push(7) // [0, 1, 2, 3, 4, 5, 6, 7]
arr.pop() // [0, 1, 2, 3, 4, 5, 6]
console.log(arr)

arr1.unshift(8) // [ 8, 'Hulk', 'Ironman' ]
arr1.shift()  // [ 'Hulk', 'Ironman' ]
console.log(arr1);

console.log(arr1.indexOf('Ironman')); // 1

const newArr = arr.join()

console.log(arr, typeof arr);  // [ 0, 1, 2, 3, 4, 5 ] object
console.log(newArr, typeof newArr); // 0,1,2,3,4,5 string

// Slice , Splice  <------- VVVIP

console.log("A ", arr2);

// const myn1 = arr2.slice(1,3)
const myn1 = arr2.splice(1,3)
console.log(myn1, typeof myn1);

console.log('B ',arr2);


