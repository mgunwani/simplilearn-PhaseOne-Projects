

// Definition: Simple Function
// function sayHello() {
//     console.log('Hello Everyone');
// }

// Calling: Simple Function
// sayHello();
// sayHello();

// ----------------------------------------------- //

// Definition: Function with Parameters
// function getFullName(firstName, lastName) {
//     console.log(`${firstName} ${lastName}`);
// }

// Calling: Function with Parameters
// getFullName('King', 'Kochhar');
// getFullName(100, 200);
// getFullName('King');
// getFullName('King', 'Kochhar', 'Sarah');

// ----------------------------------------------- //

// Definition: Function with Parameters with Arguments Array
// function getFullName() {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(`${arguments[i]}`)
//     }
// }

// Calling: Function with Parameters with Arguments Array
// getFullName('King', 'Kochhar');
// getFullName(100, 200);
// getFullName('King', 'Kochhar', 'Sarah');

// ----------------------------------------------- //

// // Definition: Function with Parameters
// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// // Calling: Function with Parameters
// // First Way,
// var result = getFullName('King', 'Kochhar');
// console.log(result);
// // Second Way,
// console.log(getFullName('John', 'Smith'));

// ----------------------------------------------- //

// Definition: Function Expression
// var fullName = function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// Calling: Function Expression
// fullName('King', 'Kochhar');

// ----------------------------------------------- //

// Definition: Annonymous Function (Unnamed)
// var fullName = function (firstName, lastName) {
//     console.log(`${firstName} ${lastName}`);
// }

// Calling: Annonymous Function (Unnamed)
// fullName('King', 'Kochhar');

// ---------------------------------------------- // 

// Working with Arrow Functions:

/* A shorter syntax of defining functions */
// Syntax: () => { };

// var sayHello = () => console.log("Hello Everyone!!");
// sayHello();

// var addition = (num1, num2) => console.log(`Sum of ${num1} and ${num2} : ${num1 + num2}`);
// addition(100, 200);

// var addition = (num1, num2) => num1 + num2;
// console.log(addition(1000, 2000));

// ---------------------------------------------- // 

/* Example:  */

/**
 * Define a function that can answer the role of a user:
 * A user can be on following roles:
 *  1. admin    : gets full access
 *  2. subadmin : gets access to create/delete courses
 *  3. testprep : gets access to create/delete tests
 *  4. user     : gets access to consume content
 *
 * Input: getUserRole(name, role)
 */

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} gets full access`;
        case "subadmin":
            return `${name} gets access to create/delete courses`;
        case "testprep":
            return `${name} gets access to create/delete tests`;
        case "user":
            return `${name} gets access to consume content`;
        default:
            return 'trial user';
    }
}

console.log(getUserRole('Bhawna', 'user'));