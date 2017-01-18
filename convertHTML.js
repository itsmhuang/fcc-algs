function convertHTML(str) {
  //array to store characters in
  var newStr = [];
  // str with character replaced
  var replaced;
  
  //switch case to check if character is &, <, >, " and '
  function replaceChar(input){
    switch(input){
      case "&":
        newStr.push("&amp;");
        break;
      case "<":
        newStr.push("&lt;");
        break;
      case ">":
        newStr.push("&gt;");
        break;
      case "\"":
        newStr.push("&quot;");
        break;
      case "'":
        newStr.push("&apos;");
        break;
      default:
        newStr.push(input);
        break;
    }
  }

  for(var i = 0; i<str.length;i++){
    replaceChar(str[i]);
  }

  replaced = newStr.join("");

  console.log(replaced);
  return replaced;
}

convertHTML("Dolce & Gabbana");// should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos");// should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve");// should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"');// should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Shindler's List");// should return Shindler&​apos;s List.
// convertHTML("<>");// should return &​lt;&​gt;.
// convertHTML("abc");// should return abc.