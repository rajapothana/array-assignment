const assert = require("assert");
const extractEvenNumbers = require("../findingEvenNumber.js").extractEvenNumbers;

assert.deepEqual(extractEvenNumbers([3,4,5,6,8]),[4,6,8])
assert.deepEqual(extractEvenNumbers([3,2,8,5,4]),[2,8,4])
console.log("test passed");
