function testLessThan(val) {
  if (val < 25) {
    return "Smaller Than 25";
  }

  if (val < 24) {
    return "Smaller Than 24";
  }

  return "More Than 24";
}

console.log(testLessThan(23)); // result --> Smaller than 24
