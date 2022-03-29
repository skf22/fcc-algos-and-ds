const translatePigLatin = (str) => {
  const vowelReg = /[aeiou]/g;
  const consonantReg = /^[^aeiou]+/g;

  if (str[0].match(vowelReg)) {
    return `${str}way`;
  }

  const consonant = str.match(consonantReg).join("");
  str = str.replace(consonantReg, "");
  return `${str}${consonant}ay`;
};

translatePigLatin("california");
