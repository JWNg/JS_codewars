Create your own mechanical dartboard that gives back your score based on the coordinates of your dart.

Task:

Use the scoring rules for a standard dartboard:

Finish method:
function getDartboardScore(x, y);
The coordinates are (x, y) are always relative to the center of the board (0, 0). The unit is millimeters. If you throw your dart 5 centimeters to the left and 3 centimeters below, it is written as:
var score = getDartboardScore(-50, -30);
Possible scores are:
Outside of the board: "X"
Bull's eye: "DB"
Bull: "SB"
A single number, example: "10"
A triple number: "T10"
A double number: "D10"
A throw that ends exactly on the border of two sections results in a bounce out. You can ignore this because all the given coordinates of the tests are within the sections.
The diameters of the circles on the dartboard are:
Bull's eye: 12.70 mm
Bull: 31.8 mm
Triple ring inner circle: 198 mm
Triple ring outer circle: 214 mm
Double ring inner circle: 324 mm
Double ring outer circle: 340 mm
If you liked this kata, you can also try to Beat The Power!
ALGORITHMSGAMES

//https://www.codewars.com/kata/lets-play-darts/train/javascript
//NEED TO COMPLETE:
// - Trig to determine angle
//

function getDartboardScore(x, y) {
    let radiusFromCenter = Math.sqrt((x*x + y * y))
    
    if (radiusFromCenter < (12.7 / 2)){
         return "DB"  
    }  else if ( radiusFromCenter < (31.8 / 2)) {
        return "SB"
    }  else if ( radiusFromCenter < (198 / 2)) {
        return "10"
    }  else if ( radiusFromCenter < (214 / 2)) {
        return "T10"
    }  else if ( radiusFromCenter < (324 / 2)) {
        return "10"
    }  else if ( radiusFromCenter < (340 / 2)) {
        return "D10"
    } else {
        return "X"
    }
}
