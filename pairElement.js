function pairElement(str) {
  //convert to array
  var arr = str.split("");
  var basePairs = [];
  
  //create array of arrays for each element of arr
  arr.forEach(function(val){
    basePairs.push([val]);
  });

  basePairs.forEach(function(e,i,arr){
    if(e[0] === "G"){
      e.push("C");
    }
    if(e[0] === "C"){
      e.push("G");
    }
    if(e[0] === "A"){
      e.push("T");
    }
    if(e[0] === "T"){
      e.push("A");
    }
    
  });

  console.log(basePairs);
  return basePairs;
}

pairElement("GCG");
// pairElement("ATC");// should return [["A","T"],["T","A"],["C","G"]].