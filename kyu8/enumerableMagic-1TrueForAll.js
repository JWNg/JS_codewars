//Create a method all? (JS: all) which takes an array, and a block (JS: function), and returns true if the block (/function) returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the block (/function) test.

//Here's a (Ruby) resource if you get stuck: http://www.rubycuts.com/enum-all
//FUNDAMENTALSARRAYS//
function all( arr, fun ){
  for (var i = 0 ; i <= arr.length; i ++) { 
    if (!(fun(i))) { return false }; 
  } 
  return true;
}
