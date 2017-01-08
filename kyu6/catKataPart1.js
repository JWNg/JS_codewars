Description:

The story you are about to hear is true

Our cat, Balor, sadly died of cancer in 2015.

While he was alive, the three neighborhood cats Lou, Mustache Cat, and Raoul all recognized our house and yard as Balor's territory, and would behave respectfully towards him and each other when they would visit.

But after Balor died, gradually each of these three neighborhood cats began trying to claim his territory as their own, trying to drive the others away by growling, yowling, snarling, chasing, and even fighting, when one came too close to another, and no human was right there to distract or extract one of them before the situation could escalate.

It is sad that these otherwise-affectionate animals, who had spent many afternoons peacefully sitting and/or lying near Balor and each other on our deck or around our yard, would turn on each other like that. However, sometimes, if they are far enough away from each other, especially on a warm day when all they really want to do is pick a spot in the sun and lie in it, they will ignore each other, and once again there will be a Peaceable Kingdom.

Your Mission

In this, the first and simplest of a planned trilogy of cat katas :-), all you have to do is determine whether the distances between any visiting cats are large enough to make for a peaceful afternoon, or whether there is about to be an altercation someone will need to deal with by carrying one of them into the house or squirting them with water or what have you.

As input your function will receive a list of strings representing the yard, and an integer representing the minimum distance needed to prevent problems (considering the cats' current states of sleepiness). A point with no cat in it will be represented by a "-" dash. Lou, Mustache Cat, and Raoul will be represented by an upper case L, M, and R respectively. At any particular time all three cats may be in the yard, or maybe two, one, or even none.

If the number of cats in the yard is one or none, or if the distances between all cats are at least the minimum distance, your function should return True/true/TRUE (depending on what language you're using), but if there are two or three cats, and the distance between at least two of them is smaller than the minimum distance, your function should return False/false/FALSE.

Some examples

(The yard will be larger in the random test cases, but a smaller yard is easier to see and fit into the instructions here.)

In this first example, there is only one cat, so your function should return True.

["------------",
 "------------",
 "-L----------",
 "------------",
 "------------",
 "------------"], 10
In this second example, Mustache Cat is at yard[1][3] and Raoul is at yard[4][7] -- a distance of 5, so because this is smaller than the specified minimum distance of 6, there will be trouble, and your function should return False.

["------------",
 "---M--------",
 "------------",
 "------------",
 "-------R----",
 "------------"], 6
In this third example, Lou is at yard[0][11], Raoul is at yard[1][2], and Mustache Cat at yard[5][2]. The distance between Lou and Raoul is 9.05538513814, the distance between Raoul and Mustache Cat is 4, and the distance between Mustache Cat and Lou is 10.295630141 -- all greater than or equal to the specified minimum distance of 4, so the three cats will nap peacefully, and your function should return True.

["-----------L",
 "--R---------",
 "------------",
 "------------",
 "------------",
 "--M---------"], 4
Have fun!
FUNDAMENTALSMATHEMATICSALGORITHMSNUMBERS

function peacefulYard(yard, minDistance) {
  var catsInYard = countCats(yard);
  if (catsInYard < 2){
    return true;
  }else if (allDistancesSufficient(yard, minDistance)){
    return true;
  }else{
    return false;
  }
}

// How many cats are in the yard?
function countCats(yard){
  var catCount = 0;
  for (var rowIndex = 0; rowIndex < yard.length; rowIndex++){
    for (var colIndex = 0; colIndex < yard[rowIndex].length; colIndex++){
      var char = yard[rowIndex][colIndex];
      if (char == "L" || char == "M" || char == "R"){
        catCount++;
      }
    }
  }
  return catCount;
}

// Are all the distances between the cats sufficient to maintain peace?
function allDistancesSufficient(yard, minDistance){

  // Establish the locations of all the cats in the yard
  var catLocations = [];
  for (var rowIndex = 0; rowIndex < yard.length; rowIndex++){
    for (var colIndex = 0; colIndex < yard[rowIndex].length; colIndex++){
      var char = yard[rowIndex][colIndex];
      if (char == "L" || char == "M" || char == "R"){
        catLocations.push([rowIndex, colIndex]);
      }
    }
  }
  
  // Check all the intercat distances
  for (var leftCatIndex = 0; leftCatIndex < catLocations.length - 1; leftCatIndex++){
    for (var rightCatIndex = leftCatIndex + 1; rightCatIndex < catLocations.length; rightCatIndex++){
      if (distance(catLocations[leftCatIndex], catLocations[rightCatIndex]) < minDistance){
        return false;
      }
    }
  }
  return true;
}

// Determine the distance between two cats
function distance(cat1loc, cat2loc){
  if (cat1loc[0] == cat2loc[0]){
    return Math.abs(cat1loc[1] - cat2loc[1]);
  }else if (cat1loc[1] == cat2loc[1]){
    return Math.abs(cat1loc[0] - cat2loc[0]);
  }else{
    var aSquared = Math.pow(Math.abs(cat1loc[0] - cat2loc[0]), 2);
    var bSquared = Math.pow(Math.abs(cat1loc[1] - cat2loc[1]), 2);
    return Math.sqrt(aSquared + bSquared)
  }
}
