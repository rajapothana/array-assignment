const assert = require("assert");
const extractOddNumbers = require("../findingOddNumber.js").extractOddNumbers;


assert.deepEqual(extractOddNumbers([3,4,5,6,8]),[3,5]);
assert.deepEqual(extractOddNumbers([3,2,8,5,4]),[3,5]);
console.log("test passed");
