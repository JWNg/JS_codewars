

function sortPhotos(pics){
  function compare(a,b) {
    if ( parseInt(a) > parseInt(b)){return 1};
    if ( parseInt(a) < parseInt(b)){return -1};
    if ( parseInt(a.match(/\d+$/)[0]) > parseInt(b.match(/\d+$/)[0]) ) {return 1};
    return -1;
  }
  
  function additionOfOne(match){ 
    return parseInt(match) + 1
  }
  
  var sorted = pics.sort(compare).slice(-5),
      addition = sorted.slice(-1)[0].replace(/(\d+$)/, additionOfOne);
      
  sorted.push(addition);
  return sorted;
};
