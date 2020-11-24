# Home_12
Homework Assignment #12: Object Oriented Programming
Details:
    What is object oriented programming, and why would you use it? As you may already know, many javascript projects are written using a functional, or event-driven design pattern. In which cases would an OOP pattern be a better choice?

    For this task, write a few paragraphs describing a project that would benefit greatly from an OOP structure. (This could be any kind of application, running on any type of system). Describe the application flow from the user's point of view (user stories). What is the application's purpose, and how would people use it? What information would they enter, and what would be received? Try to mention all the "stories" in which the user performs any kind of CRUD operation.

    Next, using pseudocode (or any other notation-technique or diagramming tool you wish), map out what the main objects of the system would look like, how they would be constructed, and how they would relate to each other. 

    Save your writeup in a Readme.md file, and push it to Github.

Answer: 
Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic.
Additional benefits of OOP include code reusability, scalability and efficiency.
Object-oriented programming has four basic concepts: encapsulation, abstraction, inheritance and polymorphism


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