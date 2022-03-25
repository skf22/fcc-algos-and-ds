const repeatStringNumTimes = (str, num) => {
  let repeatStr = "";
  if (num < 1) {
    return repeatStr;
  }

  for (let i = 0; i < num; i++) {
    repeatStr += str;
  }

  return repeatStr;
};

repeatStringNumTimes("abc", 3);
