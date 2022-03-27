const findElement = (arr, func) => {
  for (let el of arr) {
    if (func(el)) {
      return el;
    }
  }
  return undefined;
};

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
