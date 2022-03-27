const countdown = (n) => {
  if (n < 1) {
    return [];
  }
  const counterArr = countdown(n - 1);
  counterArr.unshift(n);
  return counterArr;
};
