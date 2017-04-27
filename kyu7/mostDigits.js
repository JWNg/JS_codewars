Description:

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
FUNDAMENTALSNUMBERSSTRINGS

const findLongest = array => array.reduce((accum, current)=>{ return `${accum}`.length >= `${current}`.length ? accum: current} )
