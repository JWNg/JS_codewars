Description:

Compare two strings by comparing the sum of their values (ASCII character code).
For comparing treat all letters as UpperCase.

Null-Strings should be treated as if they are empty strings.
If the string contains other characters than letters, treat the whole string as it would be empty.

Examples:

"AD","BC" -> equal

"AD","DD" -> not equal

"gf","FG" -> equal

"zz1","" -> equal

"ZzZz", "ffPFF" -> equal

"kl", "lz" -> not equal

null, "" -> equal

Your method should return true, if the strings are equal and fals if they are not equal.
FUNDAMENTALSBASIC LANGUAGE FEATURESMATHEMATICSALGORITHMSNUMBERSSTRINGS


function compare(s1, s2) {
  if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
    return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
           s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
  return true;
}
