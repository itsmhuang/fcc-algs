function translatePigLatin(str) {
  var pigLatin;
  var arr = str.split("");
  
  //if first letter is a vowel
  if((/[aeiou]/.test(str[0]))){
    arr.push("way");
    pigLatin = arr.join("");
  }
  //if second letter is consonant
  else if((/[^aeiou]/.test(str[1]))){
    arr.push(arr[0]+arr[1]+"ay");
    arr.shift();
    arr.shift();
    pigLatin = arr.join("");
  }
  else {
    arr.push(arr[0]+"ay");
    arr.shift();
    pigLatin = arr.join("");

  }
  console.log(pigLatin);
  return pigLatin;
}

translatePigLatin("consonant");
translatePigLatin("algorithm");// should return "algorithmway".
translatePigLatin("glove");// should return "oveglay".