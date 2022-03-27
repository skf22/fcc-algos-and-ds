const confirmEnding = (str, target) =>
  str
    .split("")
    .slice(str.length - target.length)
    .join("") === target;

console.log(confirmEnding("Bastian", "n"));
