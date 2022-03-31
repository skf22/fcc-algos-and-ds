const factorial = (num) => {
  if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
};

const smallestCommons = (arr) => {
  const [lowRange, highRange] = arr.sort((a, b) => a - b),
    topVal = factorial(highRange);

  for (let multiple = highRange; multiple <= topVal; multiple += highRange) {
    let count = 0;
    for (let i = lowRange; i <= highRange; i++) {
      if (multiple % i === 0) {
        count++;
      }
    }
    if (count === highRange - lowRange + 1) {
      return multiple;
    }
  }
};

smallestCommons([2, 10]);
