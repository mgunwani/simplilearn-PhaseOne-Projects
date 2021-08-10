
/* Example 1: Creating Object Constructor */

/*
function Customer() {
    this.name = "King Kochhar";
    this.age = 23;
    this.amount = 12000;
    this.displayDetails = function () {
        console.log(`${this.name} : ${this.age} : ${this.amount}`);
    }
}

var cust1 = new Customer();
console.log(cust1.name);
console.log(cust1["name"]);
cust1.displayDetails();
*/

// --------------------------------------------------- //

/* Example 2: Creating Object Constructor with Initialized Values */

function Customer(name, age, amount) {
    this.name = name || 'Sarah';
    this.age = age || 18;
    this.amount = amount || 10000;
    this.displayDetails = function () {
        console.log(`${this.name} : ${this.age} : ${this.amount}`);
    }
}

var cust1 = new Customer('King', 23, 12000);
cust1.displayDetails();

var cust2 = new Customer('John', 45, 50000);
cust2.displayDetails();

var cust3 = new Customer();
cust3.displayDetails();