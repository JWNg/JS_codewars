//Suzuki is a monk who climbs a large staircase to the monastery everyday as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs will be climbed over the next 20 years and has spent a year marking down his daily progress.
//
//You will receive the following data structure representing the stairs Suzuki logged in a year
//
//stairs = [[sunday],[monday],[tuesday],[wednesday],[thursday],[friday],[saturday]]
//Make sure your solution takes into account all of the nesting within the stairs list.
//
//var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
//Based on the number of stairs he climbed in a year predict the number he will climb in 20 years. Your function should return an integer.
//

function stairsIn20(s){
  //your code here
  var sum = 0;
  for (i in s) {
    for (j in s[i][0]) {
     sum += s[i][0][j];
    }
  }
  return (sum*20);
}
