"use strict";

// Q4: Debugging Mystery
function showMessage() {
    // The original undeclared assignment caused ReferenceError in strict mode.
    // Declaring greeting with let fixes the problem.
    let greeting = "Welcome"; // Set a debugger breakpoint here.
    console.log(greeting);
}

showMessage();

// Debugger tip: watch `greeting` after execution reaches its declaration.
// Check the Call Stack to see showMessage() above the global context.
