

function sequenceSum(begin, end, step){
  if( begin > end && step > 0) {return 0}
  if ( begin < end && step < 0) {return 0}
  let increment = Math.floor(( end - begin )/step);
  let incrementTotal = ((increment * increment/2) + (increment/2))*step;
  let baseTotal = (increment+1) * begin;
  return incrementTotal + baseTotal
}
