Description:

Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.
FUNDAMENTALS



function reverseAndMirror(s1,s2) {
  const inverseCase = (letter) => {
      return letter.toLowerCase() === letter ? letter.toUpperCase() : letter.toLowerCase();
  }
  return s2.split('').map(inverseCase).reverse().join('') + "@@@" + s1.split('').map(inverseCase).reverse().join('') + s1.split('').map(inverseCase).join('')  
}
