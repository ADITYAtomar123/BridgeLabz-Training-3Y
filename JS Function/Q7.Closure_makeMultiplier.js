function makeMultiplier(multiplier){
    return function(num){
        return num*multiplier;
    }
}

const double=makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));