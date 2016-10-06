//Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
//
//Note! a and b are not ordered!
//
//Example: 
//GetSum(1, 0) == 1   // 1 + 0 = 1
//GetSum(1, 2) == 3   // 1 + 2 = 3
//GetSum(0, 1) == 1   // 0 + 1 = 1
//GetSum(1, 1) == 1   // 1 Since both are same
//GetSum(-1, 0) == -1 // -1 + 0 = -1
//GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
//Waiting for the Feedback! Thanks!
//FUNDAMENTALSALGORITHMS

function GetSum( a,b ) {
  var args = Array.prototype.slice.call(arguments).sort((a,b)=>{return a-b});
  var sum = [];
  for(let i = args[0]; i <= args[1]; i++){
    sum.push(i);
  }  
  return sum.reduce((pre,cur) =>{return pre+cur});
}
