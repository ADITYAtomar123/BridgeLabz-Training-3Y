
let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    // Add bonus only for permanent employees
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Total Salary: ₹${salary}`);
    console.log(`Global Bonus: ₹${bonus}`);
}

// Test both cases
calculateSalary(true);
calculateSalary(false);

// Change the global bonus
bonus = 6000;
console.log(`Updated Global Bonus: ₹${bonus}`);

calculateSalary(true);
