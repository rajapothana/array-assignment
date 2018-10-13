const extractEvenNumbers = function(numbers){
  let evenNumbers = [];
  for(let index = 0; index < numbers.length; index++){
    if(numbers[index]%2 == 0){
      evenNumbers.push(numbers[index]);
    }
  }
  return evenNumbers;
}
exports.extractEvenNumbers = extractEvenNumbers;
