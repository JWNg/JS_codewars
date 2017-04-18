Description:

Create the function type which takes the argument val and returns val's type as a string. If possible, type should return additional information. Instead of a wall of text, here are code examples:

type(undefined) --> 'Undefined'
type(null) --> 'Null'
type(true) --> 'Boolean'
type(function(){}) --> 'Function'
type(Math.max) --> 'Function'
type('abc') --> 'String'
type({snap: "crackle"}) --> 'Object'

//Numbers should include additional information
type(1) --> 'Number Integer'
type(1.1) --> 'Number Float'
type(NaN) --> 'Number NaN'
type(-Infinity) --> 'Number Infinite'

//If a string is numeric-formatted:
type('123')
type('123.321')
type('0xF')
  --> All return 'String Numeric'

//For constructed objects, return the name of the constructor
type(/abc/) --> 'RegExp'
type([1,2,3]) --> 'Array'
function Custom(){}
type(new Custom()) --> 'Custom'
Related reading: MDN's page for Object.prototype.toString and Object.prototype.constructor.
FUNDAMENTALSUTILITIESVALIDATIONALGORITHMSCONTROL FLOWBASIC LANGUAGE FEATURESSTRINGSNUMBERS

function type(val) {
  if(typeof val === 'undefined') return 'Undefined';
  if(typeof val === 'boolean') return 'Boolean';
  if(typeof val === 'function') return 'Function';
  if(typeof val === 'number'){
    if(isNaN(val)) return 'Number NaN';
    if(!isFinite(val)) return 'Number Infinite';
    if(Math.floor(val)===val) return 'Number Integer';
    else return 'Number Float';
  }
  if(typeof val === 'string'){
    if(isNaN(Number(val))) return 'String';
    return 'String Numeric';
  }
  if(typeof val === 'object'){
    if(val===null) return 'Null';
    var val_str = Object.prototype.toString.call(val).split(' ')[1].split(']')[0];
    if(val_str==='Object'|| val_str==='Error') return val.constructor.name;
    return val_str;
    }
}
