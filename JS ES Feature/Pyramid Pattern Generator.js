"use strict";

// Q6: Pyramid Pattern Generator
// Usage: node Q6.js [rowCount]. Default is 5.
const input = process.argv[2];
const limit = input === undefined ? 5 : Number(input);

if (!Number.isInteger(limit) || limit < 1 || limit > 50) {
    console.log("Enter a valid number from 1 to 50.");
} else {
    for (let i = 1; i <= limit; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern.trimEnd());
    }
}

// Debugger tip: watch i, j, and pattern at the loop breakpoints.
// Replacing let with var still prints the pattern, but var is function-scoped.
