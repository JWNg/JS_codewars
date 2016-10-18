Take a sentence (string) and reverse each letter in each word in the sentence. Do not reverse the order of the words, just the letters in each word.

Assume there is no punctuation. String will always be defined.

Example: A fun little challenge => 'A nuf elttil egnellahc'

Addendum: Your function receives a writeable null-terminated string.

Mutate the string in-place and return the sentence.

For this kata, you are not required to allocate or de-allocate any memory.
FUNDAMENTALSLOOPSCONTROL FLOWBASIC LANGUAGE FEATURESSTRINGS

function reverser(sentence) {
  function reverseWord(str){
    return str.split('').reverse().join('')
  }
	
  var arr = sentence.split(' ')

  return arr.map(reverseWord).join(' ')
}
