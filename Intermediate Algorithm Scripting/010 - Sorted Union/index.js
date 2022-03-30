const uniteUnique = (...arr) =>
  [...arr].flat().filter((el, idx) => [...arr].flat().indexOf(el) === idx);

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
