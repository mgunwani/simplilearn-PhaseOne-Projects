
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.country = "India";
    }

    static welcomeMessage() {
        console.log('Welcome to Admin Portal!!');
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Country : ${Person.country}`);
    }
}

module.exports = Person;