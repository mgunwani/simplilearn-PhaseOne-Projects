
var names = ['King', 'Kochhar', 'Sarah', 'Bowling'];

/* Demonstrating for loop */
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// --------------------------------------- //

console.log("---------------------------");

// --------------------------------------- //

/* Demonstrating for..in loop: */
console.log('Names: ');
for (const index in names) {
    console.log(`${index} : ${names[index]}`)
}

// --------------------------------------- //

console.log("---------------------------");

// --------------------------------------- //

/* Demonstrating for..of loop: */
console.log('Names: ');
for (const name of names) {
    console.log(name)
}

// --------------------------------------- //

console.log("---------------------------");

// --------------------------------------- //

/* Demonstrating forEach Method: */
names.forEach(name => { console.log(name); });