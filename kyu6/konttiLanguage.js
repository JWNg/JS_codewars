Description:

Kontti language is a finnish word play game, you add -kontti to the end of a word and then switch their first letters until the first vowel (as in "aeiouy"); if no vowel is present, the word stays the same.

For example the word lamppu becomes komppu-lantti; aeiou becomes koeiou-antti and so on.

Write a string method that turns a sentence into a kontti sentence!
FUNDAMENTALSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESSTRINGS

String.prototype.kontti = function(){
  return this.replace(/([^ aeiouy]*[aeiouy])([a-z]*)/g,"ko$2-$1ntti");
}
