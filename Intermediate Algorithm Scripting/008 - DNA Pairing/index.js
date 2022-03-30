const pairElement = (str) => {
  let dnaArr = [];
  for (let letter of str.split("")) {
    switch (letter) {
      case "A":
        dnaArr.push(["A", "T"]);
        break;
      case "T":
        dnaArr.push(["T", "A"]);
        break;
      case "C":
        dnaArr.push(["C", "G"]);
        break;
      case "G":
        dnaArr.push(["G", "C"]);
        break;
    }
  }
  return dnaArr;
};

pairElement("ATCGA");
