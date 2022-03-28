const getIndexToIns = (arr, num) => {
  let insertIdx = 0;
  arr.sort((a, b) => a - b);

  if (num <= arr[0]) {
    return insertIdx;
  }

  for (let i = 0; i < arr.length && insertIdx === 0; i++) {
    if (num <= arr[i]) {
      return (insertIdx = i);
    }
  }
  return (insertIdx = arr.length);
};

getIndexToIns([2, 5, 10], 15);
