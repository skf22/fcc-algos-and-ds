const myLocalScope = () => {
  var myVar = "hullo";
  console.log("inside myLocalScope", myVar);
};
myLocalScope();
console.log("outside myLocalScope", myVar);
