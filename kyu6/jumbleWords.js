Description:

Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, it deosnt mttaer in waht oredr the ltteers in a wrod are, the olny iprmoetnt tihng is taht the frist and lsat ltteer be at the rghit pclae. The rset can be a toatl mses and you can sitll raed it wouthit porbelm. Tihs is bcuseae the huamn mnid deos not raed ervey lteter by istlef, but the wrod as a wlohe.

Interesting article about this.

Task:

Write a function which mix inner characters in each word,first and last character stays untouched.Notice that punctuation mark is not a part of a word!
requirements:
-at least 10% of all changeable words must differ from original.

If you solve this kata,check how many percent of changeable words you have changed.If you reach 100% you will get a reward!
FUNDAMENTALSSTRINGSALGORITHMS


function jumble(string){
  function jumbleWord(word){
      if (word.length <=2) {return word}
      var splitWord = word.split('');
      return [splitWord[0], splitWord[splitWord.length-2] ,...splitWord.slice(1, splitWord.length-2), splitWord[splitWord.length-1] ].join('')
  }
  var splitString = string.split(/\b/);
  return ( splitString.map(jumbleWord).join(''))  
}
