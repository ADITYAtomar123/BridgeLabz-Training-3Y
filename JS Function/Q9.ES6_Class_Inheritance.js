class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return this.name + " " + this.age;
    }
}

class Student extends Person {

    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    getStudentDetails() {
        return this.name + ", " + this.age + ", " + this.course;
    }
}

const student1 = new Student("Aditya", 20, "CSE");

console.log(student1.getDetails());
console.log(student1.getStudentDetails());