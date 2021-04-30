function testLogical(val) {
  if (val <= 50) {
    if (val) {
      return "Yes";
    }
  }

  return "No";
}

console.log(testLogical(40)); // return --> Yes
