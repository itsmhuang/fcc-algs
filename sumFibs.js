//function should calculate fibbonaci sequence 
//add the sequence up to the last number less than input num
//add only the odd fib numbers and output the result

function sumFibs(num) {
  //store fib numbers
  var fib = [1];
  for(var i = 1;i<=num;){
    fib.push(i);
    i=fib[fib.length-1]+fib[fib.length-2];
  }
  //store fib odds
  var fibOdds = fib.filter(function(x){
    return x % 2 ===1;
  });
  
  //add fib odds
  var fibOddsSum = fibOdds.reduce(function(x,y){
    return x+y;
  },0);

//  console.log(fibOdds);
  return fibOddsSum;
}

sumFibs(10);
