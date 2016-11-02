Description:

We are given two arrays of integers A and B and we have to output a sorted array with the integers that fulfill the following constraints:

they are present in both ones
they occur more than once in A and more than once in B
their values are within a given range
thay are odd or even according as it is requested
arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3]
arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0]
rng = [-4, 4] # is the range of the integers from -4 to 4 (inclusive)
wanted = 'odd'
Process to obtain the result:

0, 1, 2, 3, 7, are the numbers present in arrA and arrB
1, 2, 3, 7,  occur twice or more in arrA and arrB
1, 2, 3,  are in the range [-4, 4]
1, 3, are odd
output: [1, 3]
For the case:

arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4]
arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4]
rng = [-4, 4]
wanted = 'even'
output[0, 2, 4]
If there are no elements to fulfill the constraints given above the result will be the empty array.

The name of the function with the corresponding order of its arguments and the data structure for the output is as it follows below:

find_arr(arrA, arrB, rng, wanted) ----> []
(For Javascript the function will be findArr()) Features of the tests:

Number of Random Tests = 300
Length of the arrays A and B between 1000 and 10000
You may assume that you will always receive valid entries for all the tests. Enjoy it!! Very Important: For javascript run the tests only in Node v6.6.0 and Node v6.6.0/Babel.
FUNDAMENTALSDATA STRUCTURESALGORITHMSCONTROL FLOWBASIC LANGUAGE FEATURESMATHEMATICSNUMBERSOPTIMIZATIONDECLARATIVE PROGRAMMINGSTRINGS

const findArr=(arrA, arrB, rng, w)=>((aA,aB)=>Array.from(new Set(aA)).filter(a=>(i=>aA.slice(i+1).indexOf(a)!=-1)(aA.indexOf(a))&&(i=>(i!=-1)&&aB.slice(i+1).indexOf(a)!=-1)(aB.indexOf(a))).sort((a,b)=>a-b))(arrA.filter(a=>(w=="even" ? a%2==0 : a%2)&&a>=rng[0]&&a<=rng[1]),arrB.filter(a=>(w=="even" ? a%2==0 : a%2)&&a>=rng[0]&&a<=rng[1]));


function findArr(arrA, arrB, rng, wanted) {
    function repeatsOnly(array){
      var returnArray= [];
      for (var i = 0; i <= array.length; i++) {
        var search = array[i]
        var count = array.reduce((n,current) => {
          return n + (current === search);
        }, 0)
        if (count > 1 && !returnArray.includes(search)) { returnArray.push(search) };
      }
      return returnArray;
    };
    
    function foundInBoth(array1, array2){
      var returnArray = [];
      for (var i = 0; i<= array1.length; i++) {
        if (array2.includes(array1[i])){ returnArray.push(array1[i]) };
      }
      return returnArray;
    }
    
    function rangeFilter(value) { 
      return (value >= range[0] && value <= range[1] )
    };

    var range = rng.sort((x, y)=> {
      if( x <= y ) {
        return -1
      } else { return 1 };
    });
    
    var wantedNum = (wanted === "odd" ? 1 : 0);
    var arrARepeatOnly = repeatsOnly(arrA), 
        arrBRepeatOnly = repeatsOnly(arrB);
    var combined = foundInBoth(arrARepeatOnly, arrBRepeatOnly);
    var returnValue = combined.filter(rangeFilter).filter((val) => {
          return ((val%2)===wantedNum);
        });
        
    return returnValue.sort((x,y)=>{
      if(x <= y) {
        return -1
      } else {return 1}
    });
}
