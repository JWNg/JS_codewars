Task

There are n houses in a village on a circular road numbered from 1 to n starting from some house in clockwise order. It takes one minute to get from one house to any of two adjacent houses and there are no other roads in this village besides the circular one. Find the minimal time required to make all visits in the desired order starting from house 1.

Input/Output

[input] integer n

The number of houses, positive integer.

2 ≤ n ≤ 20.

[input] integer array visitsOrder

An array of integers (each from 1 to n, inclusive) representing the order in which you have to visit the houses.

1 ≤ visitsOrder.length ≤ 20,

1 ≤ visitsOrder[i] ≤ n.

[output] an integer

The minimal time required to make all visits in the desired order starting from house 1.

Example

For n = 4 and visitsOrder = [1, 3, 2, 3, 1],

the output should be 6.

Check out the image below for better understanding:

function visitsOnCircularRoad(n, o) {
  o = [1,...o];
  return o.reduce((a,b,i)=>{
    var t = Math.abs(o[i+1]-b);
    return a += Math.min(n-t,t) || 0;
  },0);
}
