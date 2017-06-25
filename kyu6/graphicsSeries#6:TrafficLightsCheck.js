Graphics Series #6:
Traffic lights check

Task

John works in a factory that produces traffic lights. His task is to check whether the traffic lights are qualified. He will judge three indicators: the color of the light, the radius size and the switching logic. Finally, he will give the product a final result: qualified or not qualified

Rules

Give you an object ```lights``` like this:
```
{
red:{color:"#ff0000",radius:10,step1:"yellow",step2:"",step3:"",step4:""},
yellow:{color:"#ffff00",radius:10.5,step1:"",step2:"green",step3:"",step4:"red"},
green:{color:"#00ff00",radius:9.5,step1:"",step2:"",step3:"yellow",step4:""}
}
```
As you see, ```lights``` contains three objects: ```red, yellow, green```. John should check for every item of each light:
1) Qualified color range

red light: #aa0000 - #ff0000

It means the red part of color code(1st and 2nd digits of hex value) range is aa - ff, other digits should be 0

green light: #00aa00 - #00ff00

It means the green part of color code(3rd and 4th digits of hex value) range is aa - ff, other digits should be 0

yellow light: #aaaa00 - #ffff00

It means the red part and the green part of color code(1st,2nd and 3rd,4th digits of hex value) range are aa - ff, 5th and 6th digits should be 0 (yellow is made up of red and green).
2) Qualified radius size

The radius size range of all lights should be: 9.5 - 10.5
3) Qualified switching logic

The light switching logic should be:

  red  ---->  yellow ---->  green  ---->  yellow  ---->  red  ---->  ......
       step1         step2         step3          step4       step1  ......
If all check item passed, return "qualified"; If not, return "not qualified"
Graphics Series:

#1: barcode EAN-13 part1
#2: barcode EAN-13 part2
#3: Repair the LED display
#4: Fireworks
#5: The rope is burning
#6: Traffic lights check
PUZZLESGAMES
