Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.
PUZZLES

function calculate_total(subtotal, tax, tip) {
  return Math.round(( subtotal*(1+(tax*0.01)) + (subtotal*(tip*0.01)) )*100)/100
}
