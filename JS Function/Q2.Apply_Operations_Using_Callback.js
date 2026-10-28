function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

function applyOperations(num, operation) {
    return operation(num);
}

let arr = [1, 2, 3, 4, 5];

let doubleResult = [];
let squareResult = [];

for (let i = 0; i < arr.length; i++) {
    doubleResult.push(applyOperations(arr[i], double));
    squareResult.push(applyOperations(arr[i], square));
}

console.log(doubleResult);
console.log(squareResult);