Is it possible to write a book without the letter 'e' ?

Task

Given String str, return:

How much "e" does it contains (case-insensitive) - return number as String.
If given String doesn't contain any "e", return: There is no "e".
If given String is empty, return empty String.
If given String is null, return null
FUNDAMENTALS

function findE(str){
    if(str === null) {return null}
    if(str.length === 0) {return ''}
    let count = str.split('').filter((letter)=>{return letter === 'e' || letter === 'E'}).length
    return count>0? count+'':'There is no "e".'
}
