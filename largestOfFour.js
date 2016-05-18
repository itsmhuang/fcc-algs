function largestOfFour(arr) {
//store reference
var large = arr[0][0];
var newArr = [];
  
for(var x = 0; x < arr.length; x++) { 
  
  for (var y = 0; y < arr.length; y++) {   
    //if # in subarray is greater than reference
    if (arr[x][y] > large) {
      large = arr[x][y];
    }
  }
  //push large to newarr
    newArr.push(large);
  //and reset it
  large = 0;
}
  return newArr;
}

/* ------------------ */

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //should return an array. 5,27,39,1001
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);// should return [27,5,39,1001].
//largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);// should return [9, 35, 97, 1000000].