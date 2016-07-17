function findLongestWord(str) {
  //place words into array
  var arr = str.split(' ');
  var long = arr[0];
  
  arr.forEach(function(e){
    if(e.length > long.length) {
      long = e;
    }
  });

  /*
  or a for loop
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > long.length) {
      long = arr[i];
    } 
  }
*/

  return long.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
