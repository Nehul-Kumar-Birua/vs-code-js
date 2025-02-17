// var = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // c = 30
    // console.log('Inner:',a);
    

}

// console.log(a);
// console.log(b);
// console.log(c);


function one () {
    const username = 'Hello'
    function two(){
        const website = 'youtube'
        console.log(username);
        
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = 'Hello'
    if (username == 'Hello') {
        const website = ' youtube'
        // console.log(username + website);
    }
    // console.log(website);   
}
// console.log(username);



// +++++++++++++++++++++++++++++++intereting+++++++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

console.log(addtwo(2))

const addtwo = function(num){
    return num + 2
}