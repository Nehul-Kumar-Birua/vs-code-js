//console.log(Math.floor(Math.random()*10 + 1));

const min = 50
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1) + min));

/*****************Dates******************/

let date = new Date()
// console.log(date);  // 2025-02-14T19:51:38.809Z
console.log(typeof date);   // object
console.log(date.toString()); // Fri Feb 14 2025 19:54:17 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString());   //  Fri Feb 14 2025
console.log(date.toISOString()); //  2025-02-14T19:54:17.625Z
console.log(date.toJSON());    //  2025-02-14T19:54:17.625Z
console.log(date.toLocaleDateString());  //  2/14/2025
console.log(date.toLocaleString());   //  2/14/2025, 7:54:17 PM
console.log(date.toTimeString());   //  19:54:17 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5 , 3)
// let myCreatedDate = new Date('2023-01-14')
let myCreatedDate = new Date('01-14-2023')

console.log(myCreatedDate); // 2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toString()); // Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString());  // 1/23/2023, 12:00:00 AM

/*
 Month starts from 0 in javascript when you are giving as a parameter.
                                  new Date(2023, 0, 23)
 Months start from 1 when writting it in 'mm-dd-yyyy' or 'yyyy-mm-dd' format.
                                  new Date('2023-01-14')
*/

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //  milliseconds till now at this very momeny
console.log(myCreatedDate.getTime()) //  convert date to milliseconds

//  Conversion of milliseconds to seconds
console.log(Math.round(Date.now()/1000));  // use either .round or .floor


let newDate = new Date()
console.log(newDate.getMilliseconds());
console.log(newDate.getMonth() + 1); // adding 1 because in js month starts from 0
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday: 'long'
})


