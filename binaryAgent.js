function binaryAgent(str) {
  //store translated
  var translated ="";
  //convert str to array
  var arr = str.split(" ");
  //iterate thru array
  arr.forEach(function(e){
    //convert binary to text and concat to translated
    translated +=String.fromCharCode(parseInt(e,2));
  });
  return translated;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
