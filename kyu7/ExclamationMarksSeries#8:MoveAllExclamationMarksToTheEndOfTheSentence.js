Description:

Move all exclamation marks to the end of the sentence
Examples

remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
Note

Please don't post issue about difficulty or duplicate.
FUNDAMENTALS

function remove(s){
  let exclMarkCount = s.match(/!/g),
      removedExclMark = s.replace(/!/g, '');
  return removedExclMark + ( exclMarkCount === null ? '' : exclMarkCount.join('') ) ;
}
