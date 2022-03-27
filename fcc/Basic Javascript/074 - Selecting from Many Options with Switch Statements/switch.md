### **Selecting from Many Options with Switch Statements**

<br>

If you have many options to choose from, use a _switch_ statement. A `switch` statement tests a value and can have many _case_ statements which define various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.

Here is an example of a `switch` statement:

```
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

`case` values are tested with strict equality (`===`). The `break` tells JavaScript to stop executing statements. If the `break` is omitted, the next statement will be executed.

Write a switch statement which tests `val` and sets `answer` for the following conditions:

`1` - `alpha`<br>
`2` - `beta`<br>
`3` - `gamma`<br>
`4` - `delta`
