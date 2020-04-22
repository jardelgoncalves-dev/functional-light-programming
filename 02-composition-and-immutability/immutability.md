# Immutability

### const keyword

```js
var x = 2;
x++;        // allowed

const y = 3;
y++;        // not allowed
```

### freeze function

```js
const z = [3, 4, 5];
z = 10;     // not allowed
z[0] = 10;  // allowed

const w = Object.freeze([3, 4, 5]);
w = 10;     // not allowed
w[0] = 10;  // not allowed
```


### immutability in function
#### Sample
```js
function doubleThemMutable(list) {
  for (var i = 0; < i.length; i++) {
    list[i] = list[i] * 2;
  }
}

var arr = [3, 4, 5];
doubleThemMutable(arr);

arr;      // [6, 8, 10]
```

#### Solution
```js
function doubleThemMutable(list) {
  var newList = [];
  for (var i = 0; < i.length; i++) {
    newList.push(list[i] * 2);
  }
  return newList
}

var arr = [3, 4, 5];
var arr2 = doubleThemImmutable(arr);

arr;      // [3, 4, 5]
arr2;      // [6, 8, 10]
```