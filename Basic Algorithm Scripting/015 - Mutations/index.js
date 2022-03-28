const mutation = (arr) => {
  let mainArr = arr[1].toLowerCase();
  let referenceArr = arr[0].toLowerCase();

  for (let i = 0; i < mainArr.length; i++) {
    if (referenceArr.indexOf(mainArr[i]) === -1) {
      return false;
    }
  }
  return true;
};

mutation(["Hello", "hey"]);
