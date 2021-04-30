function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "inside";
}

console.log(testLogicalOr(15)); // result --> inside
