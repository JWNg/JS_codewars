//x Simple, given a string of words, return the length of the shortest word(s).
//
//String will never be empty and you do not need to account for different data types.
//FUNDAMENTALS
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
  return s.split(' ').sort((first,second)=>{return (first.length)-(second.length)})[0].length
}
