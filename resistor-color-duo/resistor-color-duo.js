//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var color = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const value = str => {
  var str1;
  str1 =
    color.indexOf(str[0].toLowerCase()).toString() +
    color.indexOf(str[1].toLowerCase()).toString();

  return parseInt(str1);
};
