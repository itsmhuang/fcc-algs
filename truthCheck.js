
function truthCheck(collection, pre) {
  //will return false if value of pre is falsely (0, null, empty string, undefined, NaN)
  
  for(var i = 0;i<collection.length;i++){
    //can't use dot notation
    if(!(collection[i][pre])){
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");// should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");// should return false
truthCheck([{"single": "yes"}], "single"); //should return true
