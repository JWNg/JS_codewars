Description:

Task

Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.
Example

For a0 = 16, the output should be 9

Heres how elements of the sequence are constructed:

a0 = 16

a1 = 12 + 62 = 37

a2 = 32 + 72 = 58

a3 = 52 + 82 = 89

a4 = 82 + 92 = 145

a5 = 12 + 42 + 52 = 42

a6 = 42 + 22 = 20

a7 = 22 + 02 = 4

a8 = 42 = 16, which has already occurred before (a0)

Thus, there are 9 elements in the sequence.

For a0 = 103, the output should be 4

The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.
Input/Output

[input] integer a0

First element of a sequence, positive integer.

Constraints: 1 ≤ a0 ≤ 650.
[output] an integer
PUZZLESGAMES



function squareDigitsSequence(a0) { 
    var previousElements = [];
    squareDigitsSequenceRecursion(a0, previousElements);
    return previousElements.length

}

function squareDigitsSequenceRecursion(a0, previousElements){
    if(previousElements.includes(a0)) {
        return previousElements.push(a0).length
    } else {
        let an = splitSquareSum(a0);        
        previousElements.push(a0);
        console.log(previousElements);
        console.log(an);
        return squareDigitsSequenceRecursion(an, previousElements);
    }
}
const splitSquareSum = (n) => (n+'').split('').reduce((accum, current)=>{return Math.pow(parseInt(current), 2) + parseInt(accum)},0)


====================================
function squareDigitsSequence(a0) {
  const getNext = n => +n.toString().split('').reduce((s, v) => s + v*v, 0);
  var map = [];
  do {
    map.push(a0);
    a0 = getNext(a0);
  }while(map.indexOf(a0) === -1)
  return map.length + 1;
}
