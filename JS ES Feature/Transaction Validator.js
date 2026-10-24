"use strict";

// Q3: Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i]; // Set a debugger breakpoint here.

        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }
        if (transaction.id == null || transaction.amount == null) {
            throw new Error("MISSING_DATA");
        }
        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);
    } catch (error) {
        invalid.push({ index: i, transaction: transactions[i], reason: error.message });
        console.log(`Transaction at index ${i}: ${error.message}`);
    }
}

console.log("\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);
