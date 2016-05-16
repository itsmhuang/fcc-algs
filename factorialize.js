function factorialize(num) {
  var fact = 1;
  while(num > 0) {
   fact *= num;
   num--;
  }
  return fact;
}

factorialize(3);