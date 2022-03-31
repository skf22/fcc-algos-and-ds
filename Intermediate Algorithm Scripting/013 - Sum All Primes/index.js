const checkForPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const sumPrimes = (num) => {
  let sum = 0,
    inputNum = 2;

  while (inputNum <= num) {
    if (checkForPrime(inputNum)) {
      sum += inputNum;
    }
    inputNum++;
  }
  return sum;
};

sumPrimes(10);
