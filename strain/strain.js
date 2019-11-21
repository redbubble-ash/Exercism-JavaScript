//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (x, e) => {
  return x.filter(e);
};

export const discard = (x, e) => {
  var newArr = [];
  x.forEach(item => {
    if (!(x.filter(e).includes(item))) {
      newArr.push(item);
    }
  });
  return newArr;
};
