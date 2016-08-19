//Description:
//
//Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
//(Only one element at each edge, even if there are more than one with the same value!)
//
//Example:
//
//{ 6, 2, 1, 8, 10 } => 16
//{ 1, 1, 11, 2, 3 } => 6
//
//
//If array is empty or null, or if only 1 Element exists, return 0.
//Note: in C++ instead null an empty vector is used. 
//
//
//Have fun coding it and please don't forget to vote and rank this kata! :-)
//
//I have created other katas. Have a look if you like coding and challenges.
//FUNDAMENTALSBASIC LANGUAGE FEATURES


function sumArray(array) {
  array = array.sort((a,b)=>{return a - b});
  array.pop();
  array.shift();
  return array.reduce((sum, fig) => {return sum + fig})
}
