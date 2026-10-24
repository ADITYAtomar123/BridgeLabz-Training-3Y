"use strict";

// Q1: Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("\nOriginal:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    if ((typeof value === "string" && value.trim() === "") || Number.isNaN(numberValue)) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(numberValue);
    }
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidNumbers.length);
