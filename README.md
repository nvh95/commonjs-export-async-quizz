object.js

```js
const object = {};
new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
  object = {
    a: 1,
    b: 2,
    c: 3,
  };
});
module.exports = object;
```

index.js

```js
new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
  console.log(object); // Should log {a: 1, b: 2, c: 3}
});
```
