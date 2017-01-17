function fearNotLetter(str) {

  var arr = str.split("");

  for(var i = 0; i <arr.length-1;i++){
    //if charCodeAt(i) is more than 1 greater than previous element
    if(arr[i+1].charCodeAt(0) - arr[i].charCodeAt(0) > 1){
      //return the char that is exactly 1 greater than previous
      console.log(String.fromCharCode((arr[i].charCodeAt(0)+1)));
      return String.fromCharCode((arr[i].charCodeAt(0)+1));
    }
  }
  //if that loops to the end, return undefined
  console.log(undefined);
  return undefined;

}

fearNotLetter("abce");
