
function Person(firstName, lastName) {
    this.FirstName = firstName || 'Annonymous';
    this.LastName = lastName || 'Annonymous';
}

Person.prototype.getFullName = function () {
    return `${this.FirstName} ${this.LastName}`;
}

function Employee(firstName, lastName, salary, designation) {
    Person.call(this, firstName, lastName);
    this.Salary = salary || 10000;
    this.Designation = designation || "Intern";
}

Person.prototype.getEmployeeDetails = function () {
    return `${this.Designation} : ${this.Salary}`;
}

// Employee.prototype = Person.prototype
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;

var emp1 = new Employee('Roger', 'Lee', 60000, 'Manager');
console.log(emp1.getFullName());
console.log(emp1.getEmployeeDetails());