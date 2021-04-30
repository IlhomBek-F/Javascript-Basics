const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y); // result --> 1,2,4

let a = 8;
b = 5;
(() => {
  [a, b] = [b, a];
})();

console.log(a);
console.log(b);
