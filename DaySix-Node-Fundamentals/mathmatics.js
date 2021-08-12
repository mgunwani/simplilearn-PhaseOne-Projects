
/* Each and Every JS file has its own context. */
/* To access this file as package you need to import-export */

// var maxTime = 1000;
// function addition() {
//     console.log('Addition Performed.');
// }
// function subtraction() {
//     console.log('Subtraction Performed.');
// }
// module.exports.mTime = maxTime;
// module.exports.addition = addition;

module.exports = {
    mTime: 1000,
    addition: function () {
        console.log('Addition Performed.')
    },
    subtraction: function () {
        console.log('Subtraction Performed.');
    }
}