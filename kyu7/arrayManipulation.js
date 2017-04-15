Description:

Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array

[8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],

the desired output is

[18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].

Your task is to create a function "arrayManip()" that takes in an array as its argument, manipulates the array as described above, then return the resulting array.
ALGORITHMSARRAYSNUMBERSBINARY SEARCH TREESTREESBINARYDATA STRUCTURES

const arrayManip = a => a.map((n, i) => a.filter((m, j) => j > i && m > n).length === 0 ? -1 : Math.min(...a.filter((m, j) => j > i && m > n)));
