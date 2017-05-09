Task

Given an array of integers arr, find the leftmost number that has a decimal representation which doesn't contain any digit more than once. If there is no such number, return -1 instead.

Input/Output

[input] array.integer arr

Array of positive integers.

2 ≤ inputArray.length ≤ 100000,

10 ≤ inputArray[i] ≤ 10000000.

[output] an integer

Example

For arr = [22, 111, 101, 124, 33, 30], the output should be 124

For arr = [1111, 404], the output should be -1.
FUNDAMENTALS

function differentDigitsNumberSearch(arr) {
    for (var i=0; i < arr.length; i++) {
        if (duplicates(arr[i])) {
            return arr[i]  
        }
    }
    return -1
}

function duplicates(n) {
    var newString = "";
    for (var i = 0; i < (n+"").length; i++){
        if (!newString.includes((n+'')[i])) {
            newString += ((n+'')[i])
        }
    }

    return (n+'') === newString ? true : false;
}




function differentDigitsNumberSearch(arr) {
  return arr.find(x => x.toString().split('').length == new Set(x.toString().split('')).size) || -1
  
  
}
