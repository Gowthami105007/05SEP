const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Done!'), 1000);
  });
};
fetchData().then(data => console.log(data)); // Done!