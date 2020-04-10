# Manual Composition

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

### Manual Composition;

```js
function sum(x, y) {
  return x + y;
};

function mult(x, y) {
  return x * y
};

// (3 * 4) + 5
sum( mult(3, 4), 5 ); // 17

```
