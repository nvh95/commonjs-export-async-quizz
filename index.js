new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
  console.log(object); // Should log {a: 1, b: 2, c: 3}
});
