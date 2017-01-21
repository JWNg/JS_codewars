Details
Solutions
Discourse (34)
Add to Collection|Share this kata:
Description:

There are no explanations. You have to create the code that gives the following results in Python and Ruby:

one_two_three(0) == [0, 0]
one_two_three(1) == [1, 1]
one_two_three(2) == [2, 11]
one_two_three(3) == [3, 111]
one_two_three(19) == [991, 1111111111111111111]
And it should give the following results in Javascript:

oneTwoThree(0) ---> ['0', '0']
oneTwoThree(1) ---> ['1', '1']
oneTwoThree(3) ---> ['3', '111']
oneTwoThree(19) ---> ['991', '1111111111111111111']
Everyoneneedsawarmupinthemorning

Javascript and ruby versions will be released today.
PUZZLESGAMES

function oneTwoThree(n) {
    let nines = Math.floor(n/9), remainder = n%9;    
    return [ '9'.repeat(nines)+(remainder > 0 || n === 0 ? remainder : '') , n > 0 ? '1'.repeat(n) : '0'];
}
