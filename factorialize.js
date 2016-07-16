function factorialize(num) {
  var fact = 1;
  for(var i = num; i > 1; i--) {
  	fact *= i;
  }
  //or a while loop
  // while(num > 0) {
  //  fact *= num;
  //  num--;
  // }
  return fact;
}

factorialize(3);