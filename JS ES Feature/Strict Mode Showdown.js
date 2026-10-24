"use strict";

// Q8: Strict Mode Showdown
// Original demo(a, a) is a SyntaxError in strict mode because parameter names repeat.
// An undeclared assignment like `total = 10` would also throw ReferenceError.
// `delete total` on an unqualified identifier is not valid in strict mode.

function demo(a, b) {
    const total = a + b;
    console.log("Total:", total);
}

demo(5, 10);

// Try the original code in a separate file without "use strict" to compare behavior.
// In sloppy mode duplicate parameters are permitted in ordinary functions.
