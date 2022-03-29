const spinalCase = (str) => {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let regExp = /\s+|_+/g;
  return str.replace(regExp, "-").toLowerCase();
};

spinalCase("thisIsSpinalTap");
