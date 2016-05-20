function getIndexToIns(arr, num) {
  //add num to arr
  arr.push(num);
  //sort in numerical order 
  var sorted = arr.sort(function(a,b) {
    if(a > b) {
      return 1;
    }
    else if (a < b) {
      return -1;
    }
    else {
      return 0;
    }
  });
  //return index of num
  return sorted.indexOf(num);
  
}

getIndexToIns([40, 60], 50);
