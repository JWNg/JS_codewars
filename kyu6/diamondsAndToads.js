Base on the fairy tale Diamonds and Toads from Charles Perrault. In this kata you will have to complete a function that take 2 arguments:

A string, that correspond to what the daugther says.
A string, that tell you wich fairy the girl have met, this one can be good or evil.
The function should return the following count as a hash:

If the girl have met the good fairy:
count 1 ruby everytime you see a r and 2 everytime you see a R
count 1 crystal everytime you see a c and 2 everytime you see a C
If the girl have met the evil fairy:
count 1 python everytime you see a p and 2 everytime uou see a P
count 1 squirrel everytime you see a s and 2 everytime you see a S
Note: For this kata I decided to remplace the normal Diamonds and Toads by some programming languages. And just discover that Squirrel is a programming language.
FUNDAMENTALSSTRINGSNUMBERSCONTROL FLOW

function findAndCount (find, sentence) {
  var arr = sentence.split('')
  return arr.filter((letter) => {if(letter === find) {return letter}}).length
}

function diamondsAndToads(sentence,fairy){
  var obj = {}
  if(fairy === "good") {
    var RrCount  = findAndCount('r', sentence) + (2* findAndCount("R", sentence)),
    CcCount  = findAndCount('c', sentence) + (2* findAndCount("C", sentence));
    obj["ruby"] = RrCount;
    obj["crystal"] = CcCount;
    return obj    
  }
  var PpCount  = findAndCount('p', sentence) + (2* findAndCount("P", sentence)),
  SsCount  = findAndCount('s', sentence) + (2* findAndCount("S", sentence));
  obj["squirrel"] = SsCount;
  obj["python"] = PpCount;
  return obj  
}

function diamondsAndToads(s,good){
  const ct=c=>s.split(c).length-1+(s.split(c.toUpperCase()).length-1)*2
  return good=="good"?{ruby: ct("r"), crystal: ct("c")}:{python:ct("p"), squirrel:ct("s")}
}
