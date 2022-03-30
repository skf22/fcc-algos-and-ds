const lookup = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

const convertHTML = (str) => {
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "&":
        str = `${str.slice(0, i)}${lookup["&"]}${str.substring(i + 1)}`;
        break;
      case "<":
        str = `${str.slice(0, i)}${lookup["<"]}${str.substring(i + 1)}`;
        break;
      case ">":
        str = `${str.slice(0, i)}${lookup[">"]}${str.substring(i + 1)}`;
        break;
      case '"':
        str = `${str.slice(0, i)}${lookup['"']}${str.substring(i + 1)}`;
        break;
      case "'":
        str = `${str.slice(0, i)}${lookup["'"]}${str.substring(i + 1)}`;
        break;
    }
  }
  return str;
};

convertHTML("Dolce & Gabbana");
