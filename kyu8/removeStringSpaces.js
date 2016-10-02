//Simple, remove the spaces from the string, then return the resultant string.
//FUNDAMENTALSSTRINGSARRAYS

function noSpace(x){
  return x.split('').filter((l) => {return l !== ' '}).join('')
}
