
Description:

Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

Remember, only the process of change from wave to calm (and vice versa) will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that figure is more than 20% of the string, return "Throw Up", if less, return "No Problem".
FUNDAMENTALSSTRINGSARRAYS

function seaSick(x){
  let change = 0,
      same = 0;
  
  for (let n = 1; n <= x.length; n++){
    x[n] === x[(n-1)] ? same += 1 : change += 1;
  }
  return change === 0 || x.length === 1 || change/same <= 0.2 ? "No Problem" : "Throw Up";
}
