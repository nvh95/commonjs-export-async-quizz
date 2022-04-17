const object = {};
new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
  object = {
    a: 1,
    b: 2,
    c: 3,
  };
});
module.exports = object;
