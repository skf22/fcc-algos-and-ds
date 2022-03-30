const myReplace = (str, before, after) => {
  const capitalRegex = /[A-Z]/g;
  const lowerCaseRegex = /[^A-Z]/g;
  for (let letter of str.match(capitalRegex)) {
    if (letter === before[0]) {
      after = `${after[0].toUpperCase()}${after.slice(1)}`;
    }
  }
  for (let letter of str.match(lowerCaseRegex)) {
    if (letter === before[0] && after[0].match(capitalRegex)) {
      after = `${after[0].toLowerCase()}${after.slice(1)}`;
    }
  }
  return str.replace(before, after);
};

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
