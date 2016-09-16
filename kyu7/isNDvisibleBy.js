//Create a function isDivisible(n,...) that checks if the first agrument n is divisible by all other arguments (return true if no other arguments)
//
//Example:
//
//isDivisible(6,1,3,)--> true because 6 is divisible by 1 and 3
//isDivisible(12,2)--> true because 12 is divisible by 2
//isDivisible(100,5,4,10,25,20)--> true
//isDivisible(12,7)--> false because 12 is not divisible by 7
//This kata is following kata: http://www.codewars.com/kata/is-n-divisible-by-x-and-y


function isDivisible(){
  var args = Array.prototype.slice.call(arguments)
  function divisibleFilter(denom){
    return (args[0]%denom) !== 0
  }
  
  if (args.filter(divisibleFilter).length === 0) {
    return true
  }
  return false
}
