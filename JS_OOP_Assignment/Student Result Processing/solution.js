// Q1. Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

const students = [
    new Student("Aman", [85, 90, 88]),
    new Student("Riya", [65, 70, 62]),
    new Student("Karan", [30, 35, 38])
];

students.forEach(student => {
    console.log(`Name: ${student.name}`);
    console.log(`Average: ${student.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${student.getGrade()}`);
    console.log("--------------------");
});

// Grade scale used: A >= 80, B >= 60, C >= 40, otherwise F.
