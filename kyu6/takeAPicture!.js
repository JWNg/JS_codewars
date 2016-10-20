Description:

You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]
FUNDAMENTALS

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


function sortPhotos(pics){
  var norm = x => x.replace(/\d+$/, d => +d+10);
  var last5 = pics.sort((x,y)=>norm(x)<norm(y)? -1 : 1).slice(-5);
  return last5.concat([last5[last5.length-1].replace(/\d+$/, d => +d+1)]);
};
