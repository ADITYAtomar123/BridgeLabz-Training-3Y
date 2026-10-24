"use strict";

// Q9: JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const record = JSON.parse(rawData[i]); // Set a debugger breakpoint here.

        if (record.user == null || record.age == null) {
            throw new Error("Missing user or age");
        }

        const age = Number(record.age);
        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age");
        }

        const cleanRecord = { user: record.user, age };
        cleanData.push(cleanRecord);

        if (age < 18) {
            under18.push(cleanRecord);
        }
    } catch (error) {
        errors.push({ line: i + 1, reason: error.message });
        console.log(`Line ${i + 1} error: ${error.message}`);
    }
}

console.log("\nClean data:", cleanData);
console.log("Errors:", errors);
console.log("Valid count:", cleanData.length);
console.log("Invalid count:", errors.length);
console.log("Users under 18:", under18);

// Debugger tip: when JSON.parse throws, execution jumps to catch,
// then the loop continues with the next array entry.
