const addNumbers = function(numbers){
  let sumOfNumbers = 0;
  for(let index = 0; index < numbers.length; index=index+1){
    sumOfNumbers = sumOfNumbers + numbers[index]
  }
  return sumOfNumbers;
}
exports.addNumbers = addNumbers;
