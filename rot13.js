function rot13(str) { // LBH QVQ VG!
  
  //store coded string
  var decode = "";
  
  for (var i = 0; i <str.length; i++) {
    //if str.charCodeAt(i) between 65 and 77, inclusive
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
    //add +13 charcode to decode
    decode +=String.fromCharCode(str.charCodeAt(i)+13);
  }
    //if str.charCodeAt(i) between 78 and 90, inclusive
    else if(str.charCodeAt(i) >=78 && str.charCodeAt(i) <= 90) { 
    //add -13 charcode to code
    decode+=String.fromCharCode(str.charCodeAt(i)-13);
  }
    //if anything else
    else { 
    //add same character to code
    decode+=str.charAt(i);
  }
}
return decode;

}

rot13("SERR PBQR PNZC");// should decode to "FREE CODE CAMP"
//rot13("SERR CVMMN!");// should decode to "FREE PIZZA!"
//rot13("SERR YBIR?");// should decode to "FREE LOVE?"
//rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");// should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
