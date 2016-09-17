//Return the number (count) of vowels in the given string.
//
//We will consider a, e, i, o, and u as vowels for this Kata.
//FUNDAMENTALSSTRINGSUTILITIES//

function getCount(str) {
  var vowelMatch = function(l){ return l.match(/[aeiou]/i)},  
      found = str.split('').filter(vowelMatch)
  return found.join('').length;
}

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
