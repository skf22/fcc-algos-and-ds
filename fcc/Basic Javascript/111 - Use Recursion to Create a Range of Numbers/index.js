const rangeOfNumbers = (startNum, endNum) => {
  if (endNum - startNum === 0) {
    return [startNum];
  }
  let arrRange = rangeOfNumbers(startNum, endNum - 1);
  arrRange.push(endNum);
  return arrRange;
};

rangeOfNumbers(1, 5);
