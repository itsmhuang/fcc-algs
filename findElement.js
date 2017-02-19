function findElement(arr, func) {
  for(var i = 0; i<arr.length;i++){
    //if function returns true
    if(func(arr[i])){
      return arr[i];
    }
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
