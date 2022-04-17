let car = {};

new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
  car = {
    model: "Tesla",
    color: "black",
    year: "2020",
  };
});
module.exports = car;
