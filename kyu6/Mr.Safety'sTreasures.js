Introduction

Mr. Safety is a lower of numeric locks and Nokia 3310. He locked almost everything in his house. He is so smart and he doesn't need to know the combination of numbers. He has an algorithm to generate new passcodes on his Nokia. 
postimage

Task

Can you crack his numeric locks? Mr. Safety's treasures wait for you. Write an algorithm to open his numeric locks. Can you do it without his Nokia 3310?

Input

The str input string consists of lowercase and uperrcase characters. It's a name of object that you want to unlock.

Output

Return a string consists of only digits.
Example

unlock("Nokia");  // => 66542
unlock("Valut");  // => 82588
unlokc("toilet"); // => 864538
PUZZLESGAMES


function unlock(str){
  str=str.toLowerCase()
  var output = ''
  for(var i = 0; i<str.length; i++){
    if(["a","b","c"].includes(str[i])){
      output=output.concat(2)
    } else if(["d","e","f"].includes(str[i])){
      output=output.concat(3)
    } else if(["g","h","i"].includes(str[i])){
      output=output.concat(4)
    } else if(["j","k","l"].includes(str[i])){
      output=output.concat(5)
    } else if(["m","n","o"].includes(str[i])){
      output=output.concat(6)
    } else if(["p","q","r","s"].includes(str[i])){
      output=output.concat(7)
    } else if(["t","u","v"].includes(str[i])){
      output=output.concat(8)
    } else {
    output=output.concat(9)
    }
  }
   return output;
}
