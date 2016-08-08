//Create a function that calculates the sum of the two lowest numbers given an array of 5 positive integers. No floats or empty arrays will be passed.
//
//For example, when an array is passed like [19,5,42,2,77], the output should be 7.
//
//[10,343445353,3453445,3453545353453] should return 3453455.
//FUNDAMENTALSARRAYS

function sumTwoSmallestNumbers(numbers) {  
  var sorted = numbers.sort(function(a,b) { return a - b});
  var num1 = sorted[0],
      num2 = sorted[1];
  
  return (num1 + num2);
};
