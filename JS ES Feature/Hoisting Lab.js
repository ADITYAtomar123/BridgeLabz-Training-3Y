"use strict";

// Q5: Hoisting Lab — corrected program
// `var` is hoisted and initialized to undefined; function declarations are callable
// before their source position. `let`/`const` are in the Temporal Dead Zone until initialized.
const score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow-function comparison: a const arrow function cannot be called before initialization.
const announceArrow = () => {
    console.log("Game started (arrow function)");
};
announceArrow();
