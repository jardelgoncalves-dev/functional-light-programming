# Composition Utility

### Sample code

```js
function sum(x, y) {
  return x + y;
};

function mult(x, y) {
  return x * y
};

var z = mult(3, 4);
z = sum(z, 5);

// (3 * 4) + 5
z; //17
```

### Composition Utility;

```js
function sum(x, y) {
  return x + y;
};

function mult(x, y) {
  return x * y
};

function compositionUtility(fn1, fn2) {
  return function comp() {
    var args = [].slice.call(arguments);
    return fn2(
      fn1(args.shift(), args.shift()),
      args.shift()
    )
  }
};

var sumAndMult = compositionUtility(mult, sum)

// (3 * 4) + 5
sumAndMult(3, 4, 5); // 17

```
