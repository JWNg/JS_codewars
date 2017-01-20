Description:

Description:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] 

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array)

Happy coding!

FUNDAMENTALSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESSTRINGS



const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);


//return the total number of smiling faces in the array
function countSmileys(arr) {
  function smileyFilter(str){
    return !(str[0] === ':' || str[0] === ';') ? 
      false:
      (str.length === 2) ?
        ((str[1] === 'D' || str[1] === ')')? true : false ):
        (!(str[1] === '-' || str[1] === '~')?
          false: 
          str[2] === ')' || str[2] === 'D' ? true : false )
  }
  
  return arr.filter(smileyFilter).length
  
}
