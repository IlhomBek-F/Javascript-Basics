const stats = {
  max: 57.43,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.74,
  average: 35.85,
};

const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();

console.log(half(stats)); // result --> 28.345
