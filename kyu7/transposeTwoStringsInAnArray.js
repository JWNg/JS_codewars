Description:

You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be
PUZZLESARRAYSSTRINGSMETHODSFUNCTIONSOBJECT-ORIENTED PROGRAMMINGCONTROL FLOWBASIC LANGUAGE FEATURESFUNDAMENTALS

function transposeTwoStrings(arr){
  function equalize(str1, str2){
    var greaterLength = ( str1.length >= str2.length ? str1.length : str2.length ),
        diff = str1.length - str2.length,
        eqstr1 = str1.slice(),
        eqstr2 = str2.slice();
    if (diff > 0){ 
      eqstr2 = eqstr2 + " ".repeat(diff);
    } else { eqstr1 = eqstr1 + " ".repeat((diff*-1))};
    return [eqstr1, eqstr2];  
  };
  
  var eqArr = equalize(arr[0], arr[1]);
  var string = "";
  console.log(eqArr);
  for(var i = 0; i < eqArr[0].length ; i++) {
    string  = string.concat(eqArr[0][i] + " " + eqArr[1][i] + "\n"); 
  }
  
  return string.slice(0,-1);  
  
}
