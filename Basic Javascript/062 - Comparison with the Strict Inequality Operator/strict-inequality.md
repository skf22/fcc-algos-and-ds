### **Comparison with the Strict Inequality Operator**

<br>

The strict inequality operator (`!==`) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns `false` where strict equality would return `true` and _vice versa_. The strict inequality operator will not convert data types.

**Examples**

```
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

Add the strict inequality operator to the `if` statement so the function will return the string `Not Equal` when `val` is not strictly equal to `17`.
