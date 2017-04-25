Description:

Task

You are given a decimal number n as a string. Transform it into an array of numbers (given as strings again), such that each number has only one nonzero digit and their sum equals n.

Each number in the output array should be written without any leading and trailing zeros.
Input/Output

[input] string n

A non-negative number.

1 ≤ n.length ≤ 30.
[output] a string array

Elements in the array should be sorted in descending order.
Example

For n = "7970521.5544" the output should be:

["7000000", 
"900000", 
"70000", 
"500", 
"20", 
"1", 
".5",
".05",
".004",
".0004"]
For n = "7496314", the output should be:

["7000000", 
"400000", 
"90000", 
"6000", 
"300", 
"10", 
"4"]
For n = "0", the output should be []
ALGORITHMS

function splitExp(n) {
  var [l,r] = n.split('.').map(s=>[...s]); r = r||[];
  return         l.map((d,i)=>d==='0'?'':d+'0'.repeat(l.length-i-1)).filter(s=>s)
         .concat(r.map((d,i)=>d==='0'?'':'.'+'0'.repeat(i)+d).filter(s=>s));
}
