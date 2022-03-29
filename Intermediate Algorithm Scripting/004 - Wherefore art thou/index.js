const whatIsInAName = (collection, source) =>
  collection.filter((obj) =>
    Object.keys(source).every(
      (el) => obj.hasOwnProperty(el) && obj[el] === source[el]
    )
  );

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
