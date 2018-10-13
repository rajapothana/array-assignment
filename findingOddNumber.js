const extractOddNumbers = function(numbers){
  let oddNumbers = [];
  for(let index = 0; index < numbers.length; index=index+1){
    if(numbers[index]%2 == 1){
      oddNumbers.push(numbers[index]);
    }
  }
  return oddNumbers;
}
exports.extractOddNumbers = extractOddNumbers;
