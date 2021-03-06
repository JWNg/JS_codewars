//You get an array of arrays.
//If you sort the arrays by their length, you will see, that their length-values are consecutive.
//But one array is missing!
//
//
//You have to write a method, that return the length of the missing array.
//
//Example:
//[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
//
//
//If the array of arrays is null/nil or empty, return 0.
//
//When an array in the array is null or empty, return 0 too!
//There will always be a missing element and its length will be always between the given arrays. 
//
//Have fun coding it and please don't forget to vote and rank this kata! :-)
//
//I have created other katas. Have a look if you like coding and challenges.
//ALGORITHMSBASIC LANGUAGE FEATURESFUNDAMENTALSARRAYS

function getLengthOfMissingArray(aoa) {
  if (aoa === null || aoa.length === 0 || aoa.includes([]) ) {return 0};
  
  function compareLength(a, b){
    return a.length - b.length;
  }  
  var sorted = aoa.sort(compareLength)
  var first = sorted[0].length
  for (var i = 0; i < sorted.length ; i ++) {
    if (sorted[i].length !== first ) { return (first) };
    first ++;
  }  
}
