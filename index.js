const car = require("./car");

new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
  console.log("My car information:", car); // Should log { model: 'Tesla', color: 'black', year: '2020' }, but it logs {}
});
