function myReplace(str, before, after) {
  var newStr;
  var capsAfter;
  if((/[A-Z]/.test(before[0]))){
    capsAfter = after.split("");
    capsAfter[0] = capsAfter[0].toUpperCase();
    capsAfter = capsAfter.join("");
    newStr = str.replace(before,capsAfter);
  }
  else{
    newStr = str.replace(before,after);  
  }
  console.log(newStr);
  return newStr;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
