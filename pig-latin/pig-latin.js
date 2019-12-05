//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class translator {
  static translate(phrases) {
    var words = phrases.split(" ");
    var vowels = ["a", "e", "i", "o", "u", "xr", "yt"];
    var newPhases = words.map(word => {
      if (
        vowels.filter(
          letter => letter === word[0] || letter === word[0] + word[1]
        ).length !== 0
      ) {
        word = word + "ay";
        return word;
      }

      for (let i = 0; i <= word.length; i++) {
        if (
          vowels.filter(letter => letter === word[i]).length !== 0 &&
          word[i - 1] === "q" &&
          word[i] === "u"
        ) {
          word = word.slice(i + 1, word.length) + word.slice(0, i + 1) + "ay";
        
          return word;
        } else if (vowels.filter(letter => letter === word[i]).length !== 0) {
          word = word.slice(i, word.length) + word.slice(0, i) + "ay";
          
          return word;
        } else if (word[i + 1] === "y") {
          word = word.slice(i + 1, word.length) + word.slice(0, i + 1) + "ay";
        
          return word;
        }
      }
      newPhases = words.join(" ");
      return newPhases;
    }).join(' ');

    return newPhases;
  }
}
