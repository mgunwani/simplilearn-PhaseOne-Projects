
function User() {
    this.name = "King";
    this.gender = "Male";
}

User.prototype.age = 40;

User.prototype.sayHello = function () {
    console.log('Hello Folks!!');
}

var user1 = new User();
user1.age = 34;
console.log(`${user1.name} : ${user1.gender} : ${user1.age}`);
user1.sayHello();

var user2 = new User();
console.log(`${user2.name} : ${user2.gender} : ${user2.age}`);
user2.sayHello();