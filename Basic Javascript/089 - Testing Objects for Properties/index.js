const checkObj = (obj, checkProp) =>
  obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
