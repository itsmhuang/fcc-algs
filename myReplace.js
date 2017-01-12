function myReplace(str, before, after) {
  if((/[A-Z]/.test(before[0]))){
    after = after.split("");
    after[0] = after[0].toUpperCase();
    after = after.join("");
  }
  // console.log(after.split("").splice(0,1,after[0].toUpperCase()));
  var newStr = str.replace(before,after)
  console.log(newStr);
  return newStr;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
