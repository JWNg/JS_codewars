Description:

Task

You are given a moment in time and space. What you must do is break it down into time and space, to determine if that moment is from the past, present or future.

Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].

Space in the number of characters which do not increase time (i.e. all characters but those that increase time).

The moment of time is determined as follows:

If time is greater than space, than the moment is from the future.
If time is less than space, then the moment is from the past.
Otherwise, it is the preset moment.
You should return an array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.
Examples

For moment = "01:00 pm", the output should be [true, false, false].

time equals 1, and space equals 7, so the moment is from the past.

For moment = "12:02 pm", the output should be [false, true, false].

time equals 5, and space equals 5, which means that it's a present moment.

For moment = "12:30 pm", the output should be [false, false, true].

time equals 6, space equals 5, so the moment is from the future.
Input/Output

[input] string moment

The moment of time and space that the input time came from.
[output] a boolean array

Array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.
FUNDAMENTALS

function momentOfTimeInSpace(moment) {

  moment = moment.split('');
  var numbers = '123456789'.split('');
  var time = 0;
  var space = 0;

  for(var i = 0 ; i < moment.length ; i++){
    if(numbers.includes(moment[i])){
      time += Number(moment[i]);
    }else{
      space++;
    }
  }

  var past = (time < space);
  var present = (time === space);
  var future = (time > space);

  return [past, present, future];
}
