They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. series #10:
The largest square

Task

Give you a 2D array ```wall```:
```
[ ["X"," "," "," "," "," "], [" "," "," "," "," "," "], [" "," "," "," "," "," "], [" "," "," "," "," "," "], [" "," "," "," "," "," "], [" "," "," "," "," "," "] ]

```

```" "``` is the blank part, ```"X"``` is the hole in the wall, please find the largest square (no hole) on the wall, return its area.

The above example should return ```25```, because the maximum square that can be found is ```5X5```

Please see more example in testcases.
function max(wall){
  var max = 0;
  for(let j=0; j<wall.length; j++) for(let i=0; i<wall[0].length; i++) if(wall[j][i]===' ') {
    let submax = 1;
    for(let blocked=false;; submax++) {
      for(let k=0; k<=submax; k++) if((!wall[j+submax]||wall[j+submax][i+k]!==' ')||(!wall[j+k]||wall[j+k][i+submax]!==' ')) blocked = true;
      if(blocked) break;
    }
    max = Math.max(max, submax);
  }
  return max*max;
}
