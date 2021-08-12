
const fs = require('fs');

// Aynchronous vs. Synchronous

// Aynchronous (Non-Blocking):
fs.readFile('./data/sampleData1.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});
fs.readFile('./data/sampleData2.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString())
})

// // Synchronous (Blocking):
var data1 = fs.readFileSync('./data/sampleData1.txt', "utf-8");
console.log(data1);
var data2 = fs.readFileSync('./data/sampleData2.txt', "utf-8");
console.log(data2);
console.log('----------- The End ------------');