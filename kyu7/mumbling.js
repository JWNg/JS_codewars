//Description:
//
//This time no story, no theory. The examples below show you how to write function accum:
//
//Examples:
//
//accum("abcd");    // "A-Bb-Ccc-Dddd"
//accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt");    // "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.
//FUNDAMENTALS

function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

function accum(s) {
  var container = ""
  for (var i = 0 ; i < s.length; i ++) {
    var j = i
    container = container.concat(s[i].toUpperCase());
    while (j > 0) {
      container = container.concat(s[i].toLowerCase());
      j--
    }
    container = container.concat("-");
  }
  return container.substr(0, (container.length-1));
}
