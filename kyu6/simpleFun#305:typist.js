Task

John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.

Given a string s. Your task is to count how many times the keyboard has been tapped by John.

You can assume that, at the beginning the Caps Lock light is not lit.

Input/Output

[input] string s

A non-empty string. It contains only English letters(uppercase or lowercase).

1 ≤ s.length ≤ 10000

[output] an integer

The number of times John tapped the keyboard.

Example

For s = "a", the output should be 1.

John hit button a.

For s = "aa", the output should be 2.

John hit button a, a.

For s = "A", the output should be 2.

John hit button Caps Lock, A.

For s = "Aa", the output should be 4.

John hit button Caps Lock, A, Caps Lock, a.
FUNDAMENTALS

    
 function typist(s){
    return s.split('').reduce((accum, current, index, array)=>{
        if (index === 0 && current.toUpperCase() === current) {
            return accum +=2
        } else if (index === 0 && current.toLowerCase() === current) {
            return accum +=1
        } else if ((current.toLowerCase() === current && array[index-1] !== array[index-1].toLowerCase()) || (current.toUpperCase() === current && array[index-1] !== array[index-1].toUpperCase())) {
            return accum +=2
        } else {
            return accum +=1
        }
    }, 0)
}
