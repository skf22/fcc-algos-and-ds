// N.B. Have renamed the below functions destroyerOne & destroyerTwo - tests only pass if one of the functions is renamed to 'destroyer' and the other commented out.

// Solution 1 - This uses the arguments object, as the question dictates. The arguments object is a local variable available within all non-arrow functions, hence the below solution is not ES6-compatible.

function destroyerOne(arr) {
  let removeItems = Object.values(arguments).slice(1);
  return arr.filter((el) => removeItems.indexOf(el) === -1);
}

destroyerOne([1, 2, 3, 1, 2, 3], 2, 3);

// Solution 2 - For ES6-compatible solution, the rest parameter is recommended. Instead of array.indexOf, have used array.includes for variety.

const destroyerTwo = (...arr) =>
  arr[0].filter((el) => !arr.slice(1).includes(el));

destroyerTwo([1, 2, 3, 1, 2, 3], 2, 3);
