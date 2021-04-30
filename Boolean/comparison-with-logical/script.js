function testGreaterThan(val) {
  if (val > 100) {
    return "over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or under";
}

console.log(testGreaterThan(110)); // result --> over 100
