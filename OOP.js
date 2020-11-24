function Employee(name, age) {
    this.name = name;
    this.age = age;
  }


Employee.prototype.printInfo = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }

function PartTimeEmployee(name, age, hourRate) {
    Employee.call(this, name, age);
    this.hourRate = hourRate;
}

PartTimeEmployee.prototype.printInfo = function(){
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Hourly rate: $${this.hourRate}`);
}
function FullTimeEmployee(name, age, annualSalary, vacationHours) {
    Employee.call(this, name, age);
    this.annualSalary = annualSalary;
    this.vacationHours = vacationHours;
}

FullTimeEmployee.prototype.printInfo = function(){
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Annual Salary: $${this.annualSalary}`);
    console.log(`Vacation : ${this.vacationHours} hours`);
}

console.log("Calling base Employee object")
const Bob = new Employee("Bob", 25);
Bob.printInfo();

console.log("Calling base PartTimeEmployee object")
const Jen = new PartTimeEmployee("Jen", 36, 26);
Jen.printInfo();

console.log("Calling base FullTimeEmployee object")
const Bea = new FullTimeEmployee("Bea", 48, 80000, 40);
Bea.printInfo();