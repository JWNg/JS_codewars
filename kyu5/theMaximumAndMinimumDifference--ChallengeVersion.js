Description:

When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said
Description:

Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array: [ max difference, min difference ]

For example:

Given arr1 = [3,10,5], arr2 = [20,7,15,8]
should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
Note:

arr1 and arr2 contains only integers(positive, negative or 0);
arr1 and arr2 may have different lengths, they always has at least one element;
All inputs are valid.
This is a challenge version, Please optimize your algorithm to avoid time out ;-)
If you feel difficult, please try the simple version.
About testcases

Basic test: 5 testcases
Random test1: 100 testcases, arr1 and arr2 contains 1-20 elements
Random test2: 300 testcases, arr1 and arr2 contains 10000 elements
Some Examples

maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
maxAndMin([3],[20]) === [17,17]
maxAndMin([3,10,5],[3,10,5]) === [7,0]
maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]
ALGORITHMS

const maxAndMin = (arr1,arr2) => {
    let arr = [];
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            arr.push(Math.abs(arr1[i]-arr2[j]));
        }
    };

    return [Math.abs(arr1.sort(ascSort)[0] - arr2.sort(ascSort)[(arr2.length-1)]),  arr.sort(ascSort)[0]]
}
const ascSort = (a,b) => (a-b <= -1 ? -1 : 1); 
