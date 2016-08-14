There's a 3 for 2 offer on mangoes. For a given price and quantity, calculate the total cost of the mangoes.
FUNDAMENTALS


function mango(quantity, price){
  return ((quantity % 3)* price) + (quantity - (quantity % 3))*2/3 * price
}
