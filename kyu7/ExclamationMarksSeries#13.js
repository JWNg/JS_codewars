Description:

Description:

Count the number of exclamation marks and question marks, return the product. The string only contains ! and ?.
Examples

product("") === 0
product("!") === 0
product("!!") === 0
product("!??") === 2
product("!???") === 3
product("!!!??") === 6
product("!!!???") === 9
product("!???!!") === 9
product("!????!!!?") === 20
Note

Please don't post issue about difficulty or duplicate.
FUNDAMENTALS

function product(s){
 var exMark = s.split('').filter((letter) => {return letter === "!"}),
     qsMark = s.split('').filter((letter) => {return letter === "?"});
  return exMark.length * qsMark.length;  
}
