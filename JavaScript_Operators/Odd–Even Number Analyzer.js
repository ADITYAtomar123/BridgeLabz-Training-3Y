
let numbers = [];
let results = [];

// Create an array containing numbers 1 to 30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Classify every number
for (let number of numbers) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    results.push({
        Number: number,
        Result: result
    });
}

// Display the results
console.table(results);
