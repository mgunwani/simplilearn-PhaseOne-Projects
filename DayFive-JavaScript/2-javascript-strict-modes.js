
// Enable strict mode for entire current context

// "use strict";

// value1 = 100;  // ReferenceError: value is not defined
// console.log(value1);

// -------------------------------------- //

// Enable strict mode at the function level.

// function sayHello() {
//     "use strict";
//     message = "Hello Everyone!!"; // ReferenceError: message is not defined
//     console.log(message);
// }

// sayHello();

// -------------------------------------- //
/* Restrictions in Strict Mode */
// -------------------------------------- //

/* 1. Undeclared Variabes are Not Allowed. */

// "use strict";

// value1 = 100;  // ReferenceError: value is not defined
// console.log(value1);

// -------------------------------------- //

/* 2. Deleting a variable of function is not allowed. */


// "use strict";

// var user = { name: 'Kartik', age: 30 }
// delete user; // SyntaxError: Delete of an unqualified identifier in strict mode.
// console.log(user);


// -------------------------------------- //

/* 3. Duplicating a parameter name is not allowed. */

// "use strict";

// SyntaxError: Duplicate parameter name not allowed in this context
// function getSquareRoot(num, num) {
//     return num * num;
// }
// console.log(getSquareRoot(100, 100));

// -------------------------------------- //

/* 4. The eval Method can't alter the scope. */

// "use strict";

// eval("var x = 5"); // ReferenceError: x is not defined
// console.log(x);


// -------------------------------------- //

/* 5. The eval and arguments cannot be used as an Identifiers. */

// "use strict";

// var eval = 100; // SyntaxError: Unexpected eval or arguments in strict mode
// console.log(eval);

// -------------------------------------- //

/* 6. The with Statement is not allowed. */


// "use strict";

// without 'with' statement
// var radius = 5;
// var area = Math.PI * radius * radius;
// console.log(area);

// Using 'with' statement
// var radius = 5;
// with (Math) {   // SyntaxError: Strict mode code may not include a with statement
//     var area = PI * radius * radius;
//     console.log(area);
// }

// -------------------------------------- //

/* 7. Writing a Read-Only property is not allowed. */

// "use strict";

// var user = { name: "Kartik", age: 30 };
// console.log(`${user.name} : ${user.age}`);

// Object.defineProperty(user, "gender", { value: 'Male', writable: false });
// // TypeError: Cannot assign to read only property 'gender' of object '#<Object>'
// user.gender = 'M';
// console.log(`${user.name} : ${user.age} : ${user.gender}`);

// -------------------------------------- //

/* 8. Adding a new property to an Non-Extensible object in not allowed. */

"use strict";

var user = { name: "Kartik", age: 30 };
console.log(Object.isExtensible(user));
Object.freeze(user);
console.log(Object.isExtensible(user));
// TypeError: Cannot add property gender, object is not extensible
user.gender = "Male";
console.log(user.gender);







