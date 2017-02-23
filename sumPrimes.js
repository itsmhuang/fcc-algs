function sumPrimes(num) {
  var rangeUpToNum=[];
  for(var i = 2;i<=num;i++){
    rangeUpToNum.push(i);
  }
  //use filter to find primes
  var primes = rangeUpToNum.filter(isPrime);
  
  //use reduce to sum all primes
  var sum = primes.reduce(function(prev,curr){
    return prev + curr;
  },0);
  
  
  
  function isPrime(x){
    for(var i=2;i<x;i++){
      //check if the number is divisible by i
      if(x%i===0){
        return false;
      }
    }
    return true;
  }
  
 
  return sum; 
}

sumPrimes(977);
