function nextInLine(arr, item) {
  arr.push(item);

  return arr.shift();
}

var testArr = ["a", "b", "c", "d"];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, "e"));
console.log("After: " + JSON.stringify(testArr));
