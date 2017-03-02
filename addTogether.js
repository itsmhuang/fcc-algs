function addTogether() {
//store argumens in array
  var args = Array.prototype.slice.call(arguments);

  //check if arguments are numbers
  function argsAreNumbers(x){
    if (typeof x === "number"){
      return true;
    }
    else {
      return false;
    }
  }
  
  //if length is 1
  if(args.length === 1) {
  //return a function that will add the arguments if you pass it another argument
    if(argsAreNumbers(args[0])){
      return function(input){
        //check if this input is a number
        if(argsAreNumbers(input)){
          //return sum if true
          return args[0]+input;          
        }
        else {
          //undefined if false
          return undefined;
        }
      };      
    }
    else{
      //return undefined if first input is false
      return undefined;
    }
  }
  
  //if length is 2
  if(args.length === 2){
    //if both args are numbers
    if(argsAreNumbers(args[0]) && argsAreNumbers(args[1])){
     //  just add the two
     return args[0]+args[1];
    }
    else {
      //undefined if one is not a number
      return undefined;
    }
  }

}

// addTogether(2,3);
addTogether("http://bit.ly/IqT6zt");
