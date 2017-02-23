function smallestCommons(arr) {
  var multiplier = 1;
  //sort array small > large
  var sortedArr = arr.sort(function(a,b){
    return a -b;
  });  
  var smallest = sortedArr[0];
  var largest = sortedArr[1];
  //multiple never changes 
  var multiple = arr[0]*arr[1];  
  //need this if range doesn't start from 1. will change to get new multiples to check
  var multipleOfMultiple = arr[0]*arr[1];  
   for(var i= smallest;i<=largest;i++){
     //if i is not multiple
     if(multipleOfMultiple % i !== 0){
       //increment multiplier
       multiplier++;
       //check new multiple
       multipleOfMultiple = multiplier * multiple;
       //i goes back down to smallest to check the new multipleOfMultiple as declared ^
       i = smallest;
      }
    }
 
  return multipleOfMultiple;
  
}

//take the larger number and find the first multiple of it
//test whether that multiple is divisible by the numbers up to that largest num
// largest % (each number in the range) === 0

smallestCommons([1,5]);
