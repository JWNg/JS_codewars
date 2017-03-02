Description:

Task:

Given n representing the number of floors build a beautiful multi-million dollar mansions like the ones in the example below:

/*
     /\
    /  \
   /    \
  /______\  // number of floors 3
  |      |
  |      |
  |______|

     /\
    /  \
   /____\
   |    |   // 2 floors
   |____|

     /\
    /__\    // 1 floor
    |__|

*/


Note: whitespace should be preserved on both sides of the roof. Number of floors will go up to 30. There will be no tests with invalid input.
If you manage to complete it, you can try a harder version here

Good luck!
FUNDAMENTALSCONTROL FLOWBASIC LANGUAGE FEATURESLOOPS

function myCrib(n) {
//height (n x 2) + 1
//width (n x 2) + 2\
    return roof(n) + square(n);
}

//space on each side starts at n, n-1 and etc
function roof(n){
    var roof = ''    
    for (var i = n; i >= 0; i --){
        roof = roof + (i === 0 ? 
        ' '.repeat(i) + '/' + '_'.repeat((n-i)*2) + '\\' +  ' '.repeat(i) + "\n":
        ' '.repeat(i) + '/' + ' '.repeat((n-i)*2) + '\\' + ' '.repeat(i) + "\n")
    }
    return roof
}

//
function square(n){    
    return ("|" + ' '.repeat(n*2) + "|" + "\n").repeat(n-1) + ("|" + '_'.repeat(n*2) + "|")
}
