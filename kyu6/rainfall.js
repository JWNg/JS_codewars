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
