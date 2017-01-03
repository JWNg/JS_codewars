Description:

In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'

Examples:

FUNDAMENTALSHACKING HOLIDAYSMATHEMATICSALGORITHMSNUMBERS

function whatListAmIOn(actions){
  var check = actions.map(a => "bfk".includes(a[0]) ? "naughty" : "gsn".includes(a[0]) ? "nice" : "");  
  if(check.filter(a => a=="nice").length > check.filter(a => a=="naughty").length) return "nice";
  return "naughty";
}
