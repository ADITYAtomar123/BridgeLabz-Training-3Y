"use strict";

// Q10: Nested Hoisting and Closures
function outer() {
    console.log(count); // undefined: outer's var is hoisted.
    var count = 5;

    function inner() {
        console.log(count); // undefined: inner has its own local var count.
        var count = 10;
    }

    inner();
}

outer();

// Arrow-function comparison: the inner local `var count` still has its own scope.
function outerWithArrow() {
    console.log(count);
    var count = 5;

    const inner = () => {
        console.log(count);
        var count = 10;
    };

    inner();
}

outerWithArrow();

// Debugger tip: pause inside inner/arrow function and inspect Call Stack.
// The inner function context appears above outer; each function has its own local count.
