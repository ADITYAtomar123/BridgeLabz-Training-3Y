function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, course) {
    Person.call(this, name, age);
    this.course = course;
}

// Inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getDetails = function () {
    return this.name + ", " + this.age + ", " + this.course;
};

const student1 = new Student("Aditya", 20, "CSE");

console.log(student1.getDetails());