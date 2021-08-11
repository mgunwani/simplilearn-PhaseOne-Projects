var Product = require('./product');

let product1 = new Product(1, 'p01', 5, 2);
let product2 = new Product(2, 'p02', 5, 6);
let product3 = new Product(3, 'p03', 5, 12);

let products = [product1, product2, product3];

// console.log('Product List: ');
// for (const product of products) {
//     console.log(product.toString());
//     console.log(`\tTotal : ${product.total()}`);
//     console.log("==============");
// }


// console.log('Product List: ');
// for (const index in products) {
//     console.log(products[index].toString());
//     console.log(`\tTotal : ${products[index].total()}`);
//     console.log("==============");
// }

products.forEach(product => {
    console.log(product.toString());
    console.log(`\tTotal : ${product.total()}`);
    console.log("==============");
});
