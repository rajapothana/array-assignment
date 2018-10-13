const assert = require("assert");
const addNumbers = require("../findingSumOfNumbers.js").addNumbers;

assert.deepEqual(addNumbers([1,2,3,4,4]),14);
assert.deepEqual(addNumbers([3,6,3,4,7]),23);
assert.deepEqual(addNumbers([3,2,3,6,6]),20);
console.log("test passed");
