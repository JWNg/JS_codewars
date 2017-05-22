Task

You're given an equation that consists of numbers, parenthesis and operations '+' and '-'. But you don't want just to calculate it's result the way ordinary people do. You have your own rules of calculation!

Firstly, you remove all whitespaces from the equation (who needs them anyway)?

Secondly, you calculate the sum of even digits in it. If there's a '-' symbol just before the digit, you consider it as a negative number.

Thirdly, you calculate the sum of odd digits, paying attention to the '-' symbols as well.

Finally, you subtract the sum of the odd digits from the sum of even digits. The obtained result is the result of the equation.

Now you need to write a program that does this kind of calculation for you. Given an equation, calculate it's value with your very own algorithm.

Note: equation can be confusing and invalid ;-)

Input/Output

[input] string equation

An equation (not necessarily correct) consisting of digits, parenthesis and operators '-' and '+'.

0 ≤ equation.length ≤ 100

[output] an integer

Result of the equation.

Example

For equation = "(-100) + 100 - (-200) + 1", the output should be -3.

remove the whitespaces:

"(-100)+100-(-200)+1"

there's only one even digit, which is -2;

odd digits sum up to -1 + 1 + 1 = 1;

their difference is -2 - 1 = -3`.

For equation = "(-25) + (-75) + 50 - 40 - (22 + 2)", the output should be -8.

remove the whitespaces:

"(-25)+(-75)+50-40-(22+2)"

even digits sum up to -2 - 4 + 2 + 2 + 2 = 0;

odd digits sum up to 5 - 7 + 5 + 5 = 8;

their difference is 0 - 8 = -8.
FUNDAMENTALS


function sumtheDifference(equation) {  
    var even = equation.split('').filter(c => c !== ' ').reduce((accum, val, index, eqn)=>{
        if(!!val.match(/\d/) && val.match(/\d/)[0]%2 === 0){
            return (eqn[index-1] === '-'? - (parseInt(val)): (parseInt(val))) + accum 
        } else {
            return accum
        }
    }, 0)
    
    var odd = equation.split('').filter(c => c !== ' ').reduce((accum, val, index, eqn)=>{
        if(!!val.match(/\d/) && val.match(/\d/)[0]%2 !== 0){
            return (eqn[index-1] === '-'? - (parseInt(val)): (parseInt(val))) + accum 
        } else {
            return accum
        }
    }, 0)
    
    return even - odd
}

function sumtheDifference(equation) {
  let sum = 0;
  
  equation
    .replace(/\s+/g, '')
    .replace(/-?(\d)/g, (n, d) => {
      sum += (d % 2 ? -1 : 1) * n
    });
    
  return sum;
}
