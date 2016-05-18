
function repeatStringNumTimes(str, num) {
  //store str in arr
  var arr = str.split();
    //if num not positive, return blank str
  if (num <= 0) {
    return "";
  }
    //else for loop through arr and push duplicates
  else {
    for (var i = 0; i < num-1; i++) {
      arr.push(str);
    }
  }
  //convert arr to string
  return arr.join("");
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);// should return "***".
repeatStringNumTimes("abc", 3);// should return "abcabcabc".
repeatStringNumTimes("abc", 4);// should return "abcabcabcabc".
repeatStringNumTimes("abc", 1);// should return "abc".
repeatStringNumTimes("*", 8);// should return "********".
repeatStringNumTimes("abc", -2);// should return "".
