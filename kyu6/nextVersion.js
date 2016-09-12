//You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.
//
//Exercice
//
//Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.
//
//For example:
//
//nextVersion("1.2.3") === "1.2.4";
//nextVersion("0.9.9") === "1.0.0.";
//nextVersion("1") === "2";
//nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
//nextVersion("9.9") === "10.0";
//Rules
//
//All numbers, except the first one, must not be greater than 10: if there are, you have to set them to 0 and increment the next number in sequence.
//
//You can assume all tests inputs to be valid.
//ALGORITHMSARRAYSSTRINGS

function nextVersion(version){
  if (version.includes('.') !== true) {return `${parseInt(version)+1}`} 
  var split = version.split('.'),
      join = (parseInt(split.join(''))+1).toString(),
      dots = split.length - 1,
      parsed = join.split('').join('.'),
      diff = parsed.match(/\./g).length - dots
  if (diff === 0) {return parsed}

  for ( let i = diff; i > 0 ; i -- ) { 
    parsed = parsed.replace(/\./, "")
  } 
  return parsed
}
