Description:

Coding 3min: Balance Attraction

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:

Insert some characters into a string, if there are the same characters in the string, they attract each other.

  sc("abc",["b"]) === "abbc"
If there are two or more parts in a string, both have the same character. Character will be added to the shorter character chain.

  sc("abbbab",["b"]) === "abbbabb"
  sc("ababbb",["b"]) === "abbabbb"
If there are two or more parts in a string, both have the same character, and chains have same length. Character will be added to the left one.

  sc("ababab",["b"]) === "abbabab"
If there is no same character in the string, add character to the end of string.

  sc("ab",["c"]) === "abc"
input: string str, string array chars，insert chars into str, str and char range is a-z.

output: the str after insert chars
Series:

Bug in Apple
Father and Son
Jumping Dutch act
Planting Trees
Give me the equation
Find the murderer
Reading a Book
Eat watermelon
Special factor
Guess the Hat
Symmetric Sort
Are they symmetrical?
Max Value
Trypophobia
Virus in Apple
Balance Attraction
Remove screws I
Remove screws II
Regular expression compression
Collatz Array(Split or merge)
Tidy up the room
Waiting for a Bus


PUZZLESGAMES

function sc(str, chars) {
  for (let char of chars) {
    let len = RegExp(char).test(str) ? (str.match(RegExp(char+'+','g'))||[]).reduce((l,m)=>Math.min(m.length, l),str.length) : 0;
    str = len ? str.replace(RegExp(`([^${char}]|^)${char}{${len}}([^${char}]|$)`),`$1${char.repeat(len+1)}$2`) : str + char;
  }
  return str;
}
