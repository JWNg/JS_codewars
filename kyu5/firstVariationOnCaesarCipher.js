The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places up or down the alphabet.

This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).

If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...

Coding: Parameters and return of function "movingShift"

param s: a string to be coded

param shift: an integer giving the initial shift

The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).

If possible the message will be evenly split between the five runners; if not possible, parts 1, 2, 3, 4 will be longer and part 5 shorter. The fifth part can have length equal to the other ones or shorter. If there are many options of how to split, choose the option where the fifth part has the longest length, provided that the previous conditions are fulfilled. If the last part is the empty string this empty string must be shown in the resulting array.

For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string.

You will also implement a "demovingShift" function with two parameters

Decoding: parameters and return of function "demovingShift"

1) an array of strings: s (possibly resulting from "movingShift", with 5 strings)

2) an int shift

"demovingShift" returns a string.

Example:

u = "I should have known that you would have a perfect answer for me!!!"

movingShift(u, 1) returns :

v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

(quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)

and demovingShift(v, 1) returns u.

Ref:

Caesar Cipher : http://en.wikipedia.org/wiki/Caesar_cipher
FUNDAMENTALSCIPHERSALGORITHMSCRYPTOGRAPHYSECURITYSTRINGSUTILITIES

Poweredby_qualified


var upAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', downAlpha = 'abcdefghijklmnopqrstuvwxyz';
function movingShift(s, dist) {return split(shift(s, dist, 1));}
function demovingShift(arr, dist) {return shift(arr.join(''), -dist, -1);}

function shift(s, dist, step) {
  return s.split('').map(function(v, i) {
    var upI = upAlpha.indexOf(v), downI = downAlpha.indexOf(v);
    if(upI == -1 && downI == -1) return v;
    if(upI > -1) var lib = upAlpha, libI = upI;
    else var lib = downAlpha, libI = downI;
    var loc = (i * step + libI + dist) % 26;
    loc = loc >= 0 ? loc : 26 + loc;
    return lib[loc];
  }).join('');
}

function split(s) {
  var sz = Math.ceil(s.length / 5);
  return [s.slice(0, sz), s.slice(sz, sz * 2), s.slice(sz * 2, sz * 3), s.slice(sz * 3, sz * 4), s.slice(sz * 4)];
}
