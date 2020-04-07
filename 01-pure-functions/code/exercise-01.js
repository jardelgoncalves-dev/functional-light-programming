function bar(x, y, z) {
  foo(x)
  return [y, z]

  function foo(x) {
    y++;
    z = x * y;
  }
}

console.log(bar(20, 5, 0));
console.log(bar(25, 5, 0));