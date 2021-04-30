function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

console.log(testSize(3)); // result --> "Tiny"
console.log(testSize(9)); // result --> "Small"
console.log(testSize(12)); // result --> "Medium"
console.log(testSize(17)); // result --> "Large"
console.log(testSize(23)); // result --> "Huge"
