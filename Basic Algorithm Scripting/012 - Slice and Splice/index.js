// Solution 1 - Using array.flat() method.

const frankenSplice = (arr1, arr2, n) => {
  const newArr = arr2.slice();
  newArr.splice(n, 0, arr1);
  const flatNewArr = newArr.flat();

  return flatNewArr;
};

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);

// Solution 2 - Same as above but instead of array.flat(), iterates via for loop and increments n by 1 each time to update the index at which the splice will start.

const frankenSpliceTwo = (arr1, arr2, n) => {
  const newArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n += 1;
  }

  return newArr;
};

frankenSpliceTwo(
  ["claw", "tentacle"],
  ["head", "shoulders", "knees", "toes"],
  2
);

// Solution 3 - Using spread operator

const frankenSpliceThree = (arr1, arr2, n) => {
  const newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
};

frankenSpliceThree(
  ["claw", "tentacle"],
  ["head", "shoulders", "knees", "toes"],
  2
);
