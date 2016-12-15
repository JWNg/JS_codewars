Description:

Given a string of numbers, you should replace any number below 5 with '0' and any number 5 and above with '1'. Return the resulting string.
FUNDAMENTALSSTRINGSARRAYS

function fakeBin(x){
  return x.split('').map(dig => {return dig >= 5 ? '1' : '0'}).join('')
}
