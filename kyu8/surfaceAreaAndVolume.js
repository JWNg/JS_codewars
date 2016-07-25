//Write a function that returns the total surface area and volume of a box as an array: [area, volume].

function getSize(width, height, depth) {
  var solution = [];  
  solution.push((width*height*2 + width*depth*2 + depth*height*2));
  solution.push((width*height*depth));
  return solution;
};
