function testStrict(val) {
  if (val !== 18) {
    return "Not Equal";
  }

  return "Equal";
}

console.log(testStrict(12)); // result --> Not Equal
