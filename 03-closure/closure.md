# Closure

### Sample 1
```js
function foo() {
  var count = 0;

  return function () {
    return count++;
  };
};

var x = foo();

x();      // 0
x();      // 1
x();      // 2
```
### Sample 2
```js
function sum(n1) {
  return function (n2) {
    return n1 + n2
  };
};

var add10 = sum(10);

add10(3);     // 13
add10(14);    // 24
```

### Exercise
1. Define `foo(..)` so that it produces a function which remembers only the first two arguments that were passed to `foo(..)`, and always adds them together.

### Solution
```js
function foo(n1, n2) {
  return function () {
    return n1 + n2;
  };
};

var x = foo(3, 4);

x();    // 7
x();    // 7
```
