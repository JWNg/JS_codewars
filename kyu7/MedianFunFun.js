Description:

The mean (or average) is the most popular measure of central tendency; however it does not behave very well when the data is skewed (i.e. wages distribution). In such cases, it's better to use the median.

Your task for this kata is to find the median of an array consisting of n elements.

You can assume that all inputs are arrays of numbers in integer format. For the empty array your code should return NaN (false in JavaScript/NULL in PHP).

Examples:

Input [1, 2, 3, 4] --> Median 2.5

Input [3, 4, 1, 2, 5] --> Median 3
FUNDAMENTALSARRAYSBASIC LANGUAGE FEATURESMATHEMATICSALGORITHMSNUMBERS

function median(n){
  if(n.length === 0){return false};
  n.sort((a,b)=>{ return (a>b? 1 : -1) })  
  return (n.length)%2 === 0 ? (n[(n.length/2)-1] + n[(n.length/2)])/2 : n[(n.length/2)-0.5]
}
