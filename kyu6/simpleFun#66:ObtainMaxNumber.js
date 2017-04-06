Task

CodeBots decided to make a gift for CodeMasters birthday. They got a pack of candies of various sizes from the store, but instead of giving the whole pack they are trying to make the biggest possible candy from them. On each turn it is possible:

to pick any two candies of the same size and merge
them into a candy which will be two times bigger;

to pick a single candy of an even size and split it 
into two equal candies half of this size each.
What is the size of the biggest candy they can make as a gift?
Example

For arr = [2, 4, 8, 1, 1, 15], the output should be 16.

[2, 4, 8, 1, 1, 15] --> [2, 4, 8, 2, 15]
-->[4, 4, 8, 15] --> [8, 8, 15] --> [16, 15] -->choose 16
Input/Output

[input] integer array arr

Array of positive integers.

Constraints:

5 ≤ inputArray.length ≤ 50,

1 ≤ inputArray[i] ≤ 100.
[output] an integer

puzzles games


function obtainMaxNumber(arr){
  const funkDoc = x => (ix.splice(ix.indexOf(x),1), ix.push(x * 2));
  let ix = [];
  arr.forEach(e => ix.includes(e) ? funkDoc(e) : ix.push(e));
  return ix.length === arr.length ? Math.max(...ix) : obtainMaxNumber(ix);
}
