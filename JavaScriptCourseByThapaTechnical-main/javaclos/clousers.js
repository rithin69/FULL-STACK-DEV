// nested function example

// outer function
// function greet(name) {

//     // inner function
//     function displayName() {
//         console.log('Hi' + ' ' + name);
//     }

//     // calling inner function
//     displayName();
// }

// // calling outer function
// greet('John'); // Hi John



function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greet('John');
console.log(g1); // returns the function definition
g1(); // calling the function