Description:

Return an output string that translates an input string s by replacing each character in s with a digit representing the number of times that character occurs in s and separating digits with the character(s) sep.

freqSeq('hello world', '-'); // => '1-1-3-3-2-1-1-2-1-3-1'
freqSeq('19999999',    ':'); // => '1:7:7:7:7:7:7:7'
freqSeq('^^^**$',      'x'); // => '3x3x3x2x2x1'
FUNDAMENTALSSTRINGS

function freqSeq(str, sep) {
  var strArray = str.split('')
  return strArray.map(letter => strArray.filter(matchLetter => matchLetter === letter).length).join(sep);
}
