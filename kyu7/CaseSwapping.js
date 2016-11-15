Description:

Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS

Examples

FUNDAMENTALS

function swap(str){
  function caseSwap(letter) {
    if (letter.match(/[A-Z]/)) { 
      return letter.toLowerCase(); 
    }
    if (letter.match(/[a-z]/)) { 
      return letter.toUpperCase(); 
    }
    return letter;
  };
  return str.split('').map(caseSwap).join("");
}
