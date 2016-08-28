//Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN. Arguments will both be integers.
//FUNDAMENTALS//


function remainder(a, b){
  if ( a === 0 || b === 0 ) { return NaN };
  if ( a >= b ) { return a%b }
  return b%a
}
