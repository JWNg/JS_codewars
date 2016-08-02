//Description:

//They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it series #1:
//Are they opposite?

//Task

//Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false.
//The opposite means: All letters of the two strings are the same, but the case is opposite.

//Some examples:

//isOpposite("ab","AB") should return true;
//isOpposite("aB","Ab") should return true;
//isOpposite("aBcd","AbCD") should return true;
//isOpposite("AB","Ab") should return false;
//isOpposite("","") should return false;
//Series:

//Series:

//#1: Are they opposite?
//#2: Equal to 24
//#3: Three lifts
//#4: Key of door
//#5: Only you
//#6: nth user
//#7: Profit or loss
//#8: Reverse all
//#9: Peaks and valleys
//#10: The largest square
//#11: Three increasing numbers
//#12: Split integer
//#13: A game named "Five,Ten,Fifteen,twenty"//
function isOpposite(s1,s2){
  if (s1 === "" || s2 === "") {return false};

  function toOppositeCase(char) {
    (/[a-z]/).test(char) ? char.toUpperCase() : char.toLowerCase();
  }

  var oppositeS1 = "";

  for (var i = 0; i <= s1.length; i ++) {
    oppositeS1 += toOppositeCase(s1[i]); 
  }
  
  if (oppositeS1 === s2) {return true};
  return false;
}
