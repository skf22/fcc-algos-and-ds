### **Understand String Immutability**

<br>

In JavaScript, `String` values are _immutable_, which means that they cannot be altered once created.

For example, the following code:

```
var myStr = "Bob";
myStr[0] = "J";
```

cannot change the value of `myStr` to `Job`, because the contents of `myStr` cannot be altered. Note that this does _not_ mean that `myStr` cannot be changed, just that the individual characters of a _string literal_ cannot be changed. The only way to change `myStr` would be to assign it with a new string, like this:

```
var myStr = "Bob";
myStr = "Job";
```

Correct the assignment to `myStr` so it contains the string value of `Hello World` using the approach shown in the example above.
