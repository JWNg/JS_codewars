//Description:
//
//Personalized greeting
//
//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
//Use conditionals to return the proper message:
//
//case	return
//name equals owner	'Hello boss'
//otherwise	'Hello guest'
//FUNDAMENTALSCONDITIONAL STATEMENTSCONTROL FLOWBASIC LANGUAGE FEATURES

function greet (name, owner) {
  if (name === owner) {return "Hello boss"};
  return "Hello guest";
}

//
//function greet (name, owner) {
//  return name === owner ? 'Hello boss' :   'Hello guest';
//}//
