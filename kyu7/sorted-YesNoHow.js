Implement the method isSortedAndHow, which accepts an array of integers, and returns one of the following:

'yes, ascending' - if the numbers in the array are sorted in an ascending way
'yes, descending' - if the numbers in the array are sorted in a descending way
'no'
You can assume the array will always be valid, and there will always be one correct answer.
FUNDAMENTALSARRAYSSORTINGALGORITHMS


function isSortedAndHow(array) {
  var asc = array.slice().sort((a,b)=>{return a-b})
  var desc= array.slice().sort((a,b)=>{return b-a});
  if( array.every(function(element, index) {
      return element === asc[index]; 
    })
  ) { return 'yes, ascending' };
    if( array.every(function(element, index) {
      return element === desc[index]; 
    })
  ) { return 'yes, descending' };
  return 'no';
}

function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}
