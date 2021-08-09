
/* Number Type: */

// var value = 100;
// console.log(value);
// var num1 = new Number(100);
// var num2 = new Number(100);
// var num3 = 100;
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num2 == num3);
// console.log(num2 === num3);
// // Note: === operator compare values.
// // Note: == operator compares object references and not the values.

// ------------------------------------------------------------------ //

/* Boolean Type: */

// var isValid = false;
// console.log(isValid);

// if (isValid)
//     console.log("Good");
// else
//     console.log("Bad");

// var result = (isValid) ? "Hello" : "Bye";
// console.log(result);

// ------------------------------------------------------------------ //

/* String Type: */

// var firstName = 'King';
// var lastName = "Kochhar";
// var fullName = firstName + ' ' + lastName;
// console.log(fullName);
// console.log(firstName + ' ' + lastName);
// console.log(`Welcome ${firstName} ${lastName}!!`)

// var message = "Hello Folks, lets learn 'JavaScript' here.";
// var message = 'Hello Folks, lets learn "JavaScript" here.';
// var message = 'Hello Folks, lets learn \'JavaScript\' here.';
// var message = "Hello Folks, lets learn \"JavaScript\" here.";
// console.log(message);

// ------------------------------------------------------------------ //

/* Null and Undefined */

/**
 * 1. null and undefined are primitive types.
 * 2. null means absence of value.
 * 3. undefined means lack of value.
 * 4. null or undefined both evaluates to false in condition.
 */

var value1;
console.log(value1);
console.log(typeof (value1))
console.log((value1) ? "Hi" : "Bye");

var value2 = null;
console.log(value2);
console.log(typeof (value2));
console.log((value2) ? "Hello" : "Bello");