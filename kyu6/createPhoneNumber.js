//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
//Example:
//
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//The returned format must be correct in order to complete this challenge. 
//Don't forget the space after the closing parenthese!
//ALGORITHMSARRAYSSTRINGSLOOPSCONTROL FLOWBASIC LANGUAGE FEATURESFUNDAMENTALSFORMATTINGREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES

function createPhoneNumber(numbers){
  var joined = numbers.join('')
  return "(" + joined.substr(0,3) + ") " + joined.substr(3,3) + "-" + joined.substr(6,4)
}
