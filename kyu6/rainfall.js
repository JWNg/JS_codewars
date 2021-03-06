//dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.
//
//data and towns can be seen in "Your Test Cases:".
//
//Task:
//
//- function: mean(town, strng) should return the average of rainfall for the city `town` and the `strng` `data` or `data1`.
//- function: variance(town, strng) should return the variance of rainfall for the city `town` and the `strng` `data` or `data1`.
//Examples:
//
//mean("London", data), 51.19(9999999999996) 
//variance("London", data), 57.42(833333333374)
//Notes:
//
//- if functions `mean`or `variance` have as parameter `town` a city which has no records return `-1`
//- Don't truncate or round: the tests will pass if `abs(your_result - test_result) <= 1e-2`.
//- <http://www.mathsisfun.com/data/standard-deviation.html>
//- `data` and `data1` are adapted from <http://www.worldclimate.com>
//FUNDAMENTALSSTRINGS

const towns = ["Rome", "London", "Paris", "NY", "Vancouver", "Sydney", "Bangkok", "Tokyo",
               "Beijing", "Lima", "Montevideo", "Caracas", "Madrid", "Berlin"]

function missingTownCheck(town) {
  if (towns.filter(function(t){return t === town}).length === 0) {return true}
  return false
}

function extractNumbers(town, strng) {

  function nameMatch(name) {
    return name.match(new RegExp(town))
  }

  var split = strng.split('\n'),
      line = split.filter(nameMatch),
      numbers = line[0].match(/(\d+\.\d)/g)
  return numbers;
}

function mean(town, strng) {
  if (town === "") {return -1}
  if (missingTownCheck(town) === true) {return -1}
  var numbers = extractNumbers(town, strng),
      sum = numbers.reduce(function(sum, next) { return parseFloat(sum) + parseFloat(next) });
  
  return sum/12;
  
}
function variance(town, strng) {
  if (town === "") {return -1}
  if (missingTownCheck(town) === true) {return -1}
  var avg = mean(town, strng),
      dataForTown = extractNumbers(town,strng).map(function(string) {return parseFloat(string)}),
      sq = dataForTown.map(function(figure) { return Math.pow( (avg - figure), 2) } ),
      sumDiff = sq.reduce(function(sum, next) {return sum + next} )
  return sumDiff/12;
}
