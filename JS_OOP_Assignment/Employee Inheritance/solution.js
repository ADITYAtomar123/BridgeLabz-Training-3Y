// Q4. Employee Inheritance (Inheritance + Runtime Polymorphism)

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} manages the ${this.department} department and guides the team.`;
    }
}

const employee1 = new Employee("Aman", "Development");
const manager1 = new Manager("Neha", "Sales");

const employees = [employee1, manager1];

employees.forEach(person => {
    // Same method call, but output depends on the object's actual class.
    console.log(person.work());
});
