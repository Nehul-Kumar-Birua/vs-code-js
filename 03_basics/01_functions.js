function newfunc(){
    console.log('H');
    console.log('E');
    console.log('L');
    console.log('L');
    console.log('O')
}

// newfunc   //  reference of the function
// newfunc() //  execution of the function

// function add(num1 , num2){
//     console.log(num1 + num2)
// }

function add(num1 , num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

add()  // NaN
add('he','llo')  // hello
add(3,5)  // 8

const result = add(3,5)
// console.log('Result:',result);  // undefined

function loginUserMessage(username = 'sam'){
    if(username === undefined){
    // if(!username){}{
        console.log('Please enter your name');
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Hello World'))  // Hello World just logged in
// console.log(loginUserMessage());  // undefined


/********************shopping cart********************/

function calculateCartPrice (val1, val2, ...num1) { /// rest operator
    return num1
}

// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200,300,400,500,600))  //  [ 400, 500, 600 ]

const user = {
    username: 'hitesh',
    price:199
}

function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleObject(user)
handleObject({
    username:'Hello World',
    price: 499
})


const arr = [200,300,400,500]

function returnValue (getarr) {
    return getarr[1]
}
console.log(returnValue(arr))
console.log(returnValue([1,2,3,4,5,6]))