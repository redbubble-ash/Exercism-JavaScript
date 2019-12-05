//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class SpiralMatrix {
  static ofSize(size) {
    if (size === 0) {
      return [];
    } else {
      var arr = [];
      var val = 1;
      for (let a = 0; a < size * size; a++) {
        arr[a] = val;
        val++;
      }

      var newArr = new Array();
      var currArr = new Array(size).fill(0).map(() => new Array(size).fill(0));
      var count = size - 1;
      var count1 = size;
      var count2 = size - 1;
      var currCol = size - 1;
      var currRow = 0;
      var right = true;

      //slice the original array into different pieces. eg:size =3, [1,2,3,4,5,6,7,8,9] ===> [[1,2,3],[4,5],[6,7],[8],[9]]
      newArr.push(arr.slice(0, size));
      while (count) {
        let count3 = 2;
        while (count3) {
          newArr.push(arr.slice(count1, count1 + count2));
          count1 = count1 + count2;
          count3--;
        }
        count2--;
        count--;
      }

      //assign value to the first row of current array
      for (let col = 0; col < newArr[0].length; col++) {
        currArr[0][col] = newArr[0][col];
      }

      for (let i = 1; i < newArr.length; i = i + 2) {
        if (right === true) {
          for (let j = 0; j < newArr[i].length; j++) {
            currRow++;
            currArr[currRow][currCol] = newArr[i][j];
          }
          for (let j = 0; j < newArr[i + 1].length; j++) {
            currCol--;
            currArr[currRow][currCol] = newArr[i + 1][j];
          }
          right = false;
        } else {
          for (let j = 0; j < newArr[i].length; j++) {
            currRow--;
            currArr[currRow][currCol] = newArr[i][j];
          }
          for (let j = 0; j < newArr[i + 1].length; j++) {
            currCol++;
            currArr[currRow][currCol] = newArr[i + 1][j];
          }
          right = true;
        }
      }

      return currArr;
      //console.log(currArr);
    }
  }
}
