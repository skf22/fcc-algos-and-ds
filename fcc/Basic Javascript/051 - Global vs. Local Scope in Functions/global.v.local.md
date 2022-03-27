### **Global vs. Local Scope in Functions**

<br>

It is possible to have both _local_ and _global_ variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

```
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

The function `myFun` will return the string `Head` because the local version of the variable is present.

Add a local variable to `myOutfit` function to override the value of `outerWear` with the string `sweater`.
