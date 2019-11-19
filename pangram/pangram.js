//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  var isPangramLetter = true;
  var arr = str.toLowerCase().split("").filter(c=>c.match(/[A-Za-z]/));
  var set = new Set();
  arr.forEach(x =>set.add(x));
  //console.log("arr is " + arr);

  //for(item of set.values())
  //console.log("set is " + item);
  if(set.size !== 26){
    isPangramLetter = false
  }
  return isPangramLetter;
};
