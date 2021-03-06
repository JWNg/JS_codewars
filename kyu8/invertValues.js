Description:

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

Python/JS/PHP/Java:

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers.
FUNDAMENTALSINTEGERSNUMBERSLISTSDATA STRUCTURES

const invert = array => array.map((current)=>{return current === 0 ? 0 :current*-1})
