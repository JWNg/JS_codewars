Description:

A triangle is called an equable triangle if its area equals its perimeter. Return true if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding! Please rate and rank the Kata!
FUNDAMENTALSGEOMETRYALGEBRAMATHEMATICSALGORITHMS

function equableTriangle(a,b,c) {
  var peri = a+b+c,
      area = Math.sqrt(peri/2*(peri/2-a)*(peri/2-b)*(peri/2-c))
  
  return (peri === area ?   
  true : 
  false
  ) 
}
