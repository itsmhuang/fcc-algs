function titleCase(str) {
//lowercase all letters
  str = str.toLowerCase();
//store in arr to be transformed to uppercase
  var arrCaps = str.split(" ");
  for (var i = 0; i < arrCaps.length; i++) {
    arrCaps[i] = arrCaps[i].charAt(0).toUpperCase() + arrCaps[i].substr(1);    
  }
  var newStr = arrCaps.join(" ");  
  return newStr;  
}

titleCase("I'm a little tea pot"); //should return a string.
titleCase("I'm a little tea pot"); //should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); //should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return "Here Is My Handle Here Is My Spout".