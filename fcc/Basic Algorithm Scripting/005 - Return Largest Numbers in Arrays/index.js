const largestOfFour = (arr) => {
  let largestArr = [];
  let largestNum = -Infinity;
  for (let subArr of arr) {
    for (let i = 0; i < subArr.length; i++) {
      if (subArr[i] > largestNum) {
        largestNum = subArr[i];
      }
    }
    largestArr.push(largestNum);
    largestNum = -Infinity;
  }
  return largestArr;
};

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
