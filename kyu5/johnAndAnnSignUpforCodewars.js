John and his wife Ann have decided to go to Codewars.

On day 0 Ann will do one kata and John - he wants to know how it is working - 0.

Let us call a(n) the number of katas done by Ann at day n we have a(0) = 1 and in the same manner j(0) = 0.

They have chosen the following rules:

On day n the number of katas done by Ann should be n minus the number of katas done by John at day t, t being equal to the number of katas done by Ann herself at day n - 1.
On day n the number of katas done by John should be n minus the number of katas done by Ann at day t, t being equal to the number of katas done by John himself at day n - 1.
Whoops! I think they need to lay out a little clearer exactly what therere getting themselves into!

Could you write:

1) two functions ann and john (parameter n) giving the list of the numbers of katas Ann and John should take on each day from day 0 to day n - 1 (n days - see first example below)?
2) The total number of katas taken by ann (function sum_ann(n)) and john (function sum_john(n)) from day 0 (inclusive) to day n (exclusive)?
Examples:

john(11) -->  [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]
ann(6) -->  [1, 1, 2, 2, 3, 3]

sum_john(75) -->  1720
sum_ann(150) -->  6930
Note: Keep an eye on performance.
ALGORITHMSRULESMATHEMATICS

let annKatas = [1], johnKatas = [0];
function upToDayDay(n){
  let day = annKatas.length;
  while (day < n) {
    johnKatas.push(day - annKatas[johnKatas[day-1]]);
    annKatas.push(day - johnKatas[annKatas[day-1]]);
    day++;
  }
  return n;
}
let john = n => johnKatas.slice(0, upToDayDay(n)),
    ann  = n => annKatas.slice(0, upToDayDay(n)),
    sumJohn = n => john(n).reduce((x, y) => x + y, 0),
    sumAnn  = n => ann(n).reduce((x, y) => x + y, 0);
