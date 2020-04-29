# Recursion

### Sample
```js
function sumIter() {
  var sum = 0;

  for (var i=0; i< arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
};

sumIter(3, 4, 5);    // 12
```
### Solution
```js
function sumRecur(...args) {
  if(args.length <= 2) {
    return args[0] + args[1]
  }
  return (
    args[0] +
    sumRecur(...args.slice(1))
  );
};

sumRecur(3, 4, 5);  // 12
```

### Exercise
1. Turn `mult(..)` into a recursive function that can work on as many arguments as necessary.

### Solution
```js
function mult(...args) {
  if(args.length <= 2) {
    return args[0] * args[1]
  }

  return (
    args[0] *
    mult(...args.slice(1))
  );
}
```
