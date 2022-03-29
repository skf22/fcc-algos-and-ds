const diffArray = (arr1, arr2) => {
  const uniqueVals = [...arr1, ...arr2];
  return uniqueVals.filter(
    (el) =>
      (!arr1.includes(el) && arr2.includes(el)) ||
      (arr1.includes(el) && !arr2.includes(el) && el)
  );
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
