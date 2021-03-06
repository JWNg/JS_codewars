Description:

John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.

Unfortunately everything is mixed, things are not always in the same order, lines are cluttered with non-alpha-numeric characters.

Examples of Johns phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a phone number returns a string for this number : "Phone => num, Name => name, Address => adress"

Examples:

s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
It can happen that, for a few phone numbers, there are many people for a phone number -say nb- , then

return : "Error => Too many people: nb"

or it can happen that the number nb is not in the phone book, in that case

return: "Error => Not found: nb"

You can see other examples in the test cases.

JavaScript random tests completed by @matt c

Note

Codewars stdout doesn't print part of a string when between < and >
FUNDAMENTALS STRINGS

function phone(strng, num) {

  let lines = strng.split('\n')
  let index = -1

  for (let i = 0, l = lines.length; i < l; i++) {
    if (lines[i].indexOf(num) !== -1) {
      if (index !== -1)
        return ("Error => Too many people: " + num)
      index = i
    }
  }
  
  if (index === -1)
    return ("Error => Not found: " + num)
    
  let name = lines[index].match(/<([^>]+)>/)[1]
  let address = lines[index].replace("+"+num,'')
                  .replace(`<${name}>`,'')
                  .replace(/[^\w-. ]/g,'')
                  .replace(/_/g,' ')
                  .replace(/^ +| +$| (?= )/g,'')
  
  return `Phone => ${num}, Name => ${name}, Address => ${address}`
}

function phone(dr, num) {
    var drArray = dr.split("\n");
    
    //check for too many people and number not found
    if (checkMatchCount(drArray, num) === 0 || checkMatchCount(drArray, num) === 2 ) { return (checkMatchCount(drArray, num) === 0 ? 
        "Error => Not found: " + num
        :   "Error => Too many people: " + num )
    };
    
    var entryStr = findEntry(drArray, num);
    var address = entryStr.replace(/<.+>/g, '').replace(new RegExp(num, 'g'), '').match(/[\da-zA-Z\.]/g).join('')
    console.log(address);
    return "Phone => " + num + ", Name => " + findName(entryStr, num) + ", Address => " + address;
}

const checkMatchCount = (drArray, num) => drArray.filter((entry)=>{return entry.match(new RegExp(num, 'g'))}).length;
const findEntry = (drArray, num) => {return drArray.filter((entry)=>{ return entry.match(new RegExp(num, 'g'))})[0]};
const findName = (entryStr, num) => entryStr.match(/<.+>/g)[0].slice(1, -1);
