### **Local Scope and Functions**

<br>

Variables which are declared within a function, as well as the function parameters, have _local_ scope. That means they are only visible within that function.

Here is a function `myTest` with a local variable called `loc`.

```
function myTest() {
var loc = "foo";
console.log(loc);
}
myTest();
console.log(loc);
```

The `myTest()` function call will display the string `foo` in the console. The `console.log(loc)` line will throw an error, as `loc` is not defined outside of the function.

---

The editor has two `console.logs` to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable `myVar` inside `myLocalScope` and run the tests.

**Note**: The console will still display `ReferenceError: myVar is not defined`, but this will not cause the tests to fail.
