function diffArray(arr1,arr2){
  var newArr =[];

  function unique1(e,i,arr){
    //find anything that is not in arr1
    return (arr1.indexOf(e) === -1);
  }

  function unique2(e,i,arr){
    //find anything that is not in arr2
    return (arr2.indexOf(e) === -1);
  }

  // concat unique of arr1 to unique of arr2
  newArr = (arr1.filter(unique2)).concat(arr2.filter(unique1));

  console.log(newArr);

}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
// diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
