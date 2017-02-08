Description:

Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05
ALGORITHMS

function calculateProbability(n){
  if(n < 1)
    return 0;
  if(n > 365)
    return 1;
    
  var p = 1, i = 0;
  
  while(++i < n)
    p *= 1 - (i / 365);
    
  return Math.round(100 * Math.min(1, Math.max(0, 1 - p))) / 100;
}
