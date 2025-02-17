// const tinderUser = new Object()   // Singleton object
const tinderUser = {}  // Non-Singleton object

tinderUser.id = '123abc'
tinderUser.name = 'Sam'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname:{
            firstname:"Hello",
            lastname:"World"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
// const obj3 = {obj1,obj2}     //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//          Object.assign(target, source)
// const obj3 = Object.assign({},obj1,obj2)   //  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1,...obj2}  // spread operator   { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: 'h@gmail.com',
    },
    {
        id: 2,
        email: 'g@gmail.com',
    },
    {
        id: 3,
        email: 'l@gmail.com',
    },
    {
        id: 4,
        email: 'm@gmail.com',
    },
]

console.log(users[1].email)  // g@gmail.com
console.log(tinderUser)  //  { id: '123abc', name: 'Sam', isLoggedIn: false }
console.log(Object.keys(tinderUser));  //  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //  [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser))//  [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true
console.log(tinderUser.hasOwnProperty('isLogged'));  // false

/*******************Destructuring of Object*******************/
const course = {
    name:'js',
    price:999,
    teacher: 'hitesh'
}

// console.log(course.name)

// const {teacher} = course
const {teacher: instructor} = course  // renaming
// console.log(teacher); // hitesh
console.log(instructor); // hitesh

/**************React***************  */
const navbar = ({company})  => {

}

navbar(company = 'hello')