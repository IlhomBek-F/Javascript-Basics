function printManyTimes(str) {
  "use strict";

  var SENTENCE = str + " is cool";

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}

console.log(printManyTimes("Coding every day"));
