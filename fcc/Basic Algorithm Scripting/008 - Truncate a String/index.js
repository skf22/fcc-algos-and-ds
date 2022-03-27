const truncateString = (str, num) => {
  if (str.length > num) {
    const slicedStr = str.slice(0, num);
    return `${slicedStr}...`;
  }
  return str;
};

truncateString("A-tisket a-tasket A green and yellow basket", 8);
