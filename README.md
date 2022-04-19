# Javascript Export Object Async Quizz

## Introduction

If you export an object as a module, the value of exported object is unchanged regardless of what you do to that object later (async actions). Can we find a way to make value of exported object to be changed?

## Quizz

Given we have two files: [car.js](./car.js) and [index.js](./index.js)

[car.js](./car.js)

```js
let car = {};
new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
  car = {
    model: "Tesla",
    color: "black",
    year: "2020",
  };
});
module.exports = car;
```

[index.js](./index.js)

```js
const car = require("./car");
new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
  console.log("My car information:", car); // Should log { model: 'Tesla', color: 'black', year: '2020' }, but it logs {}
});
```

If you run `node index.js`, you will see:

```terminal
$ My car information: {}
```

Can you modify [car.js](./car.js) to make running `node index.js` to log as following?

```terminal
$ My car information: { model: 'Tesla', color: 'black', year: '2020' }
```

## Online link

Use can use solve this quizz directly on your browser using [this Stackblitz](https://stackblitz.com/edit/node-il14gh?file=car.js)
