function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10)); // result --> 10 or over
