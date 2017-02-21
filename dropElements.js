function dropElements(arr, func) {
  var keep =[];
  for(var i = 0; i<arr.length;i++){
    //if function returns true
    if(func(arr[i])){
      //keep from that index
      keep = arr.slice(i);
      //break loop
      break;
    }
  }
  return keep;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
