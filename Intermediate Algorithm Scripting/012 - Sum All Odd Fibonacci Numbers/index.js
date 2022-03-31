const sumFibs = (num) => {
  const sumArr = [1, 1];
  let a = 1,
    b = 1,
    next = 0;

  while (next <= num) {
    next = a + b;
    if (next <= num && next % 2 !== 0) {
      sumArr.push(next);
    }
    a = b;
    b = next;
  }
  return sumArr.reduce((acc, curr) => acc + curr);
};

sumFibs(4);
