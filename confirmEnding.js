
function confirmEnding(str, target) {  
  // slice method
  if (str.slice(-(target.length)) === target) {
    return true;
  } 
  return false;

  /* or substr method 
  //check if target matches str.substr 
  if (str.substr(str.length-target.length) === target) {
    return true;
  } 
  else {
    return false;
  } 
  */

  
  
}

//confirmEnding("Bastian", "n");
//confirmEnding("Connor", "n");// should return false.
//confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");// should return false.
//confirmEnding("He has to give me a new name", "name");// should return true.
//confirmEnding("He has to give me a new name", "me");// should return true.
//confirmEnding("He has to give me a new name", "na");// should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");// should return false.
