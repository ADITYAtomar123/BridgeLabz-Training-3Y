console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Synchronous log");
console.log("End");

// Output:
// Start
// Synchronous log
// End
// Promise callback
// setTimeout callback
