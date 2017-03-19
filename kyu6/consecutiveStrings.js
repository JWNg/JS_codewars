Description:

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
FUNDAMENTALS

function longestConsec(strarr, k) {
  if( strarr.length==0 || k> strarr.length || k <1 ) return "";
  let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
      i = lens.indexOf( Math.max(...lens) );
  return strarr.slice(i,i+k).join('')
}
