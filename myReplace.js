function myReplace(str, before, after) {
  var newStr;
  var capsAfter;
  //if before var is capitalized
  if((/[A-Z]/.test(before[0]))){
    //capitalize after var
    capsAfter = after.split("");
    capsAfter[0] = capsAfter[0].toUpperCase();
    capsAfter = capsAfter.join("");
    //use capitalized after (capsAfter) in .replace()
    newStr = str.replace(before,capsAfter);
  }
  //if before var not capitalized
  else{
    //use default before and after vars
    newStr = str.replace(before,after);  
  }
  console.log(newStr);
  return newStr;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
