
/* Defining A Class */

// class Person {
//     name = "Kartik";
//     age = 23;
//     displayDetails() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age : ${this.age}`);
//     }
// }

// var person1 = new Person();
// person1.displayDetails();

// ------------------------------------ //

/* Defining Constructor Method in ES6 Class: */

// class Person {
//     constructor() {
//         this.name = "Kartik Sharma";
//         this.age = 23;
//     }
//     displayDetails() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age : ${this.age}`);
//     }
// }

// var person1 = new Person();
// person1.displayDetails();

// var person2 = new Person();
// person2.displayDetails();

// ------------------------------------ //

/* Defining a Parameterized Constructor Method in ES6 Class: */

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     displayDetails() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age : ${this.age}`);
//     }
// }

// var person1 = new Person("Shreya", 23);
// person1.displayDetails();

// var person2 = new Person("Gautam", 34);
// person2.displayDetails();

// ------------------------------------ //

/* Inheritance with es6 Classes using extends keyword:  */

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         Person.country = "India";
//     }

//     static welcomeMessage() {
//         console.log('Welcome to Admin Portal!!');
//     }

//     displayDetails() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age : ${this.age}`);
//         console.log(`Country : ${Person.country}`);
//     }
// }

// class Employee extends Person {
//     constructor(name, age, salary, designation) {
//         super(name, age);
//         this.salary = salary;
//         this.designation = designation;
//     }
//     displayDetails() {
//         super.displayDetails();
//         console.log(`Salary: ${this.salary}`);
//         console.log(`Designation : ${this.designation}`);
//     }
// }

// class Customer extends Person {
//     constructor(name, age, amount) {
//         super(name, age);
//         this.amount = amount;
//     }
//     displayDetails() {
//         super.displayDetails();
//         console.log('Amount to be Paid : ' + this.amount);
//     }
// }

// Person.welcomeMessage();

// console.log('Employee Details : ')
// var emp1 = new Employee('Gautam', 23, 20000, 'Manager');
// emp1.displayDetails();

// console.log('Customer Details : ')
// var emp1 = new Customer('Gautam', 23, 34000);
// emp1.displayDetails();

// ------------------------------------ //

/* Data Member as a Property (Getter and Setter): */

// "use strict";

// class Person {

//     get name() {
//         return this._name;
//     }

//     // set name(value) {
//     //     this._name = value;
//     // }

//     get age() {
//         return this._age;
//     }

//     set age(value) {
//         if (value < 18) {
//             console.log('Invalid Age!!')
//             return;
//         }
//         this._age = value;
//     }

// }

// var person1 = new Person();
// person1.name = "Gautam";
// person1.age = 17;
// console.log(`Name : ${person1.name}`);
// console.log(`Age : ${person1.age}`);

// ------------------------------------ //