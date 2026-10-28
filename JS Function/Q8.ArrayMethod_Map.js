Array.prototype.myMap = function (callback) {

    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

const numbers = [1, 2, 3, 4];

const result = numbers.myMap(function (num) {
    return num * 2;
});

console.log(result);