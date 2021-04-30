function caseInSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

console.log(caseInSwitch(1)); // result --> "alpha";
console.log(caseInSwitch(2)); // result --> "beta";
console.log(caseInSwitch(3)); // result --> "gamma";
console.log(caseInSwitch(4)); // result --> "delta";
