//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(item = []) {
    this.item = item;
    this.values = this.item;
  }

  append(a) {
    a.item.forEach(element => {
      this.item.push(element); //will not add an empty value into the array
    });
    return this;
  }

  concat(a) {
    var newList = a.item;
    //check if a.item === []
    if (newList.length === 0) {
      return this;
    } else {
      for (let i = 0; i < a.item.length - 1; i++) {
        newList[0].append(newList[i + 1]);
      }
      this.append(newList[0]);
      return this;
    }
  }

  filter(fn) {
    var list1 = new List(this.item.filter(fn));

    return list1;
  }

  map(fn) {
    var list1 = new List(this.item.map(fn));

    return list1;
  }

  length() {
    return this.item.length;
  }

  //eg:init=24, 1/24 then 2/(1/24) then 3/48 then 4/(3/48)=64
  foldl(fn, init) {
    if (this.item.length === 0) {
      return init;
    } else {
      return this.item.reduce(fn, init);
    }
  }

  //eg:init=24, 4/24 then 3/(1/6) then 2/18 then 1/(2/18)= 9
  foldr(fn, init) {
    if (this.item.length === 0) {
      return init;
    } else {
      return this.item.reverse().reduce(fn, init);
    }

  }

  reverse() {
    var list1 = new List(this.item.reverse());
    return list1;
  }
}
