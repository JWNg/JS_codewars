Description:

Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays(in C an array of Pair), each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

Examples:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see Example Tests: for more details.
FUNDAMENTALSALGORITHMSOPTIMIZATION

function listSquared(m, n) {
    var container = [];
    for (var i = m; i < n; i++) {
        let squaredDivisors = listOfSquaredDivisors(i);
        let sum = squaredDivisors.reduce((accum,num)=>{return accum + num})
        if (Math.sqrt(sum)%1 == 0) { container.push([i, sum]) }
    }
    return(container);

}

function listOfSquaredDivisors(number) {
    var divisors = [];
    for (var i = 1; i <= (Math.sqrt(number)); i++) {
        if (number%i == 0){
            divisors.push(i*i);
            if(i != (number/i)) {divisors.push((number/i)*(number/i))};
        }
    } 
    return divisors;
}
