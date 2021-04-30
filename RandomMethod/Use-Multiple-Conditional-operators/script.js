function checkSignIn(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSignIn(10)); // result --> positive;
console.log(checkSignIn(-19)); // result ---> negative;
