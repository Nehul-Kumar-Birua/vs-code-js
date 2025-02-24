const user = {
    username : 'hitesh',
    price: 999,
    welcome: function(){
        console.log(`${this.username}, welcome to website`);  
        console.log(this);
        
    }

}

// user.welcome()
// user.username = 'hello'
// user.welcome()

// console.log(this);  //  {}

// this is always used in object, not function

function hello(){
    let username = 'world'
    console.log(this);
    console.log(this.username);  // undefined
}
hello()

const chai = () => {
    let username = 'hitesh'
    console.log(this);    
    console.log(this.username);      // undefined
}
chai()

// Explicit return
// const add = (n1, n2) => {
//     return n1 + n2
// }

// Implicit return
// const add = (n1, n2) => n1 + n2
// const add = (n1, n2) => (n1 + n2)
const add = (n1, n2) => ({username: 'Hello World'})

console.log(add(1,5));

