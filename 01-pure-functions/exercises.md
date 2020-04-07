# Instructions

## Exercise 1
Make a pure function `bar(..)` to wrap around `foo(..)`.

### Code

```js
function foo(x) {
  y++;
  z = x * y;
}

var y = 5, z;
foo(20);
z;     // 120

foo(25);
z;     // 175
```

### Solution implementation
```js
function bar(x, y, z) {
  foo(x)
  return [y, z]

  function foo(x) {
    y++;
    z = x * y;
  }
}

               // [y,  z ]
bar(20, 5, 0); // [6, 120]
bar(25, 5, 0); // [6, 150]
```


