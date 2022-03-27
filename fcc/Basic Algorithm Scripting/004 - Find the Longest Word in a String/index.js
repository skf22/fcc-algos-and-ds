const findLongestWordLength = (str) => {
  let wordsArr = str.split(" ");
  let longestWord = "";
  for (let word of wordsArr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord.length;
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");
