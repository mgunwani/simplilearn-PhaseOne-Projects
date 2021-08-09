
// Create Empty Object Literal and Add Properties and Methods to it.

// // Empty Object Literal:
// var person = {}
// // Attach Properties and Methods to Object Literal:
// person.firstName = 'King';
// person.lastName = 'Kochhar';
// person.getFullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`);
// }
// // Accessing Object Literal
// console.log(`First Name : ${person.firstName}`);
// console.log(`Last Name : ${person.lastName}`);
// person.getFullName();

// -------------------------------------------------------------- //

// Object Literal with Properties and Methods

// var person = {
//     firstName: 'King',
//     lastName: 'Kochhar',
//     getFullName: function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// // Accessing Object Literal
// console.log(`First Name : ${person.firstName}`);
// console.log(`Last Name : ${person.lastName}`);
// person.getFullName();

// -------------------------------------------------------------- //

// Creating Nested Object Literal:

var person = {
    firstName: 'King',
    lastName: 'Kochhar',
    address: {
        street: 'Civil Lines',
        city: 'Delhi',
        country: 'India'
    },
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    displayAddress: function () {
        console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.country}`)
    }
}
// Accessing Object Literal
console.log(`First Name : ${person.firstName}`);
console.log(`Last Name : ${person.lastName}`);
person.getFullName();
person.displayAddress();