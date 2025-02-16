// singleton
// Object.create()

// object literals

const mysym = Symbol('key1')

const js_user = {
    0: {Name : 1234},
    name:"Hello World",
    'play game': 'DMC',
    age: 18,
    // mysym : 'newkey1',
    [mysym] : 'newkey1',  // correct syntax for using symbol as a key
    location:"Jaipur",
    email:'hello@world.com',
    isLoggedIn: false,
    lastLoginDays:['Monday','Tuesday']
}

console.log(js_user.location) // Jaipur
console.log(js_user['location'])  // Jaipur
console.log(js_user[0]['Name'])  // 1234
console.log(js_user["play game"]); // this is the only way to access this key

// behind the scene, the keys of the object are stored as a string if they are written in characters
console.log(typeof mysym);  // symbol

// console.log(js_user.mysym, typeof js_user.mysym);  // newkey1 string
console.log(js_user[mysym], typeof js_user[mysym]);  // newkey1 string

// console.log(js_user);
js_user.email = 'chatgpt.com'
console.log(js_user);
// Object.freeze(js_user) // it will freeze the object so that no changes can be made
js_user.email = 'facebook.com'

js_user.greeting = function(){
    console.log('Hello JS User');
}

console.log(js_user.greeting); // [Function (anonymous)]
console.log(js_user['greeting']); // [Function (anonymous)]

console.log(js_user.greeting());  //  Hello JS User

js_user.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);  // Hello JS User, Hello World
}
console.log(js_user.greeting());
console.log(js_user.greetingTwo());
