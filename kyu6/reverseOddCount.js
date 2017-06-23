Reverse all elements in an array that occur an odd number of times.

['a', 'a', 'b', 'c', 'c', 'd'] will output:

['a', 'a', 'd', 'c', 'c', 'b']

Since there are 2 a's and 2 c's, they will stay in place. There is 1 d and 1 b, so they will swap places.
FUNDAMENTALS


function reverseOddCount(array){
    var reversed = array.filter((current)=>{return count(array, current)%2 === 1})
    return array.map((current)=>{
        return count(array, current)%2===1?reversed.pop():current;
    })    
}

function count(array, obj){
    return array.filter((current)=>{return obj === current}).length
}
