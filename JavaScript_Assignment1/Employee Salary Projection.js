
let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;
let salaryData = [];

// Calculate salary for the next five years
for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    salary = Math.round(salary);

    salaryData.push({
        Year: year,
        Salary: `₹${salary}`
    });
}

// Display yearly salary projection
console.table(salaryData);
