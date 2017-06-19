Given a string of words (x), you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything inbetween.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lower case and all inputs will be valid.
FUNDAMENTALSSTRINGSARRAYSNUMBERS


function high(x){
    return x.split(' ').reduce((accum, current)=>{
        return score(current) > score(accum)? current:accum;  
    })
}

function score(word){
    return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
}
