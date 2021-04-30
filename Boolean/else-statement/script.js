function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger Than 5";
  } else {
    result = "5 or smaller";
  }

  return result;
}

console.log(testElse(4)); // result ---> 5 or smaller
