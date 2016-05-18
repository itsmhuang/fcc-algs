function palindrome(str) {
  //lower case and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[\W_]/g,"")
  var newstr = str.split("").reverse().join("");
  if (str === newstr) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("0_0 (: /-\ :) 0-0");
palindrome("eye");
]palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");