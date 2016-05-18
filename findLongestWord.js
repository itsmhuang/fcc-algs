function findLongestWord(str) {
  //place words into array
  var arr = str.split(' ');
  var long = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > long.length) {
      long = arr[i];
    } 
  }
  return long.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
