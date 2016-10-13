Description:

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
FUNDAMENTALSSTRINGS

function switcheroo(str){
  return str.replace(/[ab]/g, function(c) { return c === 'a' ? 'b' : 'a' });
}
