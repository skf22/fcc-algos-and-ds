### **Comparisons with the Logical Or Operator**

<br>

The _logical or_ operator (`||`) returns `true` if either of the _operands_ is `true`. Otherwise, it returns `false`.

The _logical or_ operator is composed of two pipe symbols: (`||`). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

```
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

will return `Yes` only if `num` is between `5` and `10` (5 and 10 included). The same logic can be written as:

```
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

Combine the two `if` statements into one statement which returns the string `Outside` if `val` is not between `10` and `20`, inclusive. Otherwise, return the string `Inside`.
