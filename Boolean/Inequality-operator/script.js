function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }

  return "Equal";
}

console.log(testNotEqual(11)); // result --> Not Equal
