Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
FUNDAMENTALSMATHEMATICSALGORITHMSNUMBERS

function average(scores) {
  var sum = scores.reduce((sum, next) => { return sum + next }),
      length = scores.length;
  return Math.round(sum/length);
}