//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {

    var set1 = new Set();
      set1.add(this.a);
      set1.add(this.b);
      set1.add(this.c);
      
    if (
      (this.a > 0 && this.b > 0 && this.c > 0) &&
      this.a + this.b >= this.c &&
      this.b + this.c >= this.a &&
      this.a + this.c >= this.b
    ) {
      
      if(set1.size === 1) {return "equilateral"}
      else if(set1.size === 2) {return "isosceles"}
      else{return "scalene"};

    } 
    else {
      throw error;
    }
  }
}
