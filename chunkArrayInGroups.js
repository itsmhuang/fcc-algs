function chunkArrayInGroups(arr, size) {
  //make new arr to store values
  var chunk = [];
  //split array into groups the length of size
  for(var x = 0; x < arr.length; x+=size) {
    chunk.push(arr.slice(x,x+size));
  }
  //return as 2d array  
  return chunk;
  
  
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);// should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);// should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);// should return [[0, 1], [2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);// should return [[0, 1, 2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);// should return [[0, 1, 2], [3, 4, 5], [6]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
