function Person(name) {
    this.name = name;
}

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

function Professor(name, subject, department) {
    Faculty.call(this, name, subject);
    this.department = department;
}

// Person -> Faculty
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

// Faculty -> Professor
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getDetails = function () {
    return this.name + ", " + this.subject + ", " + this.department;
};

const professor1 = new Professor(
    "Rahul",
    "JavaScript",
    "Computer Science"
);

console.log(professor1.getDetails());