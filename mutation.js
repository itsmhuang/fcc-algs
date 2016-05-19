function mutation(arr) {
  var str = arr[0].toString().toLowerCase();
  var match = arr[1].toString().toLowerCase();
  
  var i = 0;
  while (i < match.length) {
    //if chars in match are in str
    if (str.indexOf(match.charAt(i)) !== -1) {    
        //increment charAt
        i++;
      }  
      else {
        //found char in match not in str
        return false;
      }
    } 
    //all of chars in match are in str
    return true;
  }

mutation(["hello", "hey"]);// should return false.
//mutation(["hello", "Hello"]);// should return true.
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);// should return true.
//mutation(["Mary", "Army"]);// should return true.
//mutation(["Mary", "Aarmy"]);// should return true.
//mutation(["Alien", "line"]);// should return true.
//mutation(["floor", "for"]);// should return true.
//mutation(["hello", "neo"]);// should return false.
//mutation(["voodoo", "no"]);// should return false.